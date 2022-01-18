"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var ConfigModule_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConfigModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const serve_static_1 = require("@nestjs/serve-static");
const path = require("path");
const ioc_1 = require("../ioc");
let ConfigModule = ConfigModule_1 = class ConfigModule {
    static forRoot() {
        return {
            module: ConfigModule_1,
            providers: [ioc_1.ConfigServiceProvider],
            exports: [ioc_1.CONFIG_SERVICE_TOKEN],
        };
    }
};
ConfigModule = ConfigModule_1 = __decorate([
    (0, common_1.Global)(),
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                envFilePath: process.env.NODE_ENV === "production" ? ".env" : ".development.env",
            }),
            serve_static_1.ServeStaticModule.forRoot({
                rootPath: path.resolve(__dirname, "..", "..", "static"),
            }),
        ],
        exports: [config_1.ConfigModule],
    })
], ConfigModule);
exports.ConfigModule = ConfigModule;
//# sourceMappingURL=own-config.module.js.map