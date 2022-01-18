import {Module} from '@nestjs/common';
import {AuthService} from './auth.service';
import {AuthController} from './auth.controller';
import {TypeOrmModule} from '@nestjs/typeorm';
import {User, Role} from '../../core/entities';
import {UserModule} from '../user/user.module';
import {TokenModule} from '../../core/modules';

@Module({
    providers: [AuthService],
    imports: [
        TypeOrmModule.forFeature([User, Role]),
        UserModule,
        TokenModule,
    ],
    controllers: [AuthController],
})
export class AuthModule {
}
