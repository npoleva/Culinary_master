import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';
import {IsString, IsNotEmpty, IsOptional, IsEmail, IsArray} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateUserDto extends PartialType(CreateUserDto) {

    @ApiProperty({
        description: 'Имя пользователя. Это поле опционально для обновления.',
        example: 'Иван Иванов',
        required: false
    })
    @IsOptional()
    @IsString()
    name?: string;

    @ApiProperty({
        description: 'Электронная почта пользователя. Это поле опционально для обновления.',
        example: 'ivan@example.com',
        required: false
    })
    @IsOptional()
    @IsEmail()
    email?: string;

    @ApiProperty({
        description: 'Пароль пользователя. Это поле опционально для обновления.',
        example: 'newPassword123',
        required: false
    })
    @IsOptional()
    @IsString()
    password?: string;

    @ApiProperty({
        description: 'Роли пользователя. Это поле опционально для обновления.',
        example: ['admin'],
        required: false
    })
    @IsOptional()
    @IsArray()
    @IsString({ each: true })
    roles?: string[];
}
