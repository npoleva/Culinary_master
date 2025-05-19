import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { IngredientService } from './ingredient.service';
import {IngredientModel} from "./object-types/ingredient.model";
import {UpdateIngredientInput} from "./input-types/update-ingredient.input";
import {CreateIngredientInput} from "./input-types/create-ingredient.input";

@Resolver(() => IngredientModel)
export class IngredientResolver {
    constructor(private readonly ingredientService: IngredientService) {}

    @Query(() => [IngredientModel])
    async ingredients(
        @Args('page', { type: () => Int, nullable: true, defaultValue: 1 }) page: number,
        @Args('limit', { type: () => Int, nullable: true, defaultValue: 10 }) limit: number,
    ) {
        const { ingredients } = await this.ingredientService.findAll(page, limit);
        return ingredients;
    }

    @Query(() => IngredientModel)
    async ingredient(@Args('id') id: string) {
        return this.ingredientService.findOne(id);
    }

    @Mutation(() => IngredientModel)
    async createIngredient(@Args('input') input: CreateIngredientInput) {
        return this.ingredientService.create(input);
    }

    @Mutation(() => IngredientModel)
    async updateIngredient(
        @Args('id') id: string,
        @Args('input') input: UpdateIngredientInput,
    ) {
        return this.ingredientService.update(id, input);
    }

    @Mutation(() => IngredientModel)
    async deleteIngredient(@Args('id') id: string) {
        return this.ingredientService.remove(id);
    }
}
