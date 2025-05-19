import {
    Resolver,
    Query,
    Mutation,
    Args,
    Int, ResolveField, Parent,
} from '@nestjs/graphql';
import { RecipeReviewService } from './recipe-review.service';
import {RecipeReviewModel} from "./object-types/recipe-review.model";
import {UpdateRecipeReviewInput} from "./input-types/update-recipe-review-input";
import {CreateRecipeReviewInput} from "./input-types/create-recipe-review.input";
import {RecipeService} from "../recipe/service/recipe.service";
import {UserService} from "../user/user.service";
import {UserModel} from "../user/object-types/user.model";
import {RecipeModel} from "../recipe/object-types/recipe.model";

@Resolver(() => RecipeReviewModel)
export class RecipeReviewResolver {
    constructor(private readonly reviewService: RecipeReviewService,
                private readonly userService: UserService,
                private readonly recipeService: RecipeService) {}

    @Mutation(() => RecipeReviewModel)
    createRecipeReview(
        @Args('createRecipeReviewInput') dto: CreateRecipeReviewInput,
    ) {
        return this.reviewService.create(dto);
    }

    @Query(() => [RecipeReviewModel])
    async recipeReviews(
        @Args('recipeId') recipeId: string,
        @Args('page', { type: () => Int, nullable: true, defaultValue: 1 }) page: number,
        @Args('limit', { type: () => Int, nullable: true, defaultValue: 10 }) limit: number,
    ) {
        const { reviews } = await this.reviewService.findAll(recipeId, page, limit);
        return reviews;
    }

    @Query(() => RecipeReviewModel)
    recipeReview(@Args('id') id: string) {
        return this.reviewService.findOne(id);
    }

    @Mutation(() => RecipeReviewModel)
    updateRecipeReview(
        @Args('id') id: string,
        @Args('updateRecipeReviewInput') input: UpdateRecipeReviewInput,
    ) {
        return this.reviewService.update(id, input);
    }

    @Mutation(() => RecipeReviewModel)
    removeRecipeReview(@Args('id') id: string) {
        return this.reviewService.remove(id);
    }

    @ResolveField(() => UserModel)
    async user(@Parent() review: RecipeReviewModel) {
        return this.userService.findOne(review.userId);
    }

    @ResolveField(() => RecipeModel)
    async recipe(@Parent() review: RecipeReviewModel) {
        return this.recipeService.findOne(review.recipeId);
    }

    @ResolveField(() => String, { nullable: true })
    async comment(@Parent() review: RecipeReviewModel) {
        return review.comment;
    }
}
