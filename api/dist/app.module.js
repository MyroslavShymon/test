"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const modules_1 = require("./modules");
const entities_1 = require("./core/entities");
const nest_1 = require("./infrastructure/nest");
const database_1 = require("./infrastructure/database");
const product_module_1 = require("./modules/product/product.module");
const order_module_1 = require("./modules/order/order.module");
const basket_module_1 = require("./modules/basket/basket.module");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            nest_1.ConfigModule.forRoot(),
            database_1.DatabaseConfigService.provideTypeOrmModule([entities_1.User, entities_1.Role, entities_1.Basket, entities_1.Product, entities_1.ProductToBasket]),
            modules_1.AuthModule,
            modules_1.UserModule,
            modules_1.RoleModule,
            product_module_1.ProductModule,
            order_module_1.OrderModule,
            basket_module_1.BasketModule,
        ],
        controllers: [],
        providers: [],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map