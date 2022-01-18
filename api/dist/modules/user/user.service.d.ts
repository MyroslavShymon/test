import { User } from 'src/core/entities';
import { FileService } from 'src/core/modules/file/file.service';
import { Repository } from 'typeorm';
import { RoleService } from '../role/role.service';
import { IDefaultSuccessResponse } from '../../core/interfaces/default-response.interface';
import { AddRoleDto, CreateUserDto, UpdateUserDto } from "../../core";
import { BasketService } from "../basket/basket.service";
export declare class UserService {
    private fileService;
    private roleService;
    private basketService;
    private readonly userRepository;
    constructor(fileService: FileService, roleService: RoleService, basketService: BasketService, userRepository: Repository<User>);
    createUser(createUserDto: CreateUserDto): Promise<User>;
    addRoleToUser({ roleId, userId }: AddRoleDto): Promise<any>;
    getAllUsers(): Promise<User[]>;
    getUserWithRoleByUserId(id: number): Promise<User>;
    getUserWithRoleByEmail(email: string): Promise<User>;
    findUserById(id: number): Promise<User>;
    findUserByEmail(email: string): Promise<User>;
    changeUserById(id: number, dto: UpdateUserDto): Promise<User>;
    removeAllUsers(): Promise<IDefaultSuccessResponse>;
    removeUserById(id: number): Promise<IDefaultSuccessResponse>;
}
