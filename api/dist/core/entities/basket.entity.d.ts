import { User } from "./user.entity";
import { ProductToBasket } from "./product-basket.entity";
export declare class Basket {
    id: number;
    user: User;
    productToBaskets: ProductToBasket[];
}
