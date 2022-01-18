"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatabaseConfigService = void 0;
const typeorm_1 = require("@nestjs/typeorm");
const ioc_1 = require("../../../../ioc");
class DatabaseConfigService {
}
exports.DatabaseConfigService = DatabaseConfigService;
_a = DatabaseConfigService;
DatabaseConfigService.provideTypeOrmModule = (entities) => typeorm_1.TypeOrmModule.forRootAsync({
    inject: [ioc_1.CONFIG_SERVICE_TOKEN],
    useFactory: async (configService) => ({
        type: "postgres",
        host: configService.getValue("POSTGRES_HOST"),
        port: parseInt(configService.getValue("POSTGRES_PORT")),
        username: configService.getValue("POSTGRES_USER"),
        password: configService.getValue("POSTGRES_PASSWORD"),
        database: configService.getValue("POSTGRES_DB"),
        synchronize: Boolean(configService.getValue("POSTGRES_SYNCHRONIZE")),
        autoLoadEntities: Boolean(configService.getValue("POSTGRES_AUTO_LOAD_ENTITIES")),
        entities,
    }),
});
//# sourceMappingURL=index.js.map