const INLINE_ELEMENTS = require("eslint-plugin-vue/lib/utils/inline-non-void-elements.json");

module.exports = {
    extends: ["hive", "plugin:vue/essential", "plugin:vue/recommended"],
    plugins: ["vue"],
    parserOptions: {
        parser: "@babel/eslint-parser"
    },
    rules: {
        "vue/component-tags-order": "off",
        "vue/html-indent": ["error", 4],
        "vue/component-definition-name-casing": ["error", "kebab-case"],
        "vue/v-on-style": ["error", "longform"],
        "vue/v-bind-style": ["error", "longform"],
        "vue/v-slot-style": ["error", {
            "atComponent": "v-slot",
            "default": "v-slot",
            "named": "longform",
        }],
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
        "vue/order-in-components": ["error", {
            "order": [
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
                "methods",
                "ROUTER_GUARDS",
                ["template", "render"],
                "renderError"
            ]
        }],
        "vue/singleline-html-element-content-newline": [
            "error",
            {
                ignoreWhenNoAttributes: true,
                ignoreWhenEmpty: true,
                ignores: ["pre", "textarea", "h1", "h2", "h3", "h4", "h5", ...INLINE_ELEMENTS]
            }
        ]
    }
};
