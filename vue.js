import babelParser from "@babel/eslint-parser";
import vuePlugin from "eslint-plugin-vue";
import vueParser from "vue-eslint-parser";
import hive from "./index.js";

const INLINE_ELEMENTS = [
    "a",
    "abbr",
    "audio",
    "b",
    "bdi",
    "bdo",
    "canvas",
    "cite",
    "code",
    "data",
    "del",
    "dfn",
    "em",
    "i",
    "iframe",
    "ins",
    "kbd",
    "label",
    "map",
    "mark",
    "noscript",
    "object",
    "output",
    "picture",
    "q",
    "ruby",
    "s",
    "samp",
    "small",
    "span",
    "strong",
    "sub",
    "sup",
    "svg",
    "time",
    "u",
    "var",
    "video"
];

/**
 * Hive Vue.js ESLint configuration for ESLint 9 (flat config).
 * @type {import("eslint").Linter.Config[]}
 */
export default [
    ...hive,
    ...vuePlugin.configs["flat/essential"],
    ...vuePlugin.configs["flat/recommended"],
    {
        name: "hive/vue",
        files: ["**/*.vue"],
        languageOptions: {
            parser: vueParser,
            parserOptions: {
                parser: babelParser,
                requireConfigFile: false,
                babelOptions: {
                    babelrc: false,
                    configFile: false
                }
            }
        },
        rules: {
            "vue/component-tags-order": "off",
            "vue/one-component-per-file": "off",
            "vue/multi-word-component-names": "off",
            "vue/html-indent": ["error", 4],
            "vue/component-definition-name-casing": ["error", "kebab-case"],
            "vue/v-on-style": ["error", "longform"],
            "vue/v-bind-style": ["error", "longform"],
            "vue/v-slot-style": [
                "error",
                {
                    atComponent: "v-slot",
                    default: "v-slot",
                    named: "longform"
                }
            ],
            "vue/max-attributes-per-line": [
                "error",
                {
                    singleline: 4
                }
            ],
            "vue/html-self-closing": [
                "error",
                {
                    html: {
                        void: "always",
                        normal: "always",
                        component: "always"
                    },
                    svg: "always",
                    math: "always"
                }
            ],
            "vue/attributes-order": [
                "error",
                {
                    order: [
                        "OTHER_ATTR",
                        "LIST_RENDERING",
                        "CONDITIONALS",
                        "RENDER_MODIFIERS",
                        "DEFINITION",
                        "GLOBAL",
                        "UNIQUE",
                        "TWO_WAY_BINDING",
                        "OTHER_DIRECTIVES",
                        "EVENTS",
                        "CONTENT"
                    ]
                }
            ],
            "vue/order-in-components": [
                "error",
                {
                    order: [
                        "el",
                        "name",
                        "key",
                        "parent",
                        "functional",
                        ["delimiters", "comments"],
                        ["components", "directives", "filters"],
                        "extends",
                        "mixins",
                        ["provide", "inject"],
                        "layout",
                        "middleware",
                        "validate",
                        "scrollToTop",
                        "transition",
                        "loading",
                        "inheritAttrs",
                        "model",
                        ["props", "propsData"],
                        "emits",
                        "setup",
                        "asyncData",
                        "data",
                        "fetch",
                        "head",
                        "computed",
                        "watch",
                        "watchQuery",
                        "LIFECYCLE_HOOKS",
                        "ROUTER_GUARDS",
                        "methods",
                        ["template", "render"],
                        "renderError"
                    ]
                }
            ],
            "vue/singleline-html-element-content-newline": [
                "error",
                {
                    ignoreWhenNoAttributes: true,
                    ignoreWhenEmpty: true,
                    ignores: ["pre", "textarea", "h1", "h2", "h3", "h4", "h5", ...INLINE_ELEMENTS]
                }
            ]
        }
    }
];
