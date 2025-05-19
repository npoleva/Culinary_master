import { IsString, IsOptional, IsArray, IsNumber } from 'class-validator';
import { CreateIngredientItemVODto } from '../ingredient-item-vo/create-ingredient-item-vo.dto';
import { CreateRecipeReviewDto } from '../../../recipe-review/dto/create-recipe-review.dto';
import { ApiProperty } from '@nestjs/swagger';
import {Transform} from "class-transformer";
import {KitchenType} from "@prisma/client";

export class UpdateRecipeDto {
    @ApiProperty({
        description: 'Название рецепта',
        example: 'Борщ',
        required: false,
    })
    @IsString()
    @IsOptional()
    name?: string;

    @ApiProperty({
        description: 'Описание рецепта',
        example: 'Традиционный украинский суп',
        required: false,
    })
    @IsString()
    @IsOptional()
    description?: string;

    @ApiProperty({
        description: 'Тип кухни',
        example: 'украинская',
        enum: ['украинская', 'русская', 'европейская', 'азиатская'],
        required: false,
    })
    @IsOptional()
    kitchenType?: KitchenType;

    @ApiProperty({
        description: 'Время приготовления в минутах',
        example: 90,
        required: false,
    })
    @IsNumber()
    @IsOptional()
    @Transform(({ value }) => parseInt(value))
    cookingTime?: number;

    @ApiProperty({
        description: 'Калорийность рецепта',
        example: 250,
        required: false,
    })
    @IsNumber()
    @IsOptional()
    @Transform(({ value }) => parseInt(value))
    calories?: number;

    @ApiProperty({
        description: 'Список ингредиентов, включая их количество и единицы измерения',
        type: [CreateIngredientItemVODto],
        isArray: true,
        required: false,
    })
    @IsArray()
    @IsOptional()
    ingredientsItems?: CreateIngredientItemVODto[];

    @ApiProperty({
        description: 'ID автора рецепта',
        example: 'uuid-пользователя',
        required: false,
    })
    @IsString()
    @IsOptional()
    authorId?: string;

    @ApiProperty({
        description: 'Список оценок для рецепта',
        type: [CreateRecipeReviewDto],
        isArray: true,
        required: false,
    })
    @IsOptional()
    ratings?: CreateRecipeReviewDto[];

    @ApiProperty({
        description: 'Ссылка на изображение рецепта',
        example: 'https://storage.yandexcloud.net/your-bucket/12345678-borscht.jpg',
        required: false,
    })
    @IsString()
    @IsOptional()
    imageUrl?: string;
}
