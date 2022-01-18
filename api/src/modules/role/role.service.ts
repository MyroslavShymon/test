import {
    BadRequestException,
    HttpStatus,
    Injectable,
    NotFoundException,
} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {Role} from 'src/core/entities/role.entity';
import {getConnection, Repository} from 'typeorm';
import {IDefaultSuccessResponse} from 'src/core/interfaces/default-response.interface';
import {CreateRoleDto, UpdateRoleDto} from "../../core";

@Injectable()
export class RoleService {
    constructor(
        @InjectRepository(Role)
        private readonly roleRepository: Repository<Role>,
    ) {
    }

    async createRole(dto: CreateRoleDto): Promise<Role> {
        const existedRole = await this.roleRepository.findOne({
            where: {title: dto.title, description: dto.description},
        });

        if (existedRole) {
            throw new BadRequestException('Роль з таким іменем вже існує');
        }

        return this.roleRepository.save(dto);
    }


    async getAllRoles(): Promise<Role[]> {
        return this.roleRepository.find();
    }

    async findRoleById(id: number): Promise<Role> {
        try {
            return await this.roleRepository.findOneOrFail(id)
        } catch (e) {
            throw new BadRequestException(e?.detail)
        }
    }

    async getRoleByTitle(title: string): Promise<Role> {
        const role = await this.roleRepository.findOne({where: {title}});
        if (!role) {
            throw new NotFoundException(`Немає ролі з назвою ${title}`);
            console.log('role')
        }
        return role;
    }

    async changeRoleById(id: number, dto: UpdateRoleDto): Promise<Role> {
        const role = await this.findRoleById(id);

        if (role.title === dto.title) {
            throw new BadRequestException(
                'Ви хочете змінити назву ролі на ту ж саму',
            );
        }
        if (role.description === dto.description) {
            throw new BadRequestException('Ви хочете змінити опис ролі на ту ж саму');
        }
        if (dto.title)
            role.title = dto.title;
        if (dto.description)
            role.description = dto.description;

        return this.roleRepository.save(role);
    }

    async removeAllRoles(): Promise<IDefaultSuccessResponse> {
        await getConnection().createQueryBuilder().delete().from(Role).execute();
        return {
            status: HttpStatus.OK,
            message: 'Ви видалили всі рядки',
        };
    }

    async removeRoleById(id: number): Promise<IDefaultSuccessResponse> {
        await this.findRoleById(id);
        await this.roleRepository.delete(id);
        return {
            status: HttpStatus.OK,
            message: `Роль з id ${id} була видалена`,
        };
    }
}
