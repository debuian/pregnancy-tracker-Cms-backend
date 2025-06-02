import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { WeeksService } from './weeks.service';
import { CreateWeekDto } from './dto/create-week.dto';
import { UpdateWeekDto } from './dto/update-week.dto';
import { ApiCreatedResponse, ApiOkResponse } from '@nestjs/swagger';
import {
  WeekListResponse,
  WeekCreatedResponse,
  WeekDeleteResponse,
  WeekSingleResponse,
  WeekUpdateResponse,
} from './dto/swagger-response.dto';

@Controller('weeks')
export class WeeksController {
  constructor(private readonly weeksService: WeeksService) {}

  @Post()
  @ApiCreatedResponse({
    description: 'The week has been successfully created.',
    type: WeekCreatedResponse,
  })
  create(@Body() createWeekDto: CreateWeekDto) {
    return this.weeksService.create(createWeekDto);
  }

  @Get()
  @ApiOkResponse({
    description: 'Returns an array of weeks.',
    type: WeekListResponse,
  })
  findAll() {
    return this.weeksService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({
    description: 'Returns a single week by ID.',
    type: WeekSingleResponse,
  })
  findOne(@Param('id') id: string) {
    return this.weeksService.findOne(+id);
  }

  @Patch(':id')
  @ApiOkResponse({
    description: 'The week has been successfully updated.',
    type: WeekUpdateResponse,
  })
  update(@Param('id') id: string, @Body() updateWeekDto: UpdateWeekDto) {
    return this.weeksService.update(+id, updateWeekDto);
  }

  @Delete(':id')
  @ApiOkResponse({
    description: 'The week has been successfully deleted.',
    type: WeekDeleteResponse,
  })
  remove(@Param('id') id: string) {
    return this.weeksService.remove(+id);
  }
}
