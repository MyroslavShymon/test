import {TypeOrmModule} from "@nestjs/typeorm"
import {CONFIG_SERVICE_TOKEN} from "../ioc";
import {ConfigService} from "../nest";

export class DatabaseConfigService {
    static provideTypeOrmModule = (entities) =>
        TypeOrmModule.forRootAsync({
            inject: [CONFIG_SERVICE_TOKEN],
            useFactory: async (configService: ConfigService) => ({
                type: "postgres",
                host: configService.getValue("POSTGRES_HOST"),
                port: parseInt(configService.getValue("POSTGRES_PORT")),
                username: configService.getValue("POSTGRES_USER"),
                password: configService.getValue("POSTGRES_PASSWORD"),
                database: configService.getValue("POSTGRES_DB"),
                synchronize: Boolean(configService.getValue("POSTGRES_SYNCHRONIZE")),
                autoLoadEntities: Boolean(
                    configService.getValue("POSTGRES_AUTO_LOAD_ENTITIES"),
                ),
                entities,
            }),
        })
}
