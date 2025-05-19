import { InputType, Field } from '@nestjs/graphql';
import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

@InputType()
export class CreateRecipeReviewInput {
    @Field()
    @IsString()
    @IsNotEmpty()
    userId: string;

    @Field()
    @IsString()
    @IsNotEmpty()
    recipeId: string;

    @Field()
    @IsNumber()
    @IsNotEmpty()
    rating: number;

    @Field({ nullable: true })
    @IsString()
    @IsOptional()
    comment?: string;
}
