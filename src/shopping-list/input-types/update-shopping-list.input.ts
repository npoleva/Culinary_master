import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class UpdateShoppingListInput {
    @Field({ nullable: true })
    isCompleted?: boolean;
}
