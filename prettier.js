import hive from "./index.js";

/**
 * Hive ESLint configuration with Prettier compatibility.
 * Disables rules that conflict with Prettier formatting.
 * @type {import("eslint").Linter.Config[]}
 */
export default [
    ...hive,
    {
        name: "hive/prettier",
        rules: {
            indent: "off"
        }
    }
];
