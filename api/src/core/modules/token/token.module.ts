import { Module } from '@nestjs/common';
import { TokenService } from './token.service';
import { JwtModule } from '@nestjs/jwt';
import { jwtOptions } from '../../../config';

@Module({
	providers: [TokenService],
	imports: [JwtModule.register(jwtOptions)],
	exports: [TokenService],
})
export class TokenModule {}
