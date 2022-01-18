import {
    BadRequestException,
    HttpStatus,
    Injectable,
    NotFoundException,
    UnauthorizedException,
} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {User} from 'src/core/entities';
import {FileType} from 'src/core/enums';
import {FileService} from 'src/core/modules/file/file.service';
import {getConnection, Repository} from 'typeorm';
import {RoleService} from '../role/role.service';
import {IDefaultSuccessResponse} from '../../core/interfaces/default-response.interface';
import * as bcrypt from 'bcryptjs';
import {AddRoleDto, CreateUserDto, UpdateUserDto} from "../../core";
import {BasketService} from "../basket/basket.service";

@Injectable()
export class UserService {
    constructor(
        private fileService: FileService,
        private roleService: RoleService,
        private basketService: BasketService,
        @InjectRepository(User)
        private readonly userRepository: Repository<User>,
    ) {
    }

    async createUser(createUserDto: CreateUserDto): Promise<User> {
        try {
            const role = await this.roleService.getRoleByTitle('User');

            const user = await this.userRepository.save({
                ...createUserDto,
                roles: [role],
            });
            await this.basketService.create(user)
            return user
        } catch (e) {
            if (e?.detail) {
                throw new BadRequestException(e?.detail)
            }
            throw e
        }
    }


    async addRoleToUser({roleId, userId}: AddRoleDto): Promise<any> {
        const role = await this.roleService.findRoleById(roleId);
        const userWithRoles = await this.getUserWithRoleByUserId(userId);
        if (!userWithRoles) {
            throw new NotFoundException(`Нема користувача з id ${userId}`);
        }
        const {roles, ...user} = userWithRoles;
        roles.push(role)
        await this.userRepository.save({
            ...user,
            roles,
        });
        return {
            status: HttpStatus.OK,
            message: `Ви додали роль ${role.title} користувачу з id ${userId}`,
        };
    }

    async getAllUsers(): Promise<User[]> {
        return this.userRepository.find();
    }

    async getUserWithRoleByUserId(id: number) {
        return this.userRepository
            .createQueryBuilder('user')
            .where({id})
            .leftJoinAndSelect('user.roles', 'roles')
            .getOne();
    }

    async getUserWithRoleByEmail(email: string) {
        return this.userRepository
            .createQueryBuilder('user')
            .where({email})
            .leftJoinAndSelect('user.roles', 'roles')
            .getOne();
    }

    async findUserById(id: number): Promise<User> {
        const user = await this.userRepository.findOne({
            where: {id},
        });

        if (!user) {
            throw new NotFoundException(`Немає користувача з id ${id}`);
        }
        return user;
    }

    async findUserByEmail(email: string): Promise<User> {
        return this.userRepository.findOne({
            where: {email},
        });
    }

    async changeUserById(id: number, dto: UpdateUserDto): Promise<User> {
        const user = await this.findUserById(id);

        const passwordEquals: boolean = await bcrypt.compare(
            dto.password,
            user.password,
        );
        if (passwordEquals) {
            throw new UnauthorizedException({
                message: 'Ви хочете змінити пароль на той самий',
            });
        }
        const hashPassword = await bcrypt.hash(dto.password, 5);

        if (user.email === dto.email) {
            throw new BadRequestException(
                'Ви хочете змінити електрону адресу на ту саму',
            );
        }
        if (user.name === dto.name) {
            throw new BadRequestException('Ви хочете змінити нікнейм на той самий');
        }

        if (dto.email)
            user.email = dto.email;
        if (dto.name)
            user.name = dto.name;
        if (hashPassword)
            user.password = hashPassword;

        return this.userRepository.save(user);
    }

    async removeAllUsers(): Promise<IDefaultSuccessResponse> {
        await getConnection().createQueryBuilder().delete().from(User).execute();
        return {
            status: HttpStatus.OK,
            message: 'Ви видалили всі рядки',
        };
    }

    async removeUserById(id: number): Promise<IDefaultSuccessResponse> {
        await this.findUserById(id);
        await this.userRepository.delete(id);
        return {
            status: HttpStatus.OK,
            message: `Користувач з id ${id} була видалена`,
        };
    }
}
