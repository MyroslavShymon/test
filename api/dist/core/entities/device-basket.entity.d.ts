import { Product } from "./product.entity";
import { Basket } from "./basket.entity";
export declare class ProductToBasket {
    productToBasketId: number;
    productId: number;
    basketId: number;
    count: number;
    product: Product;
    basket: Basket;
}
