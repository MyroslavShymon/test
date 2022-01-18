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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BasketService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const entities_1 = require("../../core/entities");
let BasketService = class BasketService {
    constructor(basketRepository, productToBasketRepository) {
        this.basketRepository = basketRepository;
        this.productToBasketRepository = productToBasketRepository;
    }
    async create(user) {
        return this.basketRepository.save({ user });
    }
    async addProductsToBasket({ basketId, productId, count }) {
        const device = await this.productToBasketRepository.findOne({ where: { basketId, productId } });
        if (device && device.count !== count) {
            device.count = count;
            await this.productToBasketRepository.save(device);
        }
        else if (!device)
            return this.productToBasketRepository.save({ basketId, productId, count });
    }
    async findOne(id) {
        return this.productToBasketRepository.createQueryBuilder("basket")
            .where({ basketId: id })
            .leftJoinAndSelect('basket.product', 'product')
            .getMany();
    }
    async delete(id) {
        await this.productToBasketRepository.delete({ basketId: id });
    }
};
BasketService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(entities_1.Basket)),
    __param(1, (0, typeorm_1.InjectRepository)(entities_1.ProductToBasket)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], BasketService);
exports.BasketService = BasketService;
//# sourceMappingURL=basket.service.js.map