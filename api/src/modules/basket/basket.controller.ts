import {Controller, Get, Post, Body, Patch, Param, Delete} from '@nestjs/common';
import {BasketService} from './basket.service';
import {CreateBasketDto, CreateUserDto} from "../../core";
import {AddProductsToBasketDto} from "../../core/dtos/basket/add-products-to-basket.dto";

@Controller('basket')
export class BasketController {
    constructor(private readonly basketService: BasketService) {
    }

    @Post()
    create(@Body() addProductsToBasketDto: AddProductsToBasketDto) {
        return this.basketService.addProductsToBasket(addProductsToBasketDto)
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.basketService.findOne(+id);
    }

    @Delete(':id')
    delete(@Param('id') id: string) {
        return this.basketService.delete(+id);
    }
}
