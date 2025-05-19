import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Render,
  Redirect,
  Res,
  NotFoundException, SetMetadata, UseGuards
} from '@nestjs/common';
import { IngredientService } from '../ingredient.service';
import {CreateIngredientDto, IngredientCategory} from '../dto/ingredient/create-ingredient.dto';
import { UpdateIngredientDto } from '../dto/ingredient/update-ingredient.dto';
import {CreateUserDto} from "../../user/dto/create-user.dto";
import {Response} from "express";
import {UpdateUserDto} from "../../user/dto/update-user.dto";
import {ApiExcludeController} from "@nestjs/swagger";
import {Public, Roles} from 'src/authentification/public.decorator';
import {AuthGuard} from "../../authentification/auth.guard";

@Controller('ingredient')
@ApiExcludeController()
export class IngredientController {
  constructor(private readonly ingredientService: IngredientService) {}

  @Post()
  @Redirect('ingredient/list')
  async create(@Body() createIngredientDto: CreateIngredientDto) {
    await this.ingredientService.create(createIngredientDto);
  }

  @Get('/create')
  @Render('ingredients/ingredient/create-ingredient')
  async showAddIngredientForm() {
    return { };
  }

  @Get('/list')
  @Render('ingredients/ingredient/all-ingredients')
  async findAll() {
    const { ingredients, total, totalPages } = await this.ingredientService.findAll();
    return { ingredients }
  }

  @Get(':id')
  @Render('ingredients/ingredient/ingredient')
  async findOne(@Param('id') id: string) {
    const ingredient = await this.ingredientService.findOne(id);
    return { ingredient };
  }

  @Get(':id/edit')
  @Redirect()
  @Render('ingredients/ingredient/update-ingredient')
  async editForm(@Param('id') id: string) {
    const ingredient = await this.ingredientService.findOne(id);
    return { ingredient };
  }

  @Post(':id/update')
  @Redirect('ingredients/ingredient/update-ingredient')
  async update(
      @Param('id') id: string,
      @Body() updateIngredientDto: UpdateIngredientDto,
  ) {
    await this.ingredientService.update(id, updateIngredientDto);
    //return { url: `/ingredient/${id}` };
  }

  @Delete(':id')
  @Redirect('list')
  async remove(@Param('id') id: string) {
    await this.ingredientService.remove(id);
  }
}
