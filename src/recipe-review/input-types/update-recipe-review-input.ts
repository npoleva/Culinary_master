import { InputType, Field } from '@nestjs/graphql';
import { IsNumber, IsOptional, IsString } from 'class-validator';

@InputType()
export class UpdateRecipeReviewInput {
    @Field({ nullable: true })
    @IsNumber()
    @IsOptional()
    rating?: number;

    @Field({ nullable: true })
    @IsString()
    @IsOptional()
    comment?: string;
}
