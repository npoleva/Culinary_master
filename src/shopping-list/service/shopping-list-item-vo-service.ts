import { Injectable } from '@nestjs/common';
import {PrismaService} from "../../prisma.service";
import {CreateShoppingListItemVoDto} from "../dto/shopping-list-item-vo/create-shopping-list-item-vo.dto";


@Injectable()
export class ShoppingListItemVOService {
    constructor(private readonly prisma: PrismaService) {}

    async createShoppingListItem(dto: CreateShoppingListItemVoDto) {
        const {
            shoppingListId,
            ingredientId,
            quantity,
            unit,
            isPurchased,
        } = dto;

        return this.prisma.shoppingListItemVO.create({
            data: {
                shoppingList: { connect: { id: shoppingListId } },
                ingredient: { connect: { id: ingredientId } },
                quantity,
                unit,
                isPurchased,
            },
            include: {
                ingredient: true,
                shoppingList: true,
            },
        });
    }
}
