import { UserService } from './user.service';
import { CreateUserDto, UpdateUserDto } from "../core";
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    create(createUserDto: CreateUserDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateUserDto: UpdateUserDto): string;
    remove(id: string): string;
}
