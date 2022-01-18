import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User } from '../../entities';
import { IUserJwtInterface } from '../../interfaces/user-jwt.interface';
import { IToken } from '../../interfaces/token.interface';

@Injectable()
export class TokenService {
	constructor(private jwtService: JwtService) {}

	generateToken(user: User): IToken {
		const payload: IUserJwtInterface = {
			email: user.email,
			id: user.id,
			roles: user.roles,
		};
		return {
			token: this.jwtService.sign(payload),
		};
	}
}
