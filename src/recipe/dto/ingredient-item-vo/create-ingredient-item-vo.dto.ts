import {IsNotEmpty, IsNumber, IsOptional, IsString, IsUUID} from "class-validator";

export class CreateIngredientItemVODto {

    @IsNotEmpty()
    @IsUUID()
    @IsOptional()
    recipeId?: string;

    @IsNotEmpty()
    @IsUUID()
    ingredientId: string;

    @IsNumber()
    @IsNotEmpty()
    quantity: number;

    @IsString()
    @IsNotEmpty()
    unit: string;
}




