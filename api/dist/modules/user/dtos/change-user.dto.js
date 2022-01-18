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
exports.ChangeUserDto = void 0;
const class_validator_1 = require("class-validator");
class ChangeUserDto {
}
__decorate([
    (0, class_validator_1.IsString)({ message: 'Електроний адрес має бути рядком' }),
    (0, class_validator_1.IsEmail)({}, { message: 'Не коректний електроний адрес' }),
    __metadata("design:type", String)
], ChangeUserDto.prototype, "email", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: "Ім'я має бути рядком" }),
    __metadata("design:type", String)
], ChangeUserDto.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: 'Пароль має бути рядком' }),
    (0, class_validator_1.Length)(4, 16, {
        message: 'Пароль має бути більше 4 і менше 16 символів',
    }),
    __metadata("design:type", String)
], ChangeUserDto.prototype, "password", void 0);
exports.ChangeUserDto = ChangeUserDto;
//# sourceMappingURL=change-user.dto.js.map