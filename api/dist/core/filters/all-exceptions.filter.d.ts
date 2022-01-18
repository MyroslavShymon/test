import { ArgumentsHost, ExceptionFilter } from '@nestjs/common';
export declare class AllExceptionsFilters implements ExceptionFilter {
    private exception;
    catch(exception: unknown, host: ArgumentsHost): void;
    private getErrorResponse;
}
