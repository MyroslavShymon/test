import { UserService } from '../user/user.service';
import { LoginUserDto } from './dtos/login-user.dto';
import { IToken } from '../../core/interfaces/token.interface';
import { TokenService } from '../../core/modules/token/token.service';
import { CreateUserDto } from "../../core";
export declare class AuthService {
    private userService;
    private tokenService;
    constructor(userService: UserService, tokenService: TokenService);
    login(dto: LoginUserDto): Promise<IToken>;
    private validateUser;
    registration(dto: CreateUserDto): Promise<IToken>;
}
