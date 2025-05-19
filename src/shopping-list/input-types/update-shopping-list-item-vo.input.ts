import { Field, InputType, Float } from '@nestjs/graphql';

@InputType()
export class UpdateShoppingListItemVOInput {
    @Field()
    isPurchased: boolean;

    @Field(() => Float, { nullable: true })
    quantity?: number;
}
