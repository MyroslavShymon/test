import { Repository } from "typeorm";
import { Basket, ProductToBasket, User } from "../../core/entities";
import { AddProductsToBasketDto } from "../../core/dtos/basket/add-products-to-basket.dto";
export declare class BasketService {
    private readonly basketRepository;
    private readonly productToBasketRepository;
    constructor(basketRepository: Repository<Basket>, productToBasketRepository: Repository<ProductToBasket>);
    create(user: User): Promise<{
        user: User;
    } & Basket>;
    addProductsToBasket({ basketId, productId, count }: AddProductsToBasketDto): Promise<{
        basketId: number;
        productId: number;
        count: number;
    } & ProductToBasket>;
    findOne(id: number): Promise<ProductToBasket[]>;
    delete(id: number): Promise<void>;
}
