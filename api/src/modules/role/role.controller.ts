import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Post,
    Put,
    Query,
} from '@nestjs/common';
import {RoleService} from './role.service';
import {CreateRoleDto, UpdateRoleDto} from "../../core";

@Controller('role')
export class RoleController {
    constructor(private roleService: RoleService) {
    }

    @Post()
    create(@Body() roleDto: CreateRoleDto) {
        return this.roleService.createRole(roleDto);
    }

    @Get()
    getAll() {
        return this.roleService.getAllRoles();
    }

    @Get(':id')
    getById(@Param() params) {
        return this.roleService.findRoleById(params.id);
    }

    @Put(':id')
    changeRole(@Param() params, @Body() roleDto: UpdateRoleDto) {
        return this.roleService.changeRoleById(params.id, roleDto);
    }

    @Delete()
    removeAll() {
        return this.roleService.removeAllRoles();
    }

    @Delete(':id')
    removeById(@Param() params) {
        return this.roleService.removeRoleById(params.id);
    }
}
