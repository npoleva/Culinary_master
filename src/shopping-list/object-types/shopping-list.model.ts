import { Field, ObjectType } from '@nestjs/graphql';
import {ShoppingListItemVOModel} from "./shopping-list-item-vo.model";

@ObjectType()
export class ShoppingListModel {
    @Field()
    id: string;

    @Field()
    userId: string;

    @Field()
    isCompleted: boolean;

    @Field(() => [ShoppingListItemVOModel])
    shoppingListItems: ShoppingListItemVOModel[];
}
