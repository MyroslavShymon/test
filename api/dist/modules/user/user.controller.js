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
exports.UserController = void 0;
const common_1 = require("@nestjs/common");
const core_1 = require("../../core");
const user_service_1 = require("./user.service");
let UserController = class UserController {
    constructor(userService) {
        this.userService = userService;
    }
    create(createUserDto) {
        return this.userService.createUser(createUserDto);
    }
    addRole(roleDto) {
        return this.userService.addRoleToUser(roleDto);
    }
    getAll() {
        return this.userService.getAllUsers();
    }
    getById(params) {
        return this.userService.findUserById(params.id);
    }
    getByEmail(query) {
        return this.userService.findUserByEmail(query.email);
    }
    changeUser(params, userDto) {
        return this.userService.changeUserById(params.id, userDto);
    }
    removeById(params) {
        return this.userService.removeUserById(params.id);
    }
    removeAll() {
        return this.userService.removeAllUsers();
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [core_1.CreateUserDto]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "create", null);
__decorate([
    (0, common_1.Post)('/add-role'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [core_1.AddRoleDto]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "addRole", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], UserController.prototype, "getAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "getById", null);
__decorate([
    (0, common_1.Get)('/email'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "getByEmail", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, core_1.UpdateUserDto]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "changeUser", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "removeById", null);
__decorate([
    (0, common_1.Delete)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], UserController.prototype, "removeAll", null);
UserController = __decorate([
    (0, common_1.Controller)('user'),
    __metadata("design:paramtypes", [user_service_1.UserService])
], UserController);
exports.UserController = UserController;
//# sourceMappingURL=user.controller.js.map