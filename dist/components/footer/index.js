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
var footer_module_css_1 = __importDefault(require("./footer.module.css"));
var logo_svg_1 = require("../../assets/icons/logo.svg");
var powered_svg_1 = require("../../assets/icons/powered.svg");
var arrow_v2_svg_1 = require("../../assets/icons/arrow-v2.svg");
var discord_svg_1 = require("../../assets/icons/discord.svg");
var medium_svg_1 = require("../../assets/icons/medium.svg");
var twitter_svg_1 = require("../../assets/icons/twitter.svg");
var telegram_svg_1 = require("../../assets/icons/telegram.svg");
var github_svg_1 = require("../../assets/icons/github.svg");
var theme_1 = __importDefault(require("../theme"));
var button_1 = __importDefault(require("../button"));
var colors = theme_1.default.colors;
var socials = [
    {
        url: "https://discord.com/invite/starkdefi",
        Icon: discord_svg_1.ReactComponent,
    },
    {
        url: "https://starkdefi.medium.com/",
        Icon: medium_svg_1.ReactComponent,
    },
    {
        url: "https://twitter.com/StarkDefi",
        Icon: twitter_svg_1.ReactComponent,
    },
    {
        url: "https://t.me/starkdefi_ann",
        Icon: telegram_svg_1.ReactComponent,
    },
    {
        url: "https://github.com/Starkdefi",
        Icon: github_svg_1.ReactComponent,
    },
];
var Link = function (_a) {
    var children = _a.children, textColor = _a.textColor, accentColor = _a.accentColor, props = __rest(_a, ["children", "textColor", "accentColor"]);
    return (react_1.default.createElement("a", { className: "".concat(footer_module_css_1.default.section_nav_link, " text-[var(--text-color)] hover:text-[var(--accent-color)]"), href: props.href, rel: "noopener noreferrer", target: "_blank" }, children));
};
var LegalLink = function (_a) {
    var children = _a.children, textColor = _a.textColor, accentColor = _a.accentColor, props = __rest(_a, ["children", "textColor", "accentColor"]);
    return (react_1.default.createElement("a", { className: "".concat(footer_module_css_1.default.tos_pp, " text-[var(--text-color)] hover:text-[var(--accent-color)]"), href: props.href, target: "_blank", rel: "noopener noreferrer" }, children));
};
/**
 * StarkDefi Footer component
 * This component renders a footer with a logo, an optional title, and a list of social icons.
 * @param {FooterProps} props
 * @returns {JSX.Element}
 */
function Footer(_a) {
    var style = _a.style, backgroundColor = _a.backgroundColor, textColor = _a.textColor, accentColor = _a.accentColor, socialColor = _a.socialColor, className = _a.className;
    return (react_1.default.createElement("footer", { style: __assign({ "--bg-color": backgroundColor ? backgroundColor : colors.green_dark2, "--text-color": textColor ? textColor : "white", "--accent-color": accentColor ? accentColor : colors.green_light, "--social-color": socialColor ? socialColor : "#9B9C9D" }, style), className: "".concat(footer_module_css_1.default.footer, " before:bg-[var(--bg-color)] ").concat(className !== null && className !== void 0 ? className : "") },
        react_1.default.createElement("section", { className: "xl:max-container md:px-8 px-4 m-auto flex items-start justify-between flex-wrap md:flex-nowrap" },
            react_1.default.createElement("div", { className: "lg:w-[55%] md:w-[40%] w-full" },
                react_1.default.createElement("div", { className: "flex flex-col gap-4" },
                    react_1.default.createElement("a", { href: "/" },
                        react_1.default.createElement(logo_svg_1.ReactComponent, null)),
                    react_1.default.createElement("p", { className: "flex items-center gap-2 opacity-40 pt-4" },
                        react_1.default.createElement(powered_svg_1.ReactComponent, null),
                        react_1.default.createElement("span", { className: "text-[var(--text-color)] font-CeraPro-Light leading-[160%]" }, "Powered by StarkNet"))),
                react_1.default.createElement("div", { className: "flex items-center lg:gap-8 gap-4 xl:pt-28 lg:pt-24 md:pt-12 pt-8 lg:flex-nowrap flex-wrap md:pb-0 pb-8" },
                    react_1.default.createElement("a", { href: "mailto:starkdefi@gmail.com", target: "_blank", rel: "noreferrer" },
                        react_1.default.createElement(button_1.default, { className: "xl:text-[18px] md:text-[14px] text-[12px] rounded", backgroundColor: colors.green_2 },
                            react_1.default.createElement("p", { className: "flex gap-3 items-center py-1" },
                                "Contact Us ",
                                react_1.default.createElement(arrow_v2_svg_1.ReactComponent, { className: footer_module_css_1.default.arrow })))),
                    react_1.default.createElement("a", { href: "https://linktr.ee/starkdefi", target: "_blank", rel: "noopener noreferrer" },
                        react_1.default.createElement(button_1.default, { className: "txl:text-[18px] !text-[var(--accent-color)]  md:text-[14px] text-[12px]", btnType: "ringed", backgroundColor: colors.btn_black },
                            react_1.default.createElement("p", { className: "flex gap-3 items-center py-1" },
                                "Join Our Community ",
                                react_1.default.createElement(arrow_v2_svg_1.ReactComponent, { className: footer_module_css_1.default.arrow })))))),
            react_1.default.createElement("div", { className: footer_module_css_1.default.section_column },
                react_1.default.createElement("div", null,
                    react_1.default.createElement("h3", { className: "".concat(footer_module_css_1.default.section_head, " text-[var(--text-color)]") }, "Documentation"),
                    react_1.default.createElement("div", { className: "flex items-start justify-between flex-col pt-4" },
                        react_1.default.createElement(Link, { textColor: textColor, accentColor: accentColor, href: "https://docs.starkdefi.com/project-overview" }, "Litepaper"),
                        react_1.default.createElement(Link, { textColor: textColor, accentColor: accentColor, href: "https://docs.starkdefi.com/quick-start/connect-to-starkdefi" }, "How to connect wallet"),
                        react_1.default.createElement(Link, { textColor: textColor, accentColor: accentColor, href: "https://docs.starkdefi.com/extras/resources" }, "Resources"))),
                react_1.default.createElement(LegalLink, { textColor: textColor, accentColor: accentColor, href: "https://docs.starkdefi.com/extras/privacy-policy" }, "Privacy Policy")),
            react_1.default.createElement("div", { className: footer_module_css_1.default.section_column },
                react_1.default.createElement("div", null,
                    react_1.default.createElement("h3", { className: "".concat(footer_module_css_1.default.section_head, " text-[var(--text-color)]") }, "Social"),
                    react_1.default.createElement("div", { className: "flex items-center lg:justify-between justify-start lg:flex-nowrap flex-wrap gap-3 pt-4" }, socials.map(function (social) { return (react_1.default.createElement("a", { className: footer_module_css_1.default.section_nav_link, href: social.url, target: "_blank", key: social.url, rel: "noopener noreferrer" },
                        react_1.default.createElement(social.Icon, { className: "".concat(footer_module_css_1.default.social_icon, " ") }))); }))),
                react_1.default.createElement(LegalLink, { textColor: textColor, accentColor: accentColor, href: "https://docs.starkdefi.com/extras/terms-of-use" }, "Terms of Use")))));
}
exports.default = Footer;
//# sourceMappingURL=index.js.map