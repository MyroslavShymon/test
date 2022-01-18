import {Module} from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';
import {Role} from 'src/core/entities/role.entity';
import {FileService} from 'src/core/modules/file/file.service';
import {RoleService} from '../role/role.service';
import {UserController} from './user.controller';
import {UserService} from './user.service';
import {User} from '../../core/entities';
import {BasketModule} from "../basket/basket.module";

@Module({
    controllers: [UserController],
    providers: [UserService, FileService, RoleService],
    imports: [TypeOrmModule.forFeature([User, Role]), BasketModule],
    exports: [UserService],
})
export class UserModule {
}
