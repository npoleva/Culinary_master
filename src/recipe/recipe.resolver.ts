import {Resolver, Query, Mutation, Args, Int, ResolveField, Parent, Context} from '@nestjs/graphql';
import { RecipeService } from "./service/recipe.service";
import { RecipeModel } from "./object-types/recipe.model";
import { CreateRecipeInput } from "./input-types/create-recipe.input";
import { UpdateRecipeInput } from "./input-types/update-recipe.input";
import { IngredientItemVOModel } from "./object-types/ingredient-item-vo.model";
import { RecipeReviewModel } from "../recipe-review/object-types/recipe-review.model";
import { IngredientItemVOService } from "./service/ingredient-item-vo.service";
import { RecipeReviewService } from "../recipe-review/recipe-review.service";
@Resolver(() => RecipeModel)
export class RecipeResolver {
    constructor(
        private readonly recipeService: RecipeService,
        private readonly ingredientItemVOService: IngredientItemVOService,
        private readonly recipeReviewService: RecipeReviewService,
    ) {}

    @Mutation(() => RecipeModel)
    async createRecipe(
        @Args('input') input: CreateRecipeInput,
        @Context() context: any
    ) {
        let imageUrl: string | undefined;

        // 1. Логируем сырые данные запроса
        console.log('====== RAW REQUEST DATA ======');
        console.log('GraphQL Context:', context.req.body);

        // 2. Проверяем сам аргумент input
        console.log('====== INPUT VALIDATION ======');
        console.log('Input object:', input);
        console.log('Input keys:', Object.keys(input));

        // 3. Проверяем отдельные поля
        console.log('====== FIELD VALUES ======');
        console.log('name:', input.name);
        console.log('description:', input.description);
        console.log('kitchenType:', input.kitchenType);
        console.log('authorId:', input.authorId);

        const testData = {
            name: "Тестовый рецепт",
            description: "Тестовое описание",
            kitchenType: "RUSSIAN",
            cookingTime: 30,
            calories: 100,
            authorId: "0cd59608-71d7-4236-90f0-9e54b5e03581",
            ingredientsCount: 1,
            ingredientItems: []
        };

        console.log('====== TEST DATA ======');
        console.log('Manual test data:', testData);

        // 5. Проверяем обязательные поля
        const requiredFields = ['name', 'authorId'];
        for (const field of requiredFields) {
            if (!input[field]) {
                throw new Error(`Missing required field: ${field}`);
            }
        }

        return this.recipeService.create({
            ...input,
        });
    }

    @Query(() => [RecipeModel])
    async recipes(
        @Args('page', { type: () => Int, nullable: true }) page = 1,
        @Args('limit', { type: () => Int, nullable: true }) limit = 10
    ) {
        const { recipes } = await this.recipeService.findAll(page, limit);
        return recipes;
    }

    @Query(() => RecipeModel)
    async recipe(@Args('id', { type: () => String }) id: string) {
        return this.recipeService.findOne(id);
    }

    @Mutation(() => RecipeModel)
    async updateRecipe(
        @Args('id', { type: () => String }) id: string,
        @Args('input') input: UpdateRecipeInput
    ) {

        return this.recipeService.update(id, {
            ...input,
        });
    }

    @Mutation(() => RecipeModel)
    async deleteRecipe(@Args('id', { type: () => String }) id: string) {
        return this.recipeService.remove(id);
    }

    @ResolveField(() => [IngredientItemVOModel])
    async ingredientItems(@Parent() recipe: RecipeModel) {
        return this.ingredientItemVOService.findAllByRecipeId(recipe.id);
    }

    @ResolveField(() => [RecipeReviewModel])
    async ratings(@Parent() recipe: RecipeModel) {
        return this.recipeReviewService.findAll(recipe.id);
    }
}