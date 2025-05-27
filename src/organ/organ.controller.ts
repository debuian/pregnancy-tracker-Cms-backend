import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { OrganService } from './organ.service';
import { CreateOrganDto } from './dto/create-organ.dto';
import { UpdateOrganDto } from './dto/update-organ.dto';
import { ApiCreatedResponse, ApiOkResponse } from '@nestjs/swagger';
import { OrganEntity } from './entities/organ.entity';
import {
  OragnSingleResponse,
  OrganArrayResponse,
  OrganCreatedResponse,
  OrganDeleteResponse,
  OrganUpdatedResponse,
} from './dto/swagger.response';

@Controller('organ')
export class OrganController {
  constructor(private readonly organService: OrganService) {}

  @Post()
  @ApiCreatedResponse({
    description: 'Organ created successfully',
    type: OrganCreatedResponse,
  })
  create(@Body() createOrganDto: CreateOrganDto) {
    return this.organService.create(createOrganDto);
  }

  @Get()
  @ApiOkResponse({
    description: 'List of all organs',
    type: OrganArrayResponse,
  })
  findAll() {
    return this.organService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({
    description: 'Single organ retrieved successfully',
    type: OragnSingleResponse,
  })
  findOne(@Param('id') id: string) {
    return this.organService.findOne(+id);
  }

  @Patch(':id')
  @ApiOkResponse({
    description: 'Organ updated successfully',
    type: OrganUpdatedResponse,
  })
  update(@Param('id') id: string, @Body() updateOrganDto: UpdateOrganDto) {
    return this.organService.update(+id, updateOrganDto);
  }

  @Delete(':id')
  @ApiOkResponse({
    description: 'Organ deleted successfully',
    type: OrganDeleteResponse,
  })
  remove(@Param('id') id: string) {
    return this.organService.remove(+id);
  }
}
