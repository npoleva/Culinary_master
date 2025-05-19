import {IsNotEmpty, IsNumber, IsString, IsUUID, IsBoolean} from "class-validator";

export class CreateShoppingListItemVoDto {

    @IsNotEmpty()
    @IsUUID()
    shoppingListId: string;

    @IsNotEmpty()
    @IsUUID()
    ingredientId: string;

    @IsNumber()
    @IsNotEmpty()
    quantity: number;

    @IsString()
    @IsNotEmpty()
    unit: string;

    @IsBoolean()
    @IsNotEmpty()
    isPurchased: boolean;
}