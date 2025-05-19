import {IsNotEmpty, IsNumber, IsOptional, IsString, IsUUID} from "class-validator";

export class UpdateIngredientItemVODto {
    @IsOptional()
    @IsUUID()
    recipeId?: string;

    @IsOptional()
    @IsUUID()
    ingredientId?: string;

    @IsOptional()
    @IsNotEmpty()
    quantity?: number;

    @IsString()
    @IsOptional()
    unit?: string;
}