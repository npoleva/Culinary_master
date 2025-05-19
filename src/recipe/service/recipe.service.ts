import {PrismaService} from "../../prisma.service";
import {Recipe} from "@prisma/client";
import {Injectable, NotFoundException} from "@nestjs/common";
import {UpdateRecipeDto} from "../dto/recipe-dto/update-recipe.dto";
import {CreateRecipeDto} from "../dto/recipe-dto/create-recipe.dto";
import {S3Service} from "../../s3/s3.service";

@Injectable()
export class RecipeService {

  constructor(private readonly prisma: PrismaService,
              private readonly s3Service: S3Service) {}

  async create(createRecipeDto: CreateRecipeDto, file?: Express.Multer.File) {
    const { name, description, kitchenType, cookingTime, calories, authorId, ingredientsCount, ingredientItems } = createRecipeDto;

    let imageUrl: string | undefined;

    if (file) {
      imageUrl = await this.s3Service.uploadFile(file);
    }

    return this.prisma.recipe.create({
      data: {
        name: name,
        description: description,
        kitchenType: kitchenType,
        cookingTime: cookingTime,
        calories: calories,
        author: { connect: { id: authorId } },
        ingredientsCount: ingredientsCount,
        imageUrl: imageUrl,
        ingredientItems: {
          create: ingredientItems.map((item) => ({
            ingredient: { connect: { id: item.ingredientId } },
            quantity: item.quantity,
            unit: item.unit,
          })),
        },
        rating: 0,
      },
      include: {
        ingredientItems: true,
      },
    });
  }


  async findAll(page: number = 1, limit: number = 10) {
    const skip = (page - 1) * limit;
    const total = await this.prisma.recipe.count();

    const recipes = await this.prisma.recipe.findMany({
      skip,
      take: limit,
      include: {
        ingredientItems: {
          include: {
            ingredient: true,
          },
        },
        author: true,
      },
    });

    const totalPages = Math.ceil(total / limit);

    return {
      recipes,
      total,
      totalPages,
    };
  }

  async findAllSortedByTime(page: number = 1, limit: number = 10, isAscended: boolean = true) {
    const skip = (page - 1) * limit;
    const total = await this.prisma.recipe.count();
    const order = 'asc';

    if (!isAscended) {
      const order = 'desc';
    }

    const recipes = await this.prisma.recipe.findMany({
      orderBy: {
        cookingTime: order,
      },
      skip,
      take: limit,
      include: {
        ingredientItems: {
          include: {
            ingredient: true,
          },
        },
        author: true,
      },
    });

    const totalPages = Math.ceil(total / limit);

    return {
      recipes,
      total,
      totalPages,
    };
  }

  async findAllSortedByCalories(page: number = 1, limit: number = 10, isAscended: boolean = true) {
    const skip = (page - 1) * limit;
    const total = await this.prisma.recipe.count();
    const order = 'asc';

    if (!isAscended) {
      const order = 'desc';
    }

    const recipes = await this.prisma.recipe.findMany({
      orderBy: {
        calories: order,
      },
      skip,
      take: limit,
      include: {
        ingredientItems: {
          include: {
            ingredient: true,
          },
        },
        author: true,
      },
    });

    const totalPages = Math.ceil(total / limit);

    return {
      recipes,
      total,
      totalPages,
    };
  }

  async findAllSortedByIngredientsCount(page: number = 1, limit: number = 10, isAscended: boolean = true) {
    const skip = (page - 1) * limit;
    const total = await this.prisma.recipe.count();
    const order = 'asc';

    if (!isAscended) {
      const order = 'desc';
    }

    const recipes = await this.prisma.recipe.findMany({
      orderBy: {
        ingredientsCount: order,
      },
      skip,
      take: limit,
      include: {
        ingredientItems: {
          include: {
            ingredient: true,
          },
        },
        author: true,
      },
    });

    const totalPages = Math.ceil(total / limit);

    return {
      recipes,
      total,
      totalPages,
    };
  }

  async findOne(id: string): Promise<Recipe | null> {
    const recipe = await this.prisma.recipe.findUnique({
      where: { id },
      include: {
        author: true,
        ingredientItems: {
          include: {
            ingredient: true,
          },
        },
      },
    });

    if (!recipe) {
      throw new NotFoundException(`Recipe with id ${id} not found`);
    }
    return recipe;
  }

    async update(recipeId: string, updateDto: UpdateRecipeDto, file?: Express.Multer.File) {
    const { name, description, kitchenType, cookingTime, calories } = updateDto;

    console.log('Received update data:', updateDto);

    const updateData: any = {};

    if (name) updateData.name = name;
    if (description !== undefined) updateData.description = description;
    if (kitchenType !== undefined) updateData.kitchenType = kitchenType;
    if (cookingTime !== undefined && !isNaN(cookingTime)) updateData.cookingTime = Number(cookingTime);
    if (calories !== undefined && !isNaN(calories)) updateData.calories = Number(calories);

    if (file) {
      const currentRecipe = await this.prisma.recipe.findUnique({
        where: { id: recipeId },
        select: { imageUrl: true }
      });

      if (currentRecipe?.imageUrl) {
        try {
          await this.s3Service.deleteFile(currentRecipe.imageUrl);
        } catch (e) {
          console.error('Failed to delete old image:', e);
        }
      }

      updateData.imageUrl = await this.s3Service.uploadFile(file);
    }

    if (Object.keys(updateData).length === 0) {
      throw new Error('No valid fields provided for update');
    }

    try {
      return await this.prisma.recipe.update({
        where: { id: recipeId },
        data: updateData,
      });
    } catch (error) {
      console.error('Error during update recipe:', error);
      throw error;
    }
  }


  async remove(id: string): Promise<Recipe> {
    const recipe = await this.prisma.recipe.findUnique({ where: { id } });

    if (!recipe) {
      throw new NotFoundException(`Recipe with id ${id} not found`);
    }

    return this.prisma.recipe.delete({
      where: { id },
    });
  }

  async findByAuthorId(authorId: string) {
    return this.prisma.recipe.findMany({
      where: { authorId },
      include: {
        ingredientItems: {
          include: { ingredient: true },
        },
        author: true,
      },
    });
  }
}