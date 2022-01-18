import { AddRoleDto, CreateUserDto, UpdateUserDto } from '../../core';
import { UserService } from './user.service';
export declare class UserController {
    private userService;
    constructor(userService: UserService);
    create(createUserDto: CreateUserDto): Promise<import("../../core/entities").User>;
    addRole(roleDto: AddRoleDto): Promise<any>;
    getAll(): Promise<import("../../core/entities").User[]>;
    getById(params: any): Promise<import("../../core/entities").User>;
    getByEmail(query: any): Promise<import("../../core/entities").User>;
    changeUser(params: any, userDto: UpdateUserDto): Promise<import("../../core/entities").User>;
    removeById(params: any): Promise<import("../../core/interfaces/default-response.interface").IDefaultSuccessResponse>;
    removeAll(): Promise<import("../../core/interfaces/default-response.interface").IDefaultSuccessResponse>;
}
