"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoleServiceProvider = void 0;
const constants_1 = require("../../constants");
const index_1 = require("../../../../index");
exports.RoleServiceProvider = {
    provide: constants_1.ROLE_SERVICE_TOKEN,
    useClass: index_1.RoleService,
};
//# sourceMappingURL=role.service.provider.js.map