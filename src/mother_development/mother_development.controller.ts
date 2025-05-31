import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseInterceptors,
  UploadedFiles,
} from '@nestjs/common';
import { MotherDevelopmentService } from './mother_development.service';
import {
  CreateMotherDevelopmentDto,
  CreateMotherDeveSwagger,
} from './dto/create-mother_development.dto';
import { UpdateMotherDevelopmentDto } from './dto/update-mother_development.dto';
import { FilesInterceptor } from '@nestjs/platform-express';
import MulterOptions from 'src/global/config/multer/multer.config';
import {
  ApiBody,
  ApiConsumes,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiParam,
} from '@nestjs/swagger';
import {
  MotherDeveCreatedResponse,
  MotherDeveDeleteResponse,
  MotherDeveFindAllResponse,
  MotherDeveFindOneResponse,
  MotherDevUpdateResponse,
} from './dto/swagger-response';
import { FileValidationPipe } from 'src/global/FileValidationPipe';

@Controller('mother-development')
export class MotherDevelopmentController {
  constructor(
    private readonly motherDevelopmentService: MotherDevelopmentService,
  ) {}

  @Post()
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    type: CreateMotherDeveSwagger,
    description: 'Mother development data and optional media files',
    required: true,
  })
  @ApiCreatedResponse({
    type: MotherDeveCreatedResponse,
    description: 'Mother development record created successfully',
  })
  @UseInterceptors(FilesInterceptor('files', 10, MulterOptions))
  create(
    @UploadedFiles(new FileValidationPipe()) files: Express.Multer.File[],
    @Body() data: CreateMotherDevelopmentDto,
  ) {
    console.log('fiels', files);

    return this.motherDevelopmentService.create(data, files);
  }

  @Get()
  @ApiOkResponse({
    type: MotherDeveFindAllResponse,
    description: 'List of all mother development records',
  })
  findAll() {
    return this.motherDevelopmentService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({
    type: MotherDeveFindOneResponse,
    description: 'Details of a specific mother development record',
  })
  findOne(@Param('id') id: string) {
    return this.motherDevelopmentService.findOne(+id);
  }

  @Patch(':id')
  @ApiParam({
    name: 'id',
    example: '1',
  })
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    type: CreateMotherDeveSwagger,
    description: 'Mother development data and optional media files',
    required: true,
  })
  @ApiOkResponse({
    type: MotherDevUpdateResponse,
    description: 'Mother development record updated successfully',
  })
  update(
    @Param('id') id: string,
    @Body() updateMotherDevelopmentDto: UpdateMotherDevelopmentDto,
  ) {
    return this.motherDevelopmentService.update(
      +id,
      updateMotherDevelopmentDto,
    );
  }

  @Delete(':id')
  @ApiOkResponse({
    type: MotherDeveDeleteResponse,
    description: 'Mother development record deleted successfully',
  })
  remove(@Param('id') id: string) {
    return this.motherDevelopmentService.remove(+id);
  }
}
