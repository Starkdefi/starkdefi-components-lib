"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.theme = exports.Footer = exports.Button = void 0;
require("./styles/globals.css");
var button_1 = __importDefault(require("./components/button"));
exports.Button = button_1.default;
var footer_1 = __importDefault(require("./components/footer"));
exports.Footer = footer_1.default;
var theme_1 = __importDefault(require("./components/theme"));
exports.theme = theme_1.default;
if (process.env.NODE_ENV === "development") {
    Promise.all([Promise.resolve().then(function () { return __importStar(require("react")); }), Promise.resolve().then(function () { return __importStar(require("react-dom")); }), Promise.resolve().then(function () { return __importStar(require("./App")); })]).then(function (_a) {
        var React = _a[0].default, ReactDOM = _a[1].default, App = _a[2].App;
        var rootElement = document.getElementById("root");
        if (rootElement) {
            ReactDOM.render(React.createElement(App), rootElement);
        }
    });
}
//# sourceMappingURL=index.js.map