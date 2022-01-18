import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Post,
    Put,
    Query,
    // UploadedFile,
    // UseInterceptors,
} from '@nestjs/common';
// import {FileInterceptor} from '@nestjs/platform-express';
import {AddRoleDto, CreateUserDto, UpdateUserDto} from '../../core';
import {UserService} from './user.service';

@Controller('user')
export class UserController {
    constructor(private userService: UserService) {
    }
    
    @Post()
    create(@Body() createUserDto: CreateUserDto) {
        return this.userService.createUser(createUserDto)
    }

    @Post('/add-role')
    addRole(@Body() roleDto: AddRoleDto) {
        return this.userService.addRoleToUser(roleDto);
    }

    @Get()
    getAll() {
        return this.userService.getAllUsers();
    }

    @Get(':id')
    getById(@Param() params) {
        return this.userService.findUserById(params.id);
    }

    @Get('/email')
    getByEmail(@Query() query) {
        return this.userService.findUserByEmail(query.email);
    }

    @Put(':id')
    changeUser(@Param() params, @Body() userDto: UpdateUserDto) {
        return this.userService.changeUserById(params.id, userDto);
    }

    @Delete(':id')
    removeById(@Param() params) {
        return this.userService.removeUserById(params.id);
    }

    @Delete()
    removeAll() {
        return this.userService.removeAllUsers();
    }
}
