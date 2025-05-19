import { InputType, Field, Int } from '@nestjs/graphql';
import {IsEnum, IsNumber, IsOptional, IsString} from "class-validator";
import {KitchenType} from "./kitchen-type.enum";
import {CreateIngredientItemVOInput} from "./create-ingredient-item-vo.input";
import {CreateRecipeReviewInput} from "../../recipe-review/input-types/create-recipe-review.input";


@InputType()
export class UpdateRecipeInput {
    @Field({ nullable: true })
    @IsString()
    @IsOptional()
    name?: string;

    @Field({ nullable: true })
    @IsString()
    @IsOptional()
    description?: string;

    @Field(() => KitchenType, { nullable: true })
    @IsEnum(KitchenType)
    @IsOptional()
    kitchenType?: KitchenType;

    @Field(() => Int, { nullable: true })
    @IsNumber()
    @IsOptional()
    cookingTime?: number;

    @Field(() => Int, { nullable: true })
    @IsNumber()
    @IsOptional()
    calories?: number;

    @Field(() => [CreateIngredientItemVOInput], { nullable: true })
    @IsOptional()
    ingredientsItems?: CreateIngredientItemVOInput[];

    @Field({ nullable: true })
    @IsString()
    @IsOptional()
    authorId?: string;

    @Field(() => [CreateRecipeReviewInput], { nullable: true })
    @IsOptional()
    ratings?: CreateRecipeReviewInput[];

    @Field({ nullable: true })
    @IsString()
    @IsOptional()
    imageUrl?: string;

    @Field({ nullable: true })
    @IsString()
    @IsOptional()
    imageBase64?: string;
}
