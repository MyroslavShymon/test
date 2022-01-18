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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const entities_1 = require("../../core/entities");
const enums_1 = require("../../core/enums");
const file_service_1 = require("../../core/modules/file/file.service");
const typeorm_2 = require("typeorm");
const role_service_1 = require("../role/role.service");
const bcrypt = require("bcryptjs");
const basket_service_1 = require("../basket/basket.service");
let UserService = class UserService {
    constructor(fileService, roleService, basketService, userRepository) {
        this.fileService = fileService;
        this.roleService = roleService;
        this.basketService = basketService;
        this.userRepository = userRepository;
    }
    async createUser(createUserDto) {
        try {
            const role = await this.roleService.getRoleByTitle('User');
            const user = await this.userRepository.save(Object.assign(Object.assign({}, createUserDto), { roles: [role] }));
            await this.basketService.create(user);
            return user;
        }
        catch (e) {
            if (e === null || e === void 0 ? void 0 : e.detail) {
                throw new common_1.BadRequestException(e === null || e === void 0 ? void 0 : e.detail);
            }
            throw e;
        }
    }
    async addRoleToUser({ roleId, userId }) {
        const role = await this.roleService.findRoleById(roleId);
        const userWithRoles = await this.getUserWithRoleByUserId(userId);
        if (!userWithRoles) {
            throw new common_1.NotFoundException(`Нема користувача з id ${userId}`);
        }
        const { roles } = userWithRoles, user = __rest(userWithRoles, ["roles"]);
        roles.push(role);
        await this.userRepository.save(Object.assign(Object.assign({}, user), { roles }));
        return {
            status: common_1.HttpStatus.OK,
            message: `Ви додали роль ${role.title} користувачу з id ${userId}`,
        };
    }
    async getAllUsers() {
        return this.userRepository.find();
    }
    async getUserWithRoleByUserId(id) {
        return this.userRepository
            .createQueryBuilder('user')
            .where({ id })
            .leftJoinAndSelect('user.roles', 'roles')
            .getOne();
    }
    async getUserWithRoleByEmail(email) {
        return this.userRepository
            .createQueryBuilder('user')
            .where({ email })
            .leftJoinAndSelect('user.roles', 'roles')
            .getOne();
    }
    async findUserById(id) {
        const user = await this.userRepository.findOne({
            where: { id },
        });
        if (!user) {
            throw new common_1.NotFoundException(`Немає користувача з id ${id}`);
        }
        return user;
    }
    async findUserByEmail(email) {
        return this.userRepository.findOne({
            where: { email },
        });
    }
    async changeUserById(id, dto) {
        const user = await this.findUserById(id);
        const passwordEquals = await bcrypt.compare(dto.password, user.password);
        if (passwordEquals) {
            throw new common_1.UnauthorizedException({
                message: 'Ви хочете змінити пароль на той самий',
            });
        }
        const hashPassword = await bcrypt.hash(dto.password, 5);
        if (user.email === dto.email) {
            throw new common_1.BadRequestException('Ви хочете змінити електрону адресу на ту саму');
        }
        if (user.name === dto.name) {
            throw new common_1.BadRequestException('Ви хочете змінити нікнейм на той самий');
        }
        if (dto.email)
            user.email = dto.email;
        if (dto.name)
            user.name = dto.name;
        if (hashPassword)
            user.password = hashPassword;
        return this.userRepository.save(user);
    }
    async removeAllUsers() {
        await (0, typeorm_2.getConnection)().createQueryBuilder().delete().from(entities_1.User).execute();
        return {
            status: common_1.HttpStatus.OK,
            message: 'Ви видалили всі рядки',
        };
    }
    async removeUserById(id) {
        await this.findUserById(id);
        await this.userRepository.delete(id);
        return {
            status: common_1.HttpStatus.OK,
            message: `Користувач з id ${id} була видалена`,
        };
    }
};
UserService = __decorate([
    (0, common_1.Injectable)(),
    __param(3, (0, typeorm_1.InjectRepository)(entities_1.User)),
    __metadata("design:paramtypes", [file_service_1.FileService,
        role_service_1.RoleService,
        basket_service_1.BasketService,
        typeorm_2.Repository])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map