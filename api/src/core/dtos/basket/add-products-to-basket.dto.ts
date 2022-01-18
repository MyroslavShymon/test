import {ApiProperty} from "@nestjs/swagger";
import {IsNotEmpty, IsNumber, IsString, MaxLength} from "class-validator";

export class AddProductsToBasketDto {
    @ApiProperty({example: "23", description: "basket Id"})
    @IsNotEmpty()
    @IsNumber()
    basketId: number

    @ApiProperty({example: "22", description: "product Id"})
    @IsNotEmpty()
    @IsNumber()
    productId: number

    @ApiProperty({example: "11", description: "product count"})
    @IsNotEmpty()
    count: number

}
