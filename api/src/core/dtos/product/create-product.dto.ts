import {ApiProperty} from "@nestjs/swagger";
import {IsEmail, IsNotEmpty, IsNumber, IsString, MaxLength} from "class-validator";

export class CreateProductDto {
    @ApiProperty({example: 'tea', description: 'title'})
    @IsNotEmpty()
    @MaxLength(100)
    @IsString()
    title: string

    @ApiProperty({
        example: 'sbd rd rhfj',
        description: 'description',
    })
    @IsNotEmpty()
    @IsString()
    description: string


    @ApiProperty({
        example: '45344',
        description: 'cost of product',
    })
    @IsNotEmpty()
    cost: number
}
