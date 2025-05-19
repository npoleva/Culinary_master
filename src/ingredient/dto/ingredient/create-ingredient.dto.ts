import { IsString, IsNotEmpty, IsEnum } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export enum IngredientCategory {
    VEGETABLE = 'vegetable',
    MEAT = 'meat',
    DAIRY = 'dairy',
    GRAIN = 'grain',
    FRUIT = 'fruit',
    EGG = 'egg',
    SOY = 'soy',
    NUTS = 'nuts',
    MUSHROOMS = 'mushrooms',
}

export class CreateIngredientDto {
    @ApiProperty({
        description: 'Название ингредиента',
        example: 'Carrot',
    })
    @IsString()
    @IsNotEmpty()
    name: string;

    @ApiProperty({
        description: 'Категория ингредиента',
        enum: IngredientCategory,
        example: IngredientCategory.VEGETABLE,
    })
    // @IsEnum(IngredientCategory)
    @IsNotEmpty()
    category: IngredientCategory;

    @ApiProperty({
        description: 'Единица измерения по умолчанию',
        example: 'kg',
    })
    @IsString()
    @IsNotEmpty()
    defaultUnit: string;
}
