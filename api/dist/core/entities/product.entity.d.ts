import { ProductToBasket } from "./product-basket.entity";
export declare class Product {
    id: number;
    title: string;
    description: string;
    cost: number;
    image?: string;
    productToBaskets: ProductToBasket[];
}
