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
exports.RoleService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const role_entity_1 = require("../../core/entities/role.entity");
const typeorm_2 = require("typeorm");
const default_response_interface_1 = require("../../core/interfaces/default-response.interface");
let RoleService = class RoleService {
    constructor(roleRepository) {
        this.roleRepository = roleRepository;
    }
    async createRole(dto) {
        const existedRole = await this.roleRepository.findOne({
            where: { title: dto.title, description: dto.description },
        });
        if (existedRole) {
            throw new common_1.BadRequestException('Роль з таким іменем вже існує');
        }
        return this.roleRepository.save(dto);
    }
    async getAllRoles() {
        return this.roleRepository.find();
    }
    async findRoleById(id) {
        try {
            return await this.roleRepository.findOneOrFail(id);
        }
        catch (e) {
            throw new common_1.BadRequestException(e === null || e === void 0 ? void 0 : e.detail);
        }
    }
    async getRoleByTitle(title) {
        const role = await this.roleRepository.findOne({ where: { title } });
        if (!role) {
            throw new common_1.NotFoundException(`Немає ролі з назвою ${title}`);
            console.log('role');
        }
        return role;
    }
    async changeRoleById(id, dto) {
        const role = await this.findRoleById(id);
        if (role.title === dto.title) {
            throw new common_1.BadRequestException('Ви хочете змінити назву ролі на ту ж саму');
        }
        if (role.description === dto.description) {
            throw new common_1.BadRequestException('Ви хочете змінити опис ролі на ту ж саму');
        }
        if (dto.title)
            role.title = dto.title;
        if (dto.description)
            role.description = dto.description;
        return this.roleRepository.save(role);
    }
    async removeAllRoles() {
        await (0, typeorm_2.getConnection)().createQueryBuilder().delete().from(role_entity_1.Role).execute();
        return {
            status: common_1.HttpStatus.OK,
            message: 'Ви видалили всі рядки',
        };
    }
    async removeRoleById(id) {
        await this.findRoleById(id);
        await this.roleRepository.delete(id);
        return {
            status: common_1.HttpStatus.OK,
            message: `Роль з id ${id} була видалена`,
        };
    }
};
RoleService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(role_entity_1.Role)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], RoleService);
exports.RoleService = RoleService;
//# sourceMappingURL=role.service.js.map