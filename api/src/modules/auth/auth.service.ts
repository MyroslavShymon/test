import {Injectable, UnauthorizedException} from '@nestjs/common';
import {UserService} from '../user/user.service';
import {LoginUserDto} from './dtos/login-user.dto';
import * as bcrypt from 'bcryptjs';
import {User} from '../../core/entities';
import {IToken} from '../../core/interfaces/token.interface';
import {TokenService} from '../../core/modules/token/token.service';
import {CreateUserDto} from "../../core";

@Injectable()
export class AuthService {
    constructor(
        private userService: UserService,
        private tokenService: TokenService,
    ) {
    }

    async login(dto: LoginUserDto): Promise<IToken> {
        const user: User = await this.validateUser(dto);
        return this.tokenService.generateToken(user);
    }

    private async validateUser(dto: LoginUserDto): Promise<User> {
        const user: User = await this.userService.getUserWithRoleByEmail(dto.email);

        if (!user) {
            throw new UnauthorizedException({
                message: 'Немає користувача з вказаною електронною адресою',
            });
        }
        const passwordEquals: boolean = await bcrypt.compare(
            dto.password,
            user.password,
        );
        if (!passwordEquals) {
            throw new UnauthorizedException({
                message: 'Не коректний пароль',
            });
        }
        return user;
    }

    async registration(
        dto: CreateUserDto,
    ): Promise<IToken> {
        const candidate: User = await this.userService.findUserByEmail(dto.email);
        if (candidate) {
            throw new UnauthorizedException({
                message: 'Вже існує користувач з вказаною електронною адресою',
            });
        }
        const hashPassword = await bcrypt.hash(dto.password, 5);

        const user: User = await this.userService.createUser(
            {
                ...dto,
                password: hashPassword,
            },
        );

        return this.tokenService.generateToken(user);
    }
}
