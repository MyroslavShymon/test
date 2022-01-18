import {
    Body,
    Controller,
    Post,
    UploadedFile,
    UseInterceptors,
} from '@nestjs/common';
import {AuthService} from './auth.service';
import {LoginUserDto} from './dtos/login-user.dto';
import {FileInterceptor} from '@nestjs/platform-express';
import {CreateUserDto} from "../../core";

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {
    }

    @Post('/login')
    login(@Body() userDto: LoginUserDto) {
        return this.authService.login(userDto);
    }

    @Post('/registration')
    @UseInterceptors(FileInterceptor('image'))
    registration(
        @Body() userDto: CreateUserDto,
    ) {
        return this.authService.registration(userDto);
    }
}
