import {IsBoolean, IsNotEmpty, IsNumber, IsOptional, IsString, IsUUID} from "class-validator";

export class UpdateShoppingListItemVoDto {
    @IsBoolean()
    isPurchased: boolean;

    @IsNumber()
    @IsOptional()
    quantity?: number;
}