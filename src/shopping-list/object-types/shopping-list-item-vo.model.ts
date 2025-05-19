import { ObjectType, Field, Float } from '@nestjs/graphql';
import {IngredientModel} from "../../ingredient/object-types/ingredient.model";

@ObjectType()
export class ShoppingListItemVOModel {
    @Field()
    id: string;

    @Field(() => IngredientModel)
    ingredient: IngredientModel;

    @Field(() => Float)
    quantity: number;

    @Field()
    unit: string;

    @Field()
    isPurchased: boolean;
}
