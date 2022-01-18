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
exports.ProductService = void 0;
const common_1 = require("@nestjs/common");
const product_entity_1 = require("../../core/entities/product.entity");
const file_service_1 = require("../../core/modules/file/file.service");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const enums_1 = require("../../core/enums");
let ProductService = class ProductService {
    constructor(fileService, productRepository) {
        this.fileService = fileService;
        this.productRepository = productRepository;
    }
    async create(createProductDto, image) {
        const imagePath = image
            ? this.fileService.createFile(enums_1.FileType.IMAGE, image)
            : null;
        return this.productRepository.save(Object.assign(Object.assign({}, createProductDto), { cost: Number(createProductDto.cost), image: imagePath }));
    }
    async findAll() {
        return this.productRepository.find();
    }
    async findOne(id) {
        return await this.productRepository.findOne(id);
    }
    async update(id, updateProductDto) {
        const product = await this.findOne(id);
        console.log(product);
        if (product.title === updateProductDto.title) {
            throw new common_1.BadRequestException('Ви хочете змінити назву на ту саму');
        }
        if (product.description === updateProductDto.description) {
            throw new common_1.BadRequestException('Ви хочете змінити опис на той самий');
        }
        if (product.cost === updateProductDto.cost) {
            throw new common_1.BadRequestException('Ви хочете змінити ціну на ту саму');
        }
        if (updateProductDto.title)
            product.title = updateProductDto.title;
        if (updateProductDto.description)
            product.description = updateProductDto.description;
        if (updateProductDto.cost)
            product.cost = updateProductDto.cost;
        return this.productRepository.save(product);
    }
    async remove(id) {
        await this.findOne(id);
        await this.productRepository.delete(id);
        return {
            status: common_1.HttpStatus.OK,
            message: `Продукт з id ${id} була видалена`,
        };
    }
};
ProductService = __decorate([
    (0, common_1.Injectable)(),
    __param(1, (0, typeorm_1.InjectRepository)(product_entity_1.Product)),
    __metadata("design:paramtypes", [file_service_1.FileService,
        typeorm_2.Repository])
], ProductService);
exports.ProductService = ProductService;
//# sourceMappingURL=product.service.js.map