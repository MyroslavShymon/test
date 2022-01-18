import { JwtService } from '@nestjs/jwt';
import { User } from '../../entities';
import { IToken } from '../../interfaces/token.interface';
export declare class TokenService {
    private jwtService;
    constructor(jwtService: JwtService);
    generateToken(user: User): IToken;
}
