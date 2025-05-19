import {Resolver, Query, Mutation, Args, Int, ResolveField, Parent} from '@nestjs/graphql';
import { UserService } from './user.service';
import {UserModel} from "./object-types/user.model";
import {CreateUserInput} from "./input-types/create-user.input";
import {UpdateUserInput} from "./input-types/update-user.input";
import {RecipeService} from "../recipe/service/recipe.service";
import {ShoppingListService} from "../shopping-list/service/shopping-list.service";
import {RecipeReviewService} from "../recipe-review/recipe-review.service";
import {RecipeModel} from "../recipe/object-types/recipe.model";
import {RecipeReviewModel} from "../recipe-review/object-types/recipe-review.model";
import {ShoppingListModel} from "../shopping-list/object-types/shopping-list.model";


class ReviewService {
}

@Resolver(() => UserModel)
export class UserResolver {
    constructor(private readonly userService: UserService,
                private readonly recipeService: RecipeService,
                private readonly recipeReviewService: RecipeReviewService,
                private readonly shoppingListService: ShoppingListService,
    ) {}

    @Query(() => [UserModel])
    async users(
        @Args('page', { type: () => Int, nullable: true, defaultValue: 1 }) page: number,
        @Args('limit', { type: () => Int, nullable: true, defaultValue: 10 }) limit: number,
    ) {
        const { users } = await this.userService.findAll(page, limit);
        return users;
    }

    @Query(() => UserModel)
    async user(@Args('id') id: string) {
        return this.userService.findOne(id);
    }

    @Mutation(() => UserModel)
    async createUser(@Args('input') input: CreateUserInput) {
        return this.userService.create(input);
    }

    @Mutation(() => UserModel)
    async updateUser(
        @Args('id') id: string,
        @Args('input') input: UpdateUserInput,
    ) {
        return this.userService.update(id, input);
    }

    @Mutation(() => UserModel)
    async deleteUser(@Args('id') id: string) {
        return this.userService.remove(id);
    }
    @ResolveField(() => [RecipeModel])
    async recipes(@Parent() user: UserModel) {
        return this.recipeService.findByAuthorId(user.id);
    }

    @ResolveField(() => [RecipeReviewModel])
    async ratings(@Parent() user: UserModel) {
        return this.recipeReviewService.findByUserId(user.id);
    }

    @ResolveField(() => [ShoppingListModel])
    async shoppingLists(@Parent() user: UserModel) {
        return this.shoppingListService.findByUserId(user.id);
    }

}
