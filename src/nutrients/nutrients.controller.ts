import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { NutrientsService } from './nutrients.service';
import { CreateNutrientDto } from './dto/create-nutrient.dto';
import { UpdateNutrientDto } from './dto/update-nutrient.dto';
import { ApiCreatedResponse, ApiOkResponse } from '@nestjs/swagger';
import {
  NutrientArrayResponse,
  NutrientCreatedResponse,
  NutrientDeletedResponse,
  NutrientSingleResponse,
  NutrientUpdatedResponse,
} from './dto/swagger-response';

@Controller('nutrients')
export class NutrientsController {
  constructor(private readonly nutrientsService: NutrientsService) {}

  @Post()
  @ApiCreatedResponse({
    type: NutrientCreatedResponse,
  })
  create(@Body() createNutrientDto: CreateNutrientDto) {
    return this.nutrientsService.create(createNutrientDto);
  }

  @Get()
  @ApiOkResponse({
    type: NutrientArrayResponse,
    description: 'Returns an array of all nutrients',
  })
  findAll() {
    return this.nutrientsService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({
    type: NutrientSingleResponse,
    description: 'Returns a single nutrient by ID',
  })
  findOne(@Param('id') id: string) {
    return this.nutrientsService.findOne(+id);
  }

  @Patch(':id')
  @ApiOkResponse({
    type: NutrientUpdatedResponse,
    description: 'Updates a nutrient by ID',
  })
  update(
    @Param('id') id: string,
    @Body() updateNutrientDto: UpdateNutrientDto,
  ) {
    return this.nutrientsService.update(+id, updateNutrientDto);
  }

  @Delete(':id')
  @ApiOkResponse({
    type: NutrientDeletedResponse,
    description: 'Deletes a nutrient by ID',
  })
  remove(@Param('id') id: string) {
    return this.nutrientsService.remove(+id);
  }
}
