"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConfigService = void 0;
class ConfigService {
    constructor(env) {
        this.env = env;
    }
    getValue(key) {
        const value = this.env[key];
        if (!value) {
            throw new Error(`config error - missing env.${key}`);
        }
        return value;
    }
    getPort() {
        return this.getValue('PORT');
    }
    isProduction() {
        const mode = this.getValue('MODE');
        return mode != 'DEV';
    }
}
exports.ConfigService = ConfigService;
//# sourceMappingURL=config.service.js.map