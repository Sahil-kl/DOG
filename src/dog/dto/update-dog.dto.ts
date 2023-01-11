import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class UpdateDogDto  {
    @ApiPropertyOptional()
    name: string

    @ApiPropertyOptional()
    breed: string

    @ApiPropertyOptional()
    color: string

    @ApiPropertyOptional()
    age: string

    @ApiPropertyOptional()
    nickName: string
}
