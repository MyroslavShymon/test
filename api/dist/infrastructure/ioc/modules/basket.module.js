"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BasketModule = void 0;
const common_1 = require("@nestjs/common");
const basket_service_1 = require("../../../domains/modules/basket/services/basket.service");
const controllers_1 = require("../../../presentation/http/controllers");
let BasketModule = class BasketModule {
};
BasketModule = __decorate([
    (0, common_1.Module)({
        controllers: [controllers_1.BasketController],
        providers: [basket_service_1.BasketService],
    })
], BasketModule);
exports.BasketModule = BasketModule;
//# sourceMappingURL=basket.module.js.map