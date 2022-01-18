import {Injectable} from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {getConnection, Repository} from "typeorm";
import {Basket, ProductToBasket, User} from "../../core/entities";
import {AddProductsToBasketDto} from "../../core/dtos/basket/add-products-to-basket.dto";

@Injectable()
export class BasketService {
    constructor(
        @InjectRepository(Basket)
        private readonly basketRepository: Repository<Basket>,
        @InjectRepository(ProductToBasket)
        private readonly productToBasketRepository: Repository<ProductToBasket>,
    ) {
    }

    async create(user: User) {
        return this.basketRepository.save({user})
    }

    async addProductsToBasket({basketId, productId, count}: AddProductsToBasketDto) {
        const device = await this.productToBasketRepository.findOne({where: {basketId, productId}})
        if (device && device.count !== count) {
            device.count = count
            await this.productToBasketRepository.save(device)
        } else if (!device)
            return this.productToBasketRepository.save({basketId, productId, count})
    }

    async findOne(id: number) {
        return this.productToBasketRepository.createQueryBuilder("basket")
            .where({basketId: id})
            .leftJoinAndSelect('basket.product', 'product')
            .getMany();
    }

    async delete(id: number) {
        await this.productToBasketRepository.delete({basketId: id})
    }
}
