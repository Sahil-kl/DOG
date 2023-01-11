import { ApiProperty } from '@nestjs/swagger'
import { ApiPropertyOptional } from '@nestjs/swagger/dist'
import { IsEnum, IsNotEmpty } from 'class-validator'

export class CreateDogDto {
    @ApiProperty()
    @IsNotEmpty()
    name: string

    @IsNotEmpty()
    @ApiProperty()
    breed: string

    @IsNotEmpty()
    @ApiProperty()
    color: string

    @IsNotEmpty()
    @ApiProperty()
    age: string

    @IsNotEmpty()
    @ApiPropertyOptional()
    nickName: string
}
