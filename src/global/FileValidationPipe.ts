import {
  ArgumentMetadata,
  BadRequestException,
  Injectable,
  PipeTransform,
} from '@nestjs/common';

@Injectable()
export class FileValidationPipe implements PipeTransform {
  transform(value: Express.Multer.File[], metadata: ArgumentMetadata) {
    if (!value || value.length === 0) {
      throw new BadRequestException('At least one file must be uploaded');
    }

    const allowedTypes = ['image/jpeg', 'image/png', 'application/pdf'];

    for (const file of value) {
      if (!allowedTypes.includes(file.mimetype)) {
        throw new BadRequestException(
          `File type ${file.mimetype} is not allowed`,
        );
      }
      if (file.size > 5 * 1024 * 1024) {
        throw new BadRequestException(
          `File ${file.originalname} exceeds the size limit`,
        );
      }
    }

    return value;
  }
}
