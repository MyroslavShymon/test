"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IsResponseEmpty = void 0;
const common_1 = require("@nestjs/common");
exports.IsResponseEmpty = (0, common_1.createParamDecorator)((data, ctx) => {
    const request = ctx.switchToHttp().getRequest();
    if (Object.keys(request.body).length === 0)
        throw new common_1.BadRequestException('Object must not be empty');
});
//# sourceMappingURL=is-response-empty.decorator.js.map