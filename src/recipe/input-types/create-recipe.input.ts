import { InputType, Field, Int } from '@nestjs/graphql';
import {CreateIngredientItemVOInput} from "./create-ingredient-item-vo.input";
import {IsEnum, IsNotEmpty, IsNumber, IsOptional, IsString} from "class-validator";
import {Transform} from "class-transformer";
import {IngredientItemVOModel} from "../object-types/ingredient-item-vo.model";
import { KitchenType } from './kitchen-type.enum';

@InputType()
export class CreateRecipeInput {
    @Field()
    @IsString()
    @IsNotEmpty()
    name: string;

    @Field()
    @IsString()
    @IsNotEmpty()
    description: string;

    @Field(() => Int)
    @IsNumber()
    @IsNotEmpty()
    cookingTime: number;

    @Field(() => Int)
    @IsNumber()
    @IsNotEmpty()
    ingredientsCount: number;

    @Field(() => Int)
    @IsNumber()
    @IsNotEmpty()
    calories: number;

    @Field(() => KitchenType)
    kitchenType: KitchenType;

    @Field(() => [CreateIngredientItemVOInput])
    ingredientItems: CreateIngredientItemVOInput[];

    @Field()
    @IsString()
    @IsNotEmpty()
    authorId: string;

    @Field({ nullable: true })
    @IsString()
    @IsOptional()
    imageUrl?: string;

    @Field({ nullable: true })
    @IsString()
    @IsOptional()
    imageBase64?: string;
}
