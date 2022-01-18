import { BasketService } from './basket.service';
import { AddProductsToBasketDto } from "../../core/dtos/basket/add-products-to-basket.dto";
export declare class BasketController {
    private readonly basketService;
    constructor(basketService: BasketService);
    create(addProductsToBasketDto: AddProductsToBasketDto): Promise<{
        basketId: number;
        productId: number;
        count: number;
    } & import("../../core/entities").ProductToBasket>;
    findOne(id: string): Promise<import("../../core/entities").ProductToBasket[]>;
    delete(id: string): Promise<void>;
}
