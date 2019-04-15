module.exports = {
    extends: ["hive", "plugin:vue/essential", "plugin:vue/recommended"],
    plugins: ["vue"],
    rules: {
        "vue/html-indent": ["error", 4],
        "vue/v-on-style": ["error", "longform"],
        "vue/v-bind-style": ["error", "longform"],
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
        ]
    }
};
