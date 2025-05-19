import { ObjectType, Field, Float } from '@nestjs/graphql';
import {UserModel} from "../../user/object-types/user.model";
import {RecipeModel} from "../../recipe/object-types/recipe.model";

@ObjectType()
export class RecipeReviewModel {
    @Field()
    id: string;

    @Field()
    userId: string;

    @Field()
    recipeId: string;

    @Field(() => Float)
    rating: number;

    @Field({ nullable: true })
    comment?: string;
}
