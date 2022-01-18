import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import * as path from 'path';
import * as fs from 'fs';
import * as uuid from 'uuid';
import { FileType } from 'src/core/enums';

@Injectable()
export class FileService {
	createFile(type: FileType, file): string {
		try {
			const fileExtension = file.originalname.split('.').pop();
			const fileName = String(uuid.v4() + '.' + fileExtension);
			const filePath = path.resolve(
				__dirname,
				'..',
				'..',
				'..',
				'static',
				type,
			);
			if (!fs.existsSync(filePath)) {
				fs.mkdirSync(filePath, { recursive: true });
			}
			fs.writeFileSync(path.resolve(filePath, fileName), file.buffer);
			return type + '/' + fileName;
		} catch (error) {
			console.log(error);

			throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	//   removeFile(fileName: string) {}
}
