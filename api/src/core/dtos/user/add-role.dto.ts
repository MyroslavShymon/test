import { ApiProperty } from "@nestjs/swagger"
import { IsNotEmpty, IsNumber, IsString, MaxLength } from "class-validator"

export class AddRoleDto {
  @ApiProperty({ example: "1", description: "role id" })
  @IsNotEmpty()
  @IsNumber()
  roleId: number

  @ApiProperty({ example: "2", description: "user id" })
  @IsNotEmpty()
  @IsNumber()
  userId: number
}
