import { registerEnumType } from '@nestjs/graphql';

export enum IngredientCategory {
    VEGETABLE = 'vegetable',
    MEAT = 'meat',
    DAIRY = 'dairy',
    GRAIN = 'grain',
    FRUIT = 'fruit',
    EGG = 'egg',
    SOY = 'soy',
    NUTS = 'nuts',
    MUSHROOMS = 'mushrooms',
}

registerEnumType(IngredientCategory, {
    name: 'IngredientCategory',
    description: 'Категории ингредиентов',
});
