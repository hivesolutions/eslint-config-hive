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
                singleline: 3
            }
        ] 
    }
};
