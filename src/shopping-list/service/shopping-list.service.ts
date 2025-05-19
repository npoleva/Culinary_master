import {Injectable, NotFoundException} from '@nestjs/common';
import {UpdateShoppingListDto } from '../dto/shopping-list/update-shopping-list.dto';
import {PrismaService} from "../../prisma.service";
import {ShoppingListItemVOService} from "./shopping-list-item-vo-service";

@Injectable()
export class ShoppingListService {
  constructor(private readonly prisma: PrismaService,
              private readonly shoppingListItemVOService: ShoppingListItemVOService) {}

  async findOne(id: string) {
    const list = await this.prisma.shoppingList.findUnique({
      where: { id },
      include: {
        shoppingListItems: {
          include: {
            ingredient: true,
          },
        },
      },
    });

    if (!list) {
      throw new NotFoundException(`Shopping list with id ${id} not found`);
    }

    return list;
  }

  async removeIngredientFromShoppingList(userId: string, ingredientId: string) {
    await this.prisma.shoppingListItemVO.deleteMany({
      where: {
        shoppingList: {
          userId: userId,
        },
        ingredientId: ingredientId,
      },
    });
  }

  update(id: number, updateShoppingListDto: UpdateShoppingListDto) {
    return `This action updates a #${id} shoppingList`;
  }

  remove(id: number) {
    return `This action removes a #${id} shoppingList`;
  }

  async findOrCreateByUser(userId: string) {
    let list = await this.prisma.shoppingList.findFirst({
      where: { userId },
      include: {
        shoppingListItems: {
          include: { ingredient: true },
        },
      },
    });

    if (!list) {
      list = await this.prisma.shoppingList.create({
        data: {
          userId,
          isCompleted: false,
          shoppingListItems: { create: [] },
        },
        include: {
          shoppingListItems: {
            include: { ingredient: true },
          },
        },
      });
    }

    return list;
  }

  async addIngredientsFromRecipes(userId: string, recipeIds: string[]) {
    const list = await this.findOrCreateByUser(userId);

    const recipes = await this.prisma.recipe.findMany({
      where: { id: { in: recipeIds } },
      include: { ingredientItems: true },
    });

    const foundRecipeIds = new Set(recipes.map(r => r.id));
    const missingIds = recipeIds.filter(id => !foundRecipeIds.has(id));

    if (missingIds.length > 0) {
      throw new NotFoundException(`Рецепты с id ${missingIds.join(', ')} не найдены`);
    }

    for (const recipe of recipes) {
      for (const item of recipe.ingredientItems) {
        await this.shoppingListItemVOService.createShoppingListItem({
          shoppingListId: list.id,
          ingredientId: item.ingredientId,
          quantity: item.quantity,
          unit: item.unit,
          isPurchased: false,
        });
      }
    }

    return this.findOrCreateByUser(userId);
  }

  async findByUserId(userId: string) {
    return this.prisma.shoppingList.findMany({
      where: { userId },
      include: {
        shoppingListItems: {
          include: {
            ingredient: true,
          },
        },
      },
    });
  }


}
