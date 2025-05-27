import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { SymptomsService } from './symptoms.service';
import { CreateSymptomDto } from './dto/create-symptom.dto';
import { UpdateSymptomDto } from './dto/update-symptom.dto';
import { ApiCreatedResponse, ApiOkResponse } from '@nestjs/swagger';
import {
  SymptomCreatedResponse,
  SymptomDeletedResponse,
  SymptomFindOneResponse,
  SymptomListResponse,
  SymptomUpdatedResponse,
} from './dto/swagger-response';

@Controller('symptoms')
export class SymptomsController {
  constructor(private readonly symptomsService: SymptomsService) {}

  @Post()
  @ApiCreatedResponse({
    type: SymptomCreatedResponse,
    description: 'Successfully created a new symptom',
  })
  create(@Body() createSymptomDto: CreateSymptomDto) {
    return this.symptomsService.create(createSymptomDto);
  }

  @Get()
  @ApiOkResponse({
    type: SymptomListResponse,
    description: 'Successfully retrieved the list of symptoms',
  })
  findAll() {
    return this.symptomsService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({
    type: SymptomFindOneResponse,
    description: 'Successfully retrieved the symptom by ID',
  })
  findOne(@Param('id') id: string) {
    return this.symptomsService.findOne(+id);
  }

  @Patch(':id')
  @ApiOkResponse({
    type: SymptomUpdatedResponse,
    description: 'Successfully updated the symptom',
  })
  update(@Param('id') id: string, @Body() updateSymptomDto: UpdateSymptomDto) {
    return this.symptomsService.update(+id, updateSymptomDto);
  }

  @Delete(':id')
  @ApiOkResponse({
    type: SymptomDeletedResponse,
    description: 'Successfully deleted the symptom',
  })
  remove(@Param('id') id: string) {
    return this.symptomsService.remove(+id);
  }
}
