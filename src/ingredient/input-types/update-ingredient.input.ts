import { InputType, Field} from '@nestjs/graphql';
import {IngredientCategory} from "./ingredient-category.enum";
import {IsEnum, IsOptional, IsString} from "class-validator";

@InputType()
export class UpdateIngredientInput {
    @Field({ nullable: true })
    @IsString()
    @IsOptional()
    name?: string;

    @Field(() => IngredientCategory, { nullable: true })
    @IsEnum(IngredientCategory)
    @IsOptional()
    category?: IngredientCategory;

    @Field({ nullable: true })
    @IsString()
    @IsOptional()
    defaultUnit?: string;
}
