"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const common_1 = require("@nestjs/common");
const docs_1 = require("./infrastructure/docs");
async function bootstrap() {
    const PORT = process.env.PORT || 5000;
    const app = await core_1.NestFactory.create(app_module_1.AppModule, {
        cors: true,
    });
    app.useGlobalPipes(new common_1.ValidationPipe());
    app.setGlobalPrefix("api");
    (0, docs_1.ProvideDocsService)(app);
    await app.listen(PORT, () => {
        console.log(`Server started on port ${PORT}`);
    });
}
bootstrap();
//# sourceMappingURL=main.js.map