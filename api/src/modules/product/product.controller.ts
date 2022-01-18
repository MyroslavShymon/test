import {Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, UploadedFile} from '@nestjs/common';
import {ProductService} from './product.service';
import {CreateProductDto, UpdateProductDto} from "../../core";
import {FileInterceptor} from "@nestjs/platform-express";

@Controller('product')
export class ProductController {
    constructor(private readonly productService: ProductService) {
    }

    @Post()
    @UseInterceptors(FileInterceptor('image'))
    create(@Body() createProductDto: CreateProductDto, @UploadedFile() image: Express.Multer.File,) {
        return this.productService.create(createProductDto, image);
    }

    @Get()
    findAll() {
        return this.productService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.productService.findOne(+id);
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() updateProductDto: UpdateProductDto) {
        return this.productService.update(+id, updateProductDto);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.productService.remove(+id);
    }
}
