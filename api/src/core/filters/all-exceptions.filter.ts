import {
	ArgumentsHost,
	Catch,
	ExceptionFilter,
	HttpException,
	HttpStatus,
} from '@nestjs/common';
import { Response, Request } from 'express';

import { CustomHttpExceptionResponse } from './interfaces/custom-http-exception-response.interface';
import { HttpExceptionResponse } from './interfaces/http-exception-response.interface';

@Catch()
export class AllExceptionsFilters implements ExceptionFilter {
	private exception: unknown;

	catch(exception: unknown, host: ArgumentsHost) {
		const ctx = host.switchToHttp();
		const response = ctx.getResponse<Response>();
		const request = ctx.getRequest<Request>();

		let status: HttpStatus;
		let errorMessage: string;

		// console.log('exceptionexceptionexceptionexception', exception);
		this.exception = exception;

		if (exception instanceof HttpException) {
			status = exception.getStatus();
			const errorResponse = exception.getResponse();

			errorMessage =
				exception.message || (errorResponse as HttpExceptionResponse).error;
		} else {
			status = HttpStatus.INTERNAL_SERVER_ERROR;
			errorMessage = 'Critical internal server error occurred!';
		}

		const errorResponse = this.getErrorResponse(status, errorMessage, request);
		response.status(status).json(errorResponse);
	}

	private getErrorResponse = (
		status: HttpStatus,
		errorMessage: string,
		request: Request,
	): CustomHttpExceptionResponse => ({
		exception: String(this.exception) || '',
		statusCode: status,
		error: errorMessage,
		path: request.url,
		method: request.method,
		timeStamp: new Date(),
	});
}
