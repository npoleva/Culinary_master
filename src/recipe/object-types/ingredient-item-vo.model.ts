import { ObjectType, Field, Float } from '@nestjs/graphql';
import {IngredientModel} from "../../ingredient/object-types/ingredient.model";

@ObjectType()
export class IngredientItemVOModel {
    @Field()
    id: string;

    @Field()
    recipeId: string;

    @Field(() => IngredientModel)
    ingredientId: IngredientModel;

    @Field(() => Float)
    quantity: number;

    @Field()
    unit: string;
}
