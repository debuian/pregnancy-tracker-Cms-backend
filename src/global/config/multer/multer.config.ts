import { MulterModuleOptions } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import * as fs from 'fs';
import * as path from 'path';
const uploadDir = path.join(__dirname, '..', '..', 'uploads');
const uploadDirName = 'uploads';
const MulterOptions: MulterModuleOptions = {
  storage: diskStorage({
    destination: (req, file, cb) => {
      try {
        if (!fs.existsSync(uploadDir)) {
          fs.mkdirSync(uploadDir, { recursive: true });
        }
        cb(null, uploadDirName);
      } catch (error) {
        console.error('Multer File Destination Error - ', error);
        cb(new Error('Failed to set file destination.'), '');
      }
    },
    filename: (req, file, cb) => {
      try {
        const originalName = file.originalname || 'default';
        const sanitizedFileName = originalName
          .replace(/[<>:"/\\|?*\s]+/g, '')
          .substring(0, 200);
        const fileName = `${Date.now()}-${sanitizedFileName}`;
        cb(null, fileName);
      } catch (error) {
        console.error('Multer File Naming Error - ', error);
        cb(new Error('Failed to generate file name.'), '');
      }
    },
  }),
};

export default MulterOptions;
