import { HttpExceptionResponse } from './http-exception-response.interface';
export interface CustomHttpExceptionResponse extends HttpExceptionResponse {
    path: string;
    method: string;
    timeStamp: Date;
    exception: string;
}
