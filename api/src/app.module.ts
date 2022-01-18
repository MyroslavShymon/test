import {Module} from '@nestjs/common';
// import {APP_FILTER} from '@nestjs/core';
// import {TypeOrmModule} from '@nestjs/typeorm';
import {AuthModule, RoleModule, UserModule} from './modules';
import {Basket, Product, ProductToBasket, Role, User} from './core/entities';
// import {FileModule, TokenModule} from './core/modules';
// import {AllExceptionsFilters} from './core/filters/all-exceptions.filter';
import {ConfigModule} from "./infrastructure/nest"
import {DatabaseConfigService} from "./infrastructure/database";
import {ProductModule} from './modules/product/product.module';
import {OrderModule} from "./modules/order/order.module";
import {BasketModule} from "./modules/basket/basket.module";

@Module({
    imports: [
        ConfigModule.forRoot(),
        DatabaseConfigService.provideTypeOrmModule([User, Role, Basket, Product, ProductToBasket]),
        AuthModule,
        UserModule,
        RoleModule,
        ProductModule,
        OrderModule,
        BasketModule,
    ],
    controllers: [],
    providers: [
        // {
        //     provide: APP_FILTER,
        //     useClass: AllExceptionsFilters,
        // },
    ],
})
export class AppModule {
}
