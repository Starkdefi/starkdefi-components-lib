"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var resolveConfig_1 = __importDefault(require("tailwindcss/resolveConfig"));
var config = require("../../tailwind.config.js");
var fullConfig = (0, resolveConfig_1.default)(config);
exports.default = fullConfig.theme;
//# sourceMappingURL=theme.js.map