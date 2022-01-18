"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConfigServiceProvider = void 0;
const nest_1 = require("../../../nest");
const constants_1 = require("../../constants");
exports.ConfigServiceProvider = {
    provide: constants_1.CONFIG_SERVICE_TOKEN,
    useValue: new nest_1.ConfigService(process.env),
};
//# sourceMappingURL=config-service.provider.js.map