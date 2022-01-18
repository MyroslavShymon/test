import {Column, Entity, JoinTable, ManyToMany, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {ApiProperty} from "@nestjs/swagger";
import {ProductToBasket} from "./product-basket.entity";

@Entity()
export class Product {
    @ApiProperty({example: '1', description: 'Unique id'})
    @PrimaryGeneratedColumn()
    public id: number

    @ApiProperty({example: 'tea', description: 'title product'})
    @Column({type: 'varchar', length: 100, nullable: false})
    public title: string

    @ApiProperty({example: 'the best english tea at the world', description: 'description of product'})
    @Column({type: 'text', nullable: true})
    public description: string

    @ApiProperty({example: '24452', description: 'cost of product'})
    @Column({type: 'numeric', nullable: false})
    public cost: number

    @ApiProperty({example: '/ddhgrdg/drfgbdfb/sdvgd.jpg', description: 'image of product'})
    @Column({type: 'varchar', length: 150, nullable: true})
    public image?: string;

    @OneToMany(() => ProductToBasket, (productToBasket) => productToBasket.product, {
        onDelete: 'CASCADE',
    })
    public productToBaskets!: ProductToBasket[];
}
