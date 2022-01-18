import {Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn} from "typeorm";
import {ApiProperty} from "@nestjs/swagger";
import {User} from "./user.entity";
import {ProductToBasket} from "./product-basket.entity";

@Entity()
export class Basket {
    @ApiProperty({example: '1', description: 'Unique id'})
    @PrimaryGeneratedColumn()
    public id: number

    @ApiProperty({
        example: '2',
        description: 'user id',
    })
    @OneToOne(() => User)
    @JoinColumn()
    public user: User
    
    @OneToMany(() => ProductToBasket, (productToBasket) => productToBasket.basket, {
        onDelete: 'CASCADE',
    })
    public productToBaskets!: ProductToBasket[];
}
