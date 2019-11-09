module.exports = {
    env: {
        browser: true,
        es6: true,
        node: true
    },
    extends: ["plugin:@typescript-eslint/eslint-recommended", "plugin:@typescript-eslint/recommended", "prettier"],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        project: "tsconfig.json",
        sourceType: "module"
    },
    plugins: ["@typescript-eslint", "@typescript-eslint/tslint"],
    rules: {}
};
