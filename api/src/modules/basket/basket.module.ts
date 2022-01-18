import {Module} from '@nestjs/common';
import {BasketService} from './basket.service';
import {BasketController} from './basket.controller';
import {TypeOrmModule} from "@nestjs/typeorm";
import {Basket} from "../../core/entities/basket.entity";
import {ProductToBasket} from "../../core/entities";

@Module({
    imports: [TypeOrmModule.forFeature([Basket, ProductToBasket])],
    controllers: [BasketController],
    providers: [BasketService],
    exports: [BasketService]
})
export class BasketModule {
}
