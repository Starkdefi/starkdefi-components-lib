"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var button_module_css_1 = __importDefault(require("./button.module.css"));
var theme_1 = __importDefault(require("../theme"));
var colors = theme_1.default.colors;
function Button(_a) {
    var children = _a.children, onClick = _a.onClick, _b = _a.className, className = _b === void 0 ? "" : _b, _c = _a.btnType, btnType = _c === void 0 ? "regular" : _c, textColor = _a.textColor, accentColor = _a.accentColor, backgroundColor = _a.backgroundColor, hoverTextColor = _a.hoverTextColor, props = __rest(_a, ["children", "onClick", "className", "btnType", "textColor", "accentColor", "backgroundColor", "hoverTextColor"]);
    return (react_1.default.createElement("button", __assign({ style: {
            "--btn-text-color": textColor ? textColor : colors.green_light,
            "--btn-accent-color": accentColor ? accentColor : colors.green_light,
            "--btn-bg-color": backgroundColor
                ? backgroundColor
                : colors.green_light5,
            "--btn-hover-text-color": hoverTextColor ? hoverTextColor : "white",
        }, className: "".concat(button_module_css_1.default.button, " ").concat(button_module_css_1.default[btnType || "regular"], " ").concat(className), onClick: onClick }, props), children));
}
exports.default = Button;
//# sourceMappingURL=index.js.map