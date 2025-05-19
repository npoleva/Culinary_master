import { IsBoolean, IsNotEmpty, IsUUID } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";
import { CreateShoppingListItemVoDto } from "../shopping-list-item-vo/create-shopping-list-item-vo.dto";

export class CreateShoppingListDto {
    @ApiProperty({
        description: 'UUID пользователя, которому принадлежит список покупок',
        example: 'c1a4d2d3-8e7f-41b3-a3c3-2e627e0dd1a2',
        format: 'uuid'
    })
    @IsNotEmpty()
    @IsUUID()
    userId: string;

    @ApiProperty({
        description: 'Флаг, указывающий завершен ли список покупок',
        example: false,
        type: Boolean
    })
    @IsNotEmpty()
    @IsBoolean()
    isCompleted: boolean;

    @ApiProperty({
        description: 'Массив элементов списка покупок',
        type: [CreateShoppingListItemVoDto]
    })
    shoppingListItems: CreateShoppingListItemVoDto[];
}
