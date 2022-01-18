"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProvideDocsService = void 0;
const swagger_1 = require("@nestjs/swagger");
function ProvideDocsService(app) {
    const config = new swagger_1.DocumentBuilder()
        .setTitle('Test task')
        .setDescription('Simple store test task documentation')
        .setVersion('1.0.0')
        .addTag('Store')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup('/api/docs', app, document);
}
exports.ProvideDocsService = ProvideDocsService;
//# sourceMappingURL=index.js.map