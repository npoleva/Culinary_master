import { Field, InputType } from '@nestjs/graphql';
import {CreateShoppingListItemVOInput} from "./create-shopping-list-item-vo.input";

@InputType()
export class CreateShoppingListInput {
    @Field()
    userId: string;

    @Field()
    isCompleted: boolean;

    @Field(() => [CreateShoppingListItemVOInput])
    shoppingListItems: CreateShoppingListItemVOInput[];
}
