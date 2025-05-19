import {Resolver, Query, Mutation, Args, ResolveField, Parent} from '@nestjs/graphql';
import {ShoppingListService} from "./service/shopping-list.service";
import {ShoppingListModel} from "./object-types/shopping-list.model";
import {IngredientModel} from "../ingredient/object-types/ingredient.model";
import {ShoppingListItemVOModel} from "./object-types/shopping-list-item-vo.model";
import {IngredientService} from "../ingredient/ingredient.service";
import {UserModel} from "../user/object-types/user.model";

@Resolver(() => ShoppingListModel)
export class ShoppingListResolver {
    constructor(private readonly shoppingListService: ShoppingListService,
                private readonly ingredientService: IngredientService) {}

    @Query(() => ShoppingListModel)
    async getShoppingList(@Args('id') id: string) {
        return this.shoppingListService.findOne(id);
    }

    @Mutation(() => ShoppingListModel)
    async getOrCreateShoppingListByUser(@Args('userId') userId: string) {
        return this.shoppingListService.findOrCreateByUser(userId);
    }

    @Mutation(() => ShoppingListModel)
    async addIngredientsFromRecipes(
        @Args('userId') userId: string,
        @Args({ name: 'recipeIds', type: () => [String] }) recipeIds: string[],
    ) {
        return this.shoppingListService.addIngredientsFromRecipes(userId, recipeIds);
    }

    @Mutation(() => Boolean)
    async removeIngredientFromShoppingList(
        @Args('userId') userId: string,
        @Args('ingredientId') ingredientId: string,
    ) {
        await this.shoppingListService.removeIngredientFromShoppingList(userId, ingredientId);
        return true;
    }

    @ResolveField(() => [ShoppingListItemVOModel])
    async shoppingListItems(@Parent() shoppingList: ShoppingListModel) {
        return shoppingList.shoppingListItems;
    }
}
