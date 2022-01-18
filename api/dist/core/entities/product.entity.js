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
exports.Product = void 0;
const typeorm_1 = require("typeorm");
const swagger_1 = require("@nestjs/swagger");
const product_basket_entity_1 = require("./product-basket.entity");
let Product = class Product {
};
__decorate([
    (0, swagger_1.ApiProperty)({ example: '1', description: 'Unique id' }),
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Product.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'tea', description: 'title product' }),
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: false }),
    __metadata("design:type", String)
], Product.prototype, "title", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'the best english tea at the world', description: 'description of product' }),
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], Product.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '24452', description: 'cost of product' }),
    (0, typeorm_1.Column)({ type: 'numeric', nullable: false }),
    __metadata("design:type", Number)
], Product.prototype, "cost", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '/ddhgrdg/drfgbdfb/sdvgd.jpg', description: 'image of product' }),
    (0, typeorm_1.Column)({ type: 'varchar', length: 150, nullable: true }),
    __metadata("design:type", String)
], Product.prototype, "image", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => product_basket_entity_1.ProductToBasket, (productToBasket) => productToBasket.product, {
        onDelete: 'CASCADE',
    }),
    __metadata("design:type", Array)
], Product.prototype, "productToBaskets", void 0);
Product = __decorate([
    (0, typeorm_1.Entity)()
], Product);
exports.Product = Product;
//# sourceMappingURL=product.entity.js.map