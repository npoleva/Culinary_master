import { ObjectType, Field, ID } from '@nestjs/graphql';
import {IngredientCategory} from "../input-types/ingredient-category.enum";


@ObjectType()
export class IngredientModel {
    @Field(() => ID)
    id: string;

    @Field()
    name: string;

    @Field()
    defaultUnit: string;

    @Field(() => IngredientCategory)
    category: IngredientCategory;
}
