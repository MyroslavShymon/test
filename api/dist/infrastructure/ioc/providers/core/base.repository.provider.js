"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseRepositoryProvider = void 0;
const constants_1 = require("../../constants");
function BaseRepositoryProvider(useClass) {
    return {
        provide: constants_1.BASE_PROVIDER_REPOSITORY_TOKEN,
        useClass,
    };
}
exports.BaseRepositoryProvider = BaseRepositoryProvider;
//# sourceMappingURL=base.repository.provider.js.map