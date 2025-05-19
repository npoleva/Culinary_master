import {IsString, IsNotEmpty, IsArray, IsNumber, IsOptional} from 'class-validator';
import { KitchenType } from '@prisma/client';
import { CreateIngredientItemVODto } from '../ingredient-item-vo/create-ingredient-item-vo.dto';
import { ApiProperty } from '@nestjs/swagger';


export class CreateRecipeDto {
    @ApiProperty({
        description: 'Название рецепта',
        example: 'Борщ',
    })
    @IsString()
    @IsNotEmpty()
    name: string;

    @ApiProperty({
        description: 'Описание рецепта',
        example: 'Традиционный украинский суп',
    })
    @IsString()
    @IsNotEmpty()
    description: string;

    @ApiProperty({
        description: 'Тип кухни',
        example: 'украинская',
        enum: ['украинская', 'русская', 'европейская', 'азиатская'],
    })
    kitchenType: KitchenType;

    @ApiProperty({
        description: 'Время приготовления в минутах',
        example: 90,
    })
    @IsNumber()
    cookingTime: number;

    @ApiProperty({
        description: 'Количество ингредиентов',
        example: 5,
    })
    @IsNumber()
    ingredientsCount: number;

    @ApiProperty({
        description: 'Калорийность рецепта',
        example: 250,
    })
    @IsNumber()
    calories: number;

    @ApiProperty({
        description: 'Список ингредиентов, включая их количество и единицы измерения',
        type: [CreateIngredientItemVODto],
        isArray: true,
    })
    @IsArray()
    @IsNotEmpty()
    ingredientItems: CreateIngredientItemVODto[];

    @ApiProperty({
        description: 'ID автора рецепта',
        example: 'uuid-пользователя',
    })
    @IsString()
    @IsNotEmpty()
    authorId: string;

    @ApiProperty({
        description: 'Ссылка на изображение рецепта',
        example: 'https://storage.yandexcloud.net/your-bucket/12345678-borscht.jpg',
        required: false,
    })
    @IsString()
    @IsOptional()
    imageUrl?: string;
}
