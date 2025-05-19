import {
    Controller,
    Get,
    Post,
    Body,
    Param,
    Delete,
    Patch,
    Query,
    NotFoundException,
    UseInterceptors, Header, ValidationPipe, BadRequestException, UseGuards,
} from '@nestjs/common';
import { IngredientService } from '../ingredient.service';
import { CreateIngredientDto } from '../dto/ingredient/create-ingredient.dto';
import { UpdateIngredientDto } from '../dto/ingredient/update-ingredient.dto';
import {ApiOperation, ApiResponse, ApiParam, ApiQuery, ApiBearerAuth, ApiTags} from '@nestjs/swagger';
import {ETagInterceptor} from "../../interceptors/etag-interceptor";
import {PaginationInterceptor} from "../../interceptors/pagination-interceptor";
import {PaginationQueryDto} from "../../pagination-query.dto";
import {AuthGuard} from "../../authentification/auth.guard";
import { Public } from 'src/authentification/public.decorator';

@Controller('/api/ingredient')
@UseInterceptors(ETagInterceptor)
@ApiBearerAuth('jwt-auth')
@UseGuards(AuthGuard)
@ApiTags('Ингредиенты')
@Public()
export class IngredientRestController {
    constructor(private readonly ingredientService: IngredientService) {}

    @ApiOperation({ summary: 'Получить все ингредиенты' })
    @ApiQuery({
        name: 'page',
        required: false,
        type: 'string',
        description: 'Номер страницы',
        example: '1'
    })
    @ApiQuery({
        name: 'limit',
        required: false,
        type: 'string',
        description: 'Количество элементов на странице',
        example: '10'
    })
    @ApiResponse({
        status: 200,
        description: 'Список ингредиентов',
        type: Object,
    })
    @ApiResponse({
        status: 400,
        description: 'Ошибка при получении списка ингредиентов',
    })
    @Get()
    @Header('Cache-Control', 'no-store')
    @Header('Cache-Control', 'no-store')
    @UseInterceptors(PaginationInterceptor)
    async findAll(
        @Query(new ValidationPipe({ transform: true })) query: PaginationQueryDto,
    ) {
        try {
            return await this.ingredientService.findAll(query.page, query.limit);
        } catch (error) {
            throw new BadRequestException('Ошибка при получении списка ингредиентов: ' + error.message);
        }
    }

    @ApiOperation({ summary: 'Получить ингредиент по ID' })
    @ApiParam({
        name: 'id',
        type: 'string',
        description: 'ID ингредиента',
        example: 'ingredient-id-123',
    })
    @ApiResponse({
        status: 200,
        description: 'Информация об ингредиенте',
        type: Object,
    })
    @ApiResponse({
        status: 404,
        description: 'Ингредиент не найден',
    })
    @Get(':id')
    @Header('Cache-Control', 'no-store')
    async findOne(@Param('id') id: string) {
        try {
            const ingredient = await this.ingredientService.findOne(id);
            if (!ingredient) {
                throw new NotFoundException(`Ингредиент с id ${id} не найден`);
            }
            return ingredient;
        } catch (error) {
            throw new BadRequestException('Ошибка при получении ингредиента: ' + error.message);
        }
    }

    @ApiOperation({ summary: 'Создать новый ингредиент' })
    @ApiResponse({
        status: 201,
        description: 'Ингредиент успешно создан',
        type: Object,
    })
    @Post()
    @Header('Cache-Control', 'no-store')
    async create(@Body() createIngredientDto: CreateIngredientDto) {
        try {
            return await this.ingredientService.create(createIngredientDto);
        } catch (error) {
            throw new BadRequestException('Ошибка при создании ингредиента: ' + error.message);
        }
    }

    @ApiOperation({ summary: 'Обновить информацию об ингредиенте' })
    @ApiParam({
        name: 'id',
        type: 'string',
        description: 'ID ингредиента',
        example: 'ingredient-id-123',
    })
    @ApiResponse({
        status: 200,
        description: 'Ингредиент успешно обновлен',
        type: Object,
    })
    @Patch(':id')
    @Header('Cache-Control', 'no-store')
    async update(
        @Param('id') id: string,
        @Body() updateIngredientDto: UpdateIngredientDto,
    ) {
        try {
            return await this.ingredientService.update(id, updateIngredientDto);
        } catch (error) {
            throw new BadRequestException('Ошибка при обновлении ингредиента: ' + error.message);
        }
    }

    @ApiOperation({ summary: 'Удалить ингредиент по ID' })
    @ApiParam({
        name: 'id',
        type: 'string',
        description: 'ID ингредиента',
        example: 'ingredient-id-123',
    })
    @ApiResponse({
        status: 200,
        description: 'Ингредиент успешно удален',
    })
    @Delete(':id')
    @Header('Cache-Control', 'no-store')
    async remove(@Param('id') id: string) {
        try {
            return await this.ingredientService.remove(id);
        } catch (error) {
            throw new BadRequestException('Ошибка при удалении ингредиента: ' + error.message);
        }
    }
}
