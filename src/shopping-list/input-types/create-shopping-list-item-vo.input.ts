import { Field, InputType, Float } from '@nestjs/graphql';

@InputType()
export class CreateShoppingListItemVOInput {
    @Field()
    shoppingListId: string;

    @Field()
    ingredientId: string;

    @Field(() => Float)
    quantity: number;

    @Field()
    unit: string;

    @Field()
    isPurchased: boolean;
}
