import {Injectable, NotFoundException} from '@nestjs/common';
import { CreateRecipeReviewDto } from './dto/create-recipe-review.dto';
import { UpdateRecipeReviewDto } from './dto/update-recipe-review.dto';
import { PrismaService } from "../prisma.service";
import { RecipeReview } from "@prisma/client";

@Injectable()
export class RecipeReviewService {
  constructor(private readonly prisma: PrismaService) {}

  async create(dto: CreateRecipeReviewDto) {
    return this.prisma.recipeReview.create({
      data: {
        userId: dto.userId,
        recipeId: dto.recipeId,
        rating: dto.rating,
        comment: dto.comment,
      },
    });
  }

  async findAll(recipeId: string, page: number = 1, limit: number = 10) {
    const skip = (page - 1) * limit;
    const total = await this.prisma.recipeReview.count({ where: { recipeId } });

    const reviews = await this.prisma.recipeReview.findMany({
      where: { recipeId },
      skip,
      take: limit,
      include: {
        user: true,
        recipe: true,
      },
    });

    const totalPages = Math.ceil(total / limit);

    return { reviews, total, totalPages };
  }

  async findOne(id: string): Promise<RecipeReview | null> {
    const review = await this.prisma.recipeReview.findUnique({
      where: { id },
      include: {
        user: true,
        recipe: true,
      },
    });

    if (!review) {
      throw new NotFoundException(`Отзыв с ID ${id} не найден`);
    }

    return review;
  }

  async update(id: string, dto: UpdateRecipeReviewDto): Promise<RecipeReview> {
    const review = await this.prisma.recipeReview.findUnique({
      where: { id },
    });

    if (!review) {
      throw new NotFoundException(`Отзыв с ID ${id} не найден`);
    }

    return this.prisma.recipeReview.update({
      where: { id },
      data: dto,
    });
  }

  async remove(id: string): Promise<RecipeReview> {
    const review = await this.prisma.recipeReview.findUnique({
      where: { id },
    });

    if (!review) {
      throw new NotFoundException(`Отзыв с ID ${id} не найден`);
    }

    return this.prisma.recipeReview.delete({
      where: { id },
    });
  }

  async findByUserId(userId: string) {
    return this.prisma.recipeReview.findMany({
      where: { userId },
      include: {
        user: true,
        recipe: true,
      },
    });
  }

}
