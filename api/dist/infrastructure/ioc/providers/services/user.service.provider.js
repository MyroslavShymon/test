"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserServiceProvider = void 0;
const index_1 = require("../../../../index");
const constants_1 = require("../../constants");
exports.UserServiceProvider = {
    provide: constants_1.USER_SERVICE_TOKEN,
    useClass: index_1.UserService,
};
//# sourceMappingURL=user.service.provider.js.map