"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Basket = void 0;
const typeorm_1 = require("typeorm");
const swagger_1 = require("@nestjs/swagger");
const user_entity_1 = require("./user.entity");
const product_basket_entity_1 = require("./product-basket.entity");
let Basket = class Basket {
};
__decorate([
    (0, swagger_1.ApiProperty)({ example: '1', description: 'Unique id' }),
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Basket.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '2',
        description: 'user id',
    }),
    (0, typeorm_1.OneToOne)(() => user_entity_1.User),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", user_entity_1.User)
], Basket.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => product_basket_entity_1.ProductToBasket, (productToBasket) => productToBasket.basket, {
        onDelete: 'CASCADE',
    }),
    __metadata("design:type", Array)
], Basket.prototype, "productToBaskets", void 0);
Basket = __decorate([
    (0, typeorm_1.Entity)()
], Basket);
exports.Basket = Basket;
//# sourceMappingURL=basket.entity.js.map