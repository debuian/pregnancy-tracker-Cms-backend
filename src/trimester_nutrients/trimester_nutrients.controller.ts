import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { TrimesterNutrientsService } from './trimester_nutrients.service';
import { CreateTrimesterNutrientDto } from './dto/create-trimester_nutrient.dto';
import { UpdateTrimesterNutrientDto } from './dto/update-trimester_nutrient.dto';
import {
  ApiCreatedResponse,
  ApiOkResponse,
  ApiProperty,
} from '@nestjs/swagger';
import {
  TrimesterNutrientCreatedResponse,
  TrimesterNutrientDeletedResponse,
  TrimesterNutrientFindOneResponse,
  TrimesterNutrientListResponse,
  TrimesterNutrientUpdatedResponse,
} from './dto/swagger-response';

@Controller('trimester-nutrients')
export class TrimesterNutrientsController {
  constructor(
    private readonly trimesterNutrientsService: TrimesterNutrientsService,
  ) {}

  @Post()
  @ApiCreatedResponse({
    type: TrimesterNutrientCreatedResponse,
    description: 'Creates a new trimester nutrient',
  })
  create(@Body() createTrimesterNutrientDto: CreateTrimesterNutrientDto) {
    return this.trimesterNutrientsService.create(createTrimesterNutrientDto);
  }

  @Get()
  @ApiOkResponse({
    type: TrimesterNutrientListResponse,
    description: 'Returns an array of all trimester nutrients',
  })
  findAll() {
    return this.trimesterNutrientsService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({
    type: TrimesterNutrientFindOneResponse,
    description: 'Returns a single trimester nutrient by ID',
  })
  findOne(@Param('id') id: string) {
    return this.trimesterNutrientsService.findOne(+id);
  }

  @Patch(':id')
  @ApiOkResponse({
    type: TrimesterNutrientUpdatedResponse,
    description: 'Updates a trimester nutrient by ID',
  })
  update(
    @Param('id') id: string,
    @Body() updateTrimesterNutrientDto: UpdateTrimesterNutrientDto,
  ) {
    return this.trimesterNutrientsService.update(
      +id,
      updateTrimesterNutrientDto,
    );
  }

  @Delete(':id')
  @ApiOkResponse({
    type: TrimesterNutrientDeletedResponse,
    description: 'Deletes a trimester nutrient by ID',
  })
  remove(@Param('id') id: string) {
    return this.trimesterNutrientsService.remove(+id);
  }
}
