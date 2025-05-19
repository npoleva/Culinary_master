import { ObjectType, Field, Float, Int } from '@nestjs/graphql';
import {UserModel} from "../../user/object-types/user.model";
import {IngredientItemVOModel} from "./ingredient-item-vo.model";
import {RecipeReviewModel} from "../../recipe-review/object-types/recipe-review.model";

@ObjectType()
export class RecipeModel {
    @Field()
    id: string;

    @Field()
    name: string;

    @Field()
    description: string;

    @Field()
    kitchenType: string;

    @Field(() => Int)
    cookingTime: number;

    @Field(() => Int)
    calories: number;

    @Field(() => UserModel)
    author: UserModel;

    @Field(() => [IngredientItemVOModel])
    ingredientItems: IngredientItemVOModel[];

    @Field(() => Int)
    ingredientsCount: number;

    @Field(() => Float)
    rating: number;

    @Field({ nullable: true })
    imageUrl?: string;

    @Field({ nullable: true })
    imageBase64?: string;

    @Field(() => [RecipeReviewModel])
    ratings: RecipeReviewModel[];
}
