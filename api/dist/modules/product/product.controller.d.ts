/// <reference types="multer" />
import { ProductService } from './product.service';
import { CreateProductDto, UpdateProductDto } from "../../core";
export declare class ProductController {
    private readonly productService;
    constructor(productService: ProductService);
    create(createProductDto: CreateProductDto, image: Express.Multer.File): Promise<{
        cost: number;
        image: string;
        title: string;
        description: string;
    } & import("../../core/entities").Product>;
    findAll(): Promise<import("../../core/entities").Product[]>;
    findOne(id: string): Promise<import("../../core/entities").Product>;
    update(id: string, updateProductDto: UpdateProductDto): Promise<import("../../core/entities").Product>;
    remove(id: string): Promise<{
        status: import("@nestjs/common").HttpStatus;
        message: string;
    }>;
}
