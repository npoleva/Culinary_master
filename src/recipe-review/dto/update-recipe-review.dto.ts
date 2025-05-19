import {IsNumber, IsOptional, IsString, Max, Min} from 'class-validator';
import { ApiPropertyOptional } from '@nestjs/swagger';

export class UpdateRecipeReviewDto {
    @ApiPropertyOptional({
        description: 'Новая оценка рецепта (например, от 1 до 5)',
        example: 5,
    })
    @IsNumber()
    @IsOptional()
    @Min(1, { message: 'Рейтинг должен быть не менее 1' })
    @Max(5, { message: 'Рейтинг должен быть не более 5' })
    rating?: number;

    @ApiPropertyOptional({
        description: 'Обновлённый комментарий к рецепту',
        example: 'Решил попробовать с другими специями — стало ещё лучше!',
    })
    @IsString()
    @IsOptional()
    comment?: string;
}
