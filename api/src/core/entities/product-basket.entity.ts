import {Column, Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {Product} from "./product.entity";
import {Basket} from "./basket.entity";

@Entity()
export class ProductToBasket {
    @PrimaryGeneratedColumn()
    public productToBasketId!: number;

    @Column()
    public productId!: number;

    @Column()
    public basketId!: number;

    @Column({type: 'integer', default: 0})
    public count!: number;

    @ManyToOne(() => Product, (product: Product) => product.productToBaskets, {
        onDelete: 'CASCADE',
    })
    public product!: Product;

    @ManyToOne(() => Basket, (basket: Basket) => basket.productToBaskets, {
        onDelete: 'CASCADE',
    })
    public basket!: Basket;
}
