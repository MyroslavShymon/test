import { RoleService } from './role.service';
import { CreateRoleDto, UpdateRoleDto } from "../../core";
export declare class RoleController {
    private roleService;
    constructor(roleService: RoleService);
    create(roleDto: CreateRoleDto): Promise<import("../../core/entities").Role>;
    getAll(): Promise<import("../../core/entities").Role[]>;
    getById(params: any): Promise<import("../../core/entities").Role>;
    changeRole(params: any, roleDto: UpdateRoleDto): Promise<import("../../core/entities").Role>;
    removeAll(): Promise<import("../../core/interfaces/default-response.interface").IDefaultSuccessResponse>;
    removeById(params: any): Promise<import("../../core/interfaces/default-response.interface").IDefaultSuccessResponse>;
}
