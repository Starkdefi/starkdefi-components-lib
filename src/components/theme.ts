import resolveConfig from "tailwindcss/resolveConfig";
const config = require("../../tailwind.config.js");
const fullConfig = resolveConfig(config);

export default fullConfig.theme;
