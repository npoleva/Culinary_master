import {IsNotEmpty, IsNumber, IsOptional, IsString, Max, Min} from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateRecipeReviewDto {
    @ApiProperty({
        description: 'ID пользователя, оставившего отзыв',
        example: 'a8fbd47e-3a23-4d4b-bf8c-fabc74edb123'
    })
    @IsString()
    @IsNotEmpty()
    userId: string;

    @ApiProperty({
        description: 'ID рецепта, к которому относится отзыв',
        example: 'e34fcb19-1c23-4de2-a459-90fbe3987fa1'
    })
    @IsString()
    @IsNotEmpty()
    recipeId: string;

    @ApiProperty({
        description: 'Оценка рецепта (например, от 1 до 5)',
        example: 4
    })
    @IsNumber()
    @IsNotEmpty()
    @Min(1, { message: 'Рейтинг должен быть не менее 1' })
    @Max(5, { message: 'Рейтинг должен быть не более 5' })
    rating: number;

    @ApiPropertyOptional({
        description: 'Комментарий пользователя к рецепту',
        example: 'Очень вкусно! Приготовлю ещё раз.'
    })
    @IsString()
    @IsOptional()
    comment?: string;
}
