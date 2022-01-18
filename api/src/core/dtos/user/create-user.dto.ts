import {ApiProperty} from '@nestjs/swagger'
import {
    IsEmail,
    IsNotEmpty,
    IsString,
    Matches,
    MaxLength,
    MinLength,
} from 'class-validator'

export class CreateUserDto {
    @ApiProperty({example: 'Miroslav Shymon', description: 'Name'})
    @IsNotEmpty()
    @MaxLength(100)
    @IsString()
    name: string

    @ApiProperty({
        example: 'myroslavshymon@gmail.com',
        description: 'Email',
    })
    @IsNotEmpty()
    @IsEmail()
    @MaxLength(100)
    @IsString()
    email: string

    @ApiProperty({
        example: '0965161124',
        description: 'mobile number',
    })
    @IsNotEmpty()
    @Matches(
        /((\+38)?\(?\d{3}\)?[\s\.-]?(\d{7}|\d{3}[\s\.-]\d{2}[\s\.-]\d{2}|\d{3}-\d{4}))/,
    )
    @IsString()
    mobile: string

    @ApiProperty({example: 'qwerty12345', description: 'Password'})
    @IsNotEmpty()
    @MinLength(6)
    @MaxLength(100)
    @IsString()
    password: string
}
