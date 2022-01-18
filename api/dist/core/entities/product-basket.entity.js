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
exports.ProductToBasket = void 0;
const typeorm_1 = require("typeorm");
const product_entity_1 = require("./product.entity");
const basket_entity_1 = require("./basket.entity");
let ProductToBasket = class ProductToBasket {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], ProductToBasket.prototype, "productToBasketId", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], ProductToBasket.prototype, "productId", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], ProductToBasket.prototype, "basketId", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'integer', default: 0 }),
    __metadata("design:type", Number)
], ProductToBasket.prototype, "count", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => product_entity_1.Product, (product) => product.productToBaskets, {
        onDelete: 'CASCADE',
    }),
    __metadata("design:type", product_entity_1.Product)
], ProductToBasket.prototype, "product", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => basket_entity_1.Basket, (basket) => basket.productToBaskets, {
        onDelete: 'CASCADE',
    }),
    __metadata("design:type", basket_entity_1.Basket)
], ProductToBasket.prototype, "basket", void 0);
ProductToBasket = __decorate([
    (0, typeorm_1.Entity)()
], ProductToBasket);
exports.ProductToBasket = ProductToBasket;
//# sourceMappingURL=product-basket.entity.js.map