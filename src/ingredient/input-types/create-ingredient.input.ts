import { InputType, Field } from '@nestjs/graphql';
import {IngredientCategory} from "./ingredient-category.enum";
import {IsEnum, IsNotEmpty, IsString} from "class-validator";

@InputType()
export class CreateIngredientInput {
    @Field()
    @IsString()
    @IsNotEmpty()
    name: string;

    @Field(() => IngredientCategory)
    @IsEnum(IngredientCategory)
    @IsNotEmpty()
    category: IngredientCategory;

    @Field()
    @IsString()
    @IsNotEmpty()
    defaultUnit: string;
}
