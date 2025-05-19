import { ObjectType, Field } from '@nestjs/graphql';
import {RecipeReviewModel} from "../../recipe-review/object-types/recipe-review.model";
import {RecipeModel} from "../../recipe/object-types/recipe.model";
import {ShoppingListModel} from "../../shopping-list/object-types/shopping-list.model";


@ObjectType()
export class UserModel {
    @Field()
    id: string;

    @Field()
    name: string;

    @Field()
    email: string;

    @Field(() => [RecipeModel])
    recipes: RecipeModel[];

    @Field(() => [RecipeReviewModel])
    ratings: RecipeReviewModel[];

    @Field(() => [ShoppingListModel])
    shoppingLists: ShoppingListModel[];
}
