import { Role } from 'src/core/entities/role.entity';
import { Repository } from 'typeorm';
import { IDefaultSuccessResponse } from 'src/core/interfaces/default-response.interface';
import { CreateRoleDto, UpdateRoleDto } from "../../core";
export declare class RoleService {
    private readonly roleRepository;
    constructor(roleRepository: Repository<Role>);
    createRole(dto: CreateRoleDto): Promise<Role>;
    getAllRoles(): Promise<Role[]>;
    findRoleById(id: number): Promise<Role>;
    getRoleByTitle(title: string): Promise<Role>;
    changeRoleById(id: number, dto: UpdateRoleDto): Promise<Role>;
    removeAllRoles(): Promise<IDefaultSuccessResponse>;
    removeRoleById(id: number): Promise<IDefaultSuccessResponse>;
}
