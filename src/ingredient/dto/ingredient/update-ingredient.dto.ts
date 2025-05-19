import { IsString, IsOptional, IsEnum } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { IngredientCategory } from './create-ingredient.dto';

export class UpdateIngredientDto {
    @ApiProperty({
        description: 'Название ингредиента (необязательное поле)',
        example: 'Carrot',
        required: false,
    })
    @IsString()
    @IsOptional()
    name?: string;

    @ApiProperty({
        description: 'Категория ингредиента (необязательное поле)',
        enum: IngredientCategory,
        example: IngredientCategory.VEGETABLE,
        required: false,
    })
    @IsEnum(IngredientCategory)
    @IsOptional()
    category?: IngredientCategory;

    @ApiProperty({
        description: 'Единица измерения (необязательное поле)',
        example: 'kg',
        required: false,
    })
    @IsString()
    @IsOptional()
    defaultUnit?: string;
}
