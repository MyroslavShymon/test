"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.jwtOptions = void 0;
exports.jwtOptions = {
    secret: process.env.PRIVATE_KEY || 'SECRET',
    signOptions: {
        expiresIn: '24h',
    },
};
//# sourceMappingURL=index.js.map