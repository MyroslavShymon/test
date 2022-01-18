import {BadRequestException, HttpStatus, Injectable, UnauthorizedException} from '@nestjs/common';
import {CreateProductDto, UpdateProductDto} from "../../core";
import {Product} from "../../core/entities/product.entity";
import {FileService} from "../../core/modules/file/file.service";
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import {FileType} from "../../core/enums";

@Injectable()
export class ProductService {
    constructor(
        private fileService: FileService,
        @InjectRepository(Product)
        private readonly productRepository: Repository<Product>,
    ) {
    }

    async create(
        createProductDto: CreateProductDto,
        image?: Express.Multer.File
    ) {
        const imagePath = image
            ? this.fileService.createFile(FileType.IMAGE, image)
            : null;

        return this.productRepository.save({
            ...createProductDto,
            cost: Number(createProductDto.cost),
            image: imagePath,
        });
    }

    async findAll() {
        return this.productRepository.find()
    }

    async findOne(id: number) {
        return await this.productRepository.findOne(id)
    }

    async update(id: number, updateProductDto: UpdateProductDto) {
        const product = await this.findOne(id);
        console.log(product)

        if (product.title === updateProductDto.title) {
            throw new BadRequestException(
                'Ви хочете змінити назву на ту саму',
            );
        }
        if (product.description === updateProductDto.description) {
            throw new BadRequestException('Ви хочете змінити опис на той самий');
        }
        if (product.cost === updateProductDto.cost) {
            throw new BadRequestException('Ви хочете змінити ціну на ту саму');
        }

        if (updateProductDto.title)
            product.title = updateProductDto.title
        if (updateProductDto.description)
            product.description = updateProductDto.description
        if (updateProductDto.cost)
            product.cost = updateProductDto.cost


        return this.productRepository.save(product);
    }

    async remove(id: number) {
        await this.findOne(id);
        await this.productRepository.delete(id);
        return {
            status: HttpStatus.OK,
            message: `Продукт з id ${id} була видалена`,
        };
    }
}
