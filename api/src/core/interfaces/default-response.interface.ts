import { HttpStatus } from '@nestjs/common';

export interface IDefaultSuccessResponse {
	status: HttpStatus;
	message: string;
}
