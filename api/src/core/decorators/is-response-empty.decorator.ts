import {
  BadRequestException,
  createParamDecorator,
  ExecutionContext,
} from '@nestjs/common'

export const IsResponseEmpty = createParamDecorator(
  (data: unknown, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest()
    if (Object.keys(request.body).length === 0)
      throw new BadRequestException('Object must not be empty')
  },
)
