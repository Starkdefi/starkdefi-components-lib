"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = void 0;
// src/App.tsx
var react_1 = __importDefault(require("react"));
var button_1 = __importDefault(require("./components/button"));
var footer_1 = __importDefault(require("./components/footer"));
var theme_1 = __importDefault(require("./components/theme"));
var colors = theme_1.default.colors;
var Heading = function (_a) {
    var text = _a.text;
    return (react_1.default.createElement("h2", { className: "text-[30.29px] text-green_dark leading-[160%] text-center" }, text));
};
var App = function () {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("h1", { className: "xl:text-[36.29px] lg:text-[30.29px] md:text-[22.29px] text-[18px] leading-[160%] text-green_light text-center" }, "StarkDefi Component Lib"),
        react_1.default.createElement("div", { className: "flex flex-col items-center" },
            react_1.default.createElement(Heading, { text: "Buttons" }),
            react_1.default.createElement("div", { className: "flex gap-3 flex-wrap" },
                react_1.default.createElement(button_1.default, { className: "txl:text-[18px]  md:text-[14px] text-[12px]", btnType: "ringed", backgroundColor: "black" },
                    react_1.default.createElement("p", { className: "flex gap-3 items-center py-1" }, "Join Our Community")),
                react_1.default.createElement(button_1.default, { className: "xl:text-[18px] md:text-[14px] text-[12px] rounded", accentColor: "red", textColor: colors.green_light, backgroundColor: colors.green_2 },
                    react_1.default.createElement("p", { className: "flex gap-3 items-center py-1" }, "Contact Us")),
                react_1.default.createElement(button_1.default, { btnType: "regular-outline", textColor: "red", accentColor: "red", className: "xl:text-[18px] md:text-[14px] text-[12px] rounded" },
                    react_1.default.createElement("p", { className: "flex gap-3 items-center py-1" }, "Launch")))),
        react_1.default.createElement("div", { className: "mt-10" },
            react_1.default.createElement(Heading, { text: "Footer" }),
            react_1.default.createElement(footer_1.default, { backgroundColor: "black" }))));
};
exports.App = App;
//# sourceMappingURL=App.js.map