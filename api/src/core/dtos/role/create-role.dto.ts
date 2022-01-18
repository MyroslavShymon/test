import { ApiProperty } from "@nestjs/swagger"
import { IsNotEmpty, IsString, MaxLength } from "class-validator"

export class CreateRoleDto {
  @ApiProperty({ example: "Administrator", description: "title of role" })
  @IsNotEmpty()
  @MaxLength(100)
  @IsString()
  title: string

  @ApiProperty({ example: "User", description: "description of role" })
  @IsString()
  description: string
}
