import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
  UseInterceptors,
  UploadedFiles,
} from '@nestjs/common';
import { BabyDevelopmentService } from './baby_development.service';
import {
  CreateBabyDevelopmentDto,
  CreateBabyDevelopmentSwaggerDto,
  // CreateBabyDevelopmentSwaggerDto,
} from './dto/create-baby_development.dto';
import { UpdateBabyDevelopmentDto } from './dto/update-baby_development.dto';
import { FilesInterceptor } from '@nestjs/platform-express';
import MulterOptions from 'src/global/config/multer/multer.config';
import {
  ApiBody,
  ApiConsumes,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiOperation,
  ApiParam,
} from '@nestjs/swagger';
import {
  BabyDevelopmentByIdResponse,
  BabyDevelopmentByWeekResponse,
  BabyDevelopmentCreatedResponse,
  BabyDevelopmentDeleteResposne,
  BabyDevelopmentListResponse,
  BabyDevelopmentUpdateResponse,
} from './dto/swagger-response';
import { FileValidationPipe } from 'src/global/FileValidationPipe';

@Controller('baby-development')
export class BabyDevelopmentController {
  constructor(
    private readonly babyDevelopmentService: BabyDevelopmentService,
  ) {}

  @Post()
  @ApiOperation({ summary: 'Create baby development record with files' })
  @ApiBody({ type: CreateBabyDevelopmentSwaggerDto })
  @ApiConsumes('multipart/form-data')
  @ApiCreatedResponse({
    type: BabyDevelopmentCreatedResponse,
    description: 'Baby development record created successfully',
  })
  @UseInterceptors(FilesInterceptor('files', 10, MulterOptions))
  create(
    @UploadedFiles(new FileValidationPipe()) files: Express.Multer.File[],
    @Body() data: CreateBabyDevelopmentDto,
  ) {
    return this.babyDevelopmentService.create(data, files);
  }

  @Get()
  @ApiOkResponse({
    type: BabyDevelopmentListResponse,
    description: 'List of all baby development records',
  })
  findAll() {
    return this.babyDevelopmentService.findAll();
  }

  @Get('week/:week')
  @ApiParam({
    name: 'week',
    description:
      'Week number of the baby development record. It should match the data.week.weekNumber from the response of the endpoint',
    type: Number,
    example: 1,
  })
  @ApiOkResponse({
    type: BabyDevelopmentByWeekResponse,
    description: 'Get baby development record by week number',
  })
  findByWeek(@Param('week', ParseIntPipe) week: number) {
    return this.babyDevelopmentService.findOneByWeek(week);
  }

  @Get(':id')
  @ApiParam({
    name: 'id',
    description:
      'ID of the baby development record. It should match the data.id from the response of the endpoint',
    example: 1,
  })
  @ApiOkResponse({
    type: BabyDevelopmentByIdResponse,
    description: 'Get baby development record by ID',
  })
  findOne(@Param('id') id: string) {
    return this.babyDevelopmentService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update baby development record by ID' })
  @ApiConsumes('multipart/form-data')
  @ApiParam({
    name: 'id',
    description: 'ID of the baby development record.',
    example: 1,
  })
  @ApiBody({
    description: 'Update baby development data',
    type: CreateBabyDevelopmentDto,
  })
  @ApiOkResponse({
    type: BabyDevelopmentUpdateResponse,
    description: 'Update baby development record by ID',
  })
  @UseInterceptors(FilesInterceptor('files', 10, MulterOptions))
  update(
    @Param('id') id: string,
    @UploadedFiles() files: Express.Multer.File[],

    @Body() updateBabyDevelopmentDto: UpdateBabyDevelopmentDto,
  ) {
    if (files) {
      return this.babyDevelopmentService.update(
        +id,
        updateBabyDevelopmentDto,
        files,
      );
    }
    return this.babyDevelopmentService.update(+id, updateBabyDevelopmentDto);
  }

  @Delete(':id')
  @ApiOkResponse({
    type: BabyDevelopmentDeleteResposne,
    description: 'Delete baby development record by ID',
  })
  remove(@Param('id') id: string) {
    return this.babyDevelopmentService.remove(+id);
  }
}
