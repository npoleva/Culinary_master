import { InputType, Field, Float, ID } from '@nestjs/graphql';

@InputType()
export class CreateIngredientItemVOInput {
    @Field(() => ID, { nullable: true })
    recipeId?: string;

    @Field(() => ID)
    ingredientId: string;

    @Field(() => Float)
    quantity: number;

    @Field()
    unit: string;
}
