import { AuthService } from './auth.service';
import { LoginUserDto } from './dtos/login-user.dto';
import { CreateUserDto } from "../../core";
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    login(userDto: LoginUserDto): Promise<import("../../core/interfaces/token.interface").IToken>;
    registration(userDto: CreateUserDto): Promise<import("../../core/interfaces/token.interface").IToken>;
}
