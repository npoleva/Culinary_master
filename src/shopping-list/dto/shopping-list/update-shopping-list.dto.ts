import { IsBoolean, IsOptional } from "class-validator";
import { ApiPropertyOptional } from "@nestjs/swagger";

export class UpdateShoppingListDto {
    @ApiPropertyOptional({
        description: 'Флаг, указывающий завершен ли список покупок',
        example: true,
        type: Boolean
    })
    @IsOptional()
    @IsBoolean()
    isCompleted?: boolean;
}
