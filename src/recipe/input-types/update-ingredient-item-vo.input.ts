import { InputType, Field, Float, ID } from '@nestjs/graphql';
import {IsNotEmpty, IsOptional, IsString, IsUUID} from "class-validator";

@InputType()
export class UpdateIngredientItemVOInput {
    @Field(() => ID, { nullable: true })
    @IsOptional()
    @IsUUID()
    recipeId?: string;

    @Field(() => ID, { nullable: true })
    @IsOptional()
    @IsUUID()
    ingredientId?: string;

    @Field(() => Float, { nullable: true })
    @IsOptional()
    @IsNotEmpty()
    quantity?: number;

    @Field({ nullable: true })
    @IsString()
    @IsOptional()
    unit?: string;
}
