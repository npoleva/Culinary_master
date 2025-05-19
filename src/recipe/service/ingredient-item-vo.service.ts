import { Injectable } from '@nestjs/common';
import {PrismaService} from "../../prisma.service";
import {CreateIngredientItemVODto} from "../dto/ingredient-item-vo/create-ingredient-item-vo.dto";

@Injectable()
export class IngredientItemVOService {
    constructor(private readonly prisma: PrismaService) {}

    async create(createIngredientItemVODto: CreateIngredientItemVODto) {

        const recipeId = createIngredientItemVODto.recipeId;

        if (recipeId) {
            return this.prisma.ingredientItemVO.create({
                data: {
                    recipeId: recipeId,
                    ingredientId: createIngredientItemVODto.ingredientId,
                    quantity: createIngredientItemVODto.quantity,
                    unit: createIngredientItemVODto.unit,
                },
            });
        }
    }

    async findAllByRecipeId(recipeId: string) {
        return this.prisma.ingredientItemVO.findMany({
            where: {
                recipeId: recipeId,
            },
            include: {
                ingredient: true,
            },
        });
    }

    async deleteById(id: string) {
        return this.prisma.ingredientItemVO.delete({where: {id: id}});
    }
}
