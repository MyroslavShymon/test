"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoleModule = void 0;
const common_1 = require("@nestjs/common");
const controllers_1 = require("../../../presentation/http/controllers");
const typeorm_1 = require("@nestjs/typeorm");
const index_1 = require("../../../index");
const providers_1 = require("../providers");
let RoleModule = class RoleModule {
};
RoleModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([index_1.Role])],
        controllers: [controllers_1.RoleController],
        providers: [providers_1.RoleServiceProvider],
        exports: [providers_1.RoleServiceProvider],
    })
], RoleModule);
exports.RoleModule = RoleModule;
//# sourceMappingURL=role.module.js.map