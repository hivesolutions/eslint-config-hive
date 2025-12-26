import js from "@eslint/js";
import babelParser from "@babel/eslint-parser";
import mochaPlugin from "eslint-plugin-mocha";
import nPlugin from "eslint-plugin-n";
import promisePlugin from "eslint-plugin-promise";
import globals from "globals";

/**
 * Hive ESLint configuration for ESLint 9 (flat config).
 * @type {import("eslint").Linter.Config[]}
 */
export default [
    js.configs.recommended,
    {
        name: "hive/base",
        languageOptions: {
            parser: babelParser,
            parserOptions: {
                requireConfigFile: false,
                babelOptions: {
                    babelrc: false,
                    configFile: false
                }
            },
            globals: {
                ...globals.browser,
                ...globals.jasmine,
                ...globals.node
            }
        },
        plugins: {
            mocha: mochaPlugin,
            n: nPlugin,
            promise: promisePlugin
        },
        rules: {
            indent: [
                "warn",
                4,
                {
                    SwitchCase: 1
                }
            ],
            quotes: [
                "error",
                "double",
                {
                    avoidEscape: true
                }
            ],
            semi: ["error", "always"],
            "space-before-function-paren": [
                "error",
                {
                    anonymous: "never",
                    named: "never",
                    asyncArrow: "always"
                }
            ],
            "linebreak-style": ["error", "windows"],
            "object-shorthand": ["error", "consistent"],
            "no-debugger": "warn",
            "brace-style": "off",
            "no-useless-escape": "off",
            "no-mixed-operators": "off",
            "no-unused-vars": [
                "error",
                {
                    argsIgnorePattern: "^_",
                    varsIgnorePattern: "^_"
                }
            ],
            "mocha/no-exclusive-tests": "error",
            "n/no-callback-literal": "off",
            "promise/catch-or-return": "error",
            "promise/no-return-wrap": "error"
        }
    }
];
