/// <reference types="multer" />
import { HttpStatus } from '@nestjs/common';
import { CreateProductDto, UpdateProductDto } from "../../core";
import { Product } from "../../core/entities/product.entity";
import { FileService } from "../../core/modules/file/file.service";
import { Repository } from "typeorm";
export declare class ProductService {
    private fileService;
    private readonly productRepository;
    constructor(fileService: FileService, productRepository: Repository<Product>);
    create(createProductDto: CreateProductDto, image?: Express.Multer.File): Promise<{
        cost: number;
        image: string;
        title: string;
        description: string;
    } & Product>;
    findAll(): Promise<Product[]>;
    findOne(id: number): Promise<Product>;
    update(id: number, updateProductDto: UpdateProductDto): Promise<Product>;
    remove(id: number): Promise<{
        status: HttpStatus;
        message: string;
    }>;
}
