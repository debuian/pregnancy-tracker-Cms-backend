import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { TrimestersService } from './trimesters.service';
import { CreateTrimesterDto } from './dto/create-trimester.dto';
import { UpdateTrimesterDto } from './dto/update-trimester.dto';
import { ApiOkResponse } from '@nestjs/swagger';
import { TrimesterExamples } from './dto/trimester.examples';
import {
  TrimesterListResponse,
  TrimesterDeleteResponse,
  TrimesterCreateResponse,
  TrimesterSingleResponse,
  TrimesterUpdateResposne,
} from './dto/swagger-response';

@Controller('trimesters')
export class TrimestersController {
  constructor(private readonly trimestersService: TrimestersService) {}

  @Post()
  @ApiOkResponse({
    description: 'The trimester has been successfully created.',
    type: TrimesterCreateResponse,
    example: TrimesterExamples.CREATED,
  })
  create(@Body() createTrimesterDto: CreateTrimesterDto) {
    return this.trimestersService.create(createTrimesterDto);
  }

  @Get()
  @ApiOkResponse({
    description: 'Returns a list of all trimesters.',
    type: TrimesterListResponse,
  })
  findAll() {
    return this.trimestersService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({
    description: 'Returns a single trimester by ID.',
    type: TrimesterSingleResponse,
  })
  findOne(@Param('id') id: string) {
    return this.trimestersService.findOne(+id);
  }

  @Patch(':id')
  @ApiOkResponse({
    description: 'The trimester has been successfully updated.',
    type: TrimesterUpdateResposne,
  })
  update(
    @Param('id') id: string,
    @Body() updateTrimesterDto: UpdateTrimesterDto,
  ) {
    return this.trimestersService.update(+id, updateTrimesterDto);
  }

  @Delete(':id')
  @ApiOkResponse({
    description: 'The trimester has been successfully deleted.',
    type: TrimesterDeleteResponse,
  })
  remove(@Param('id') id: string) {
    return this.trimestersService.remove(+id);
  }
}
