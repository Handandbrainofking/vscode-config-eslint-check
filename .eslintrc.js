module.exports = {
    root: true, // 此项是用来告诉eslint找当前配置文件不能往父级查找

    env: {
        node: true
    },
    extends: [
        "eslint:recommended", "prettier"
    ],
    "plugins": ["prettier"],
    rules: {
        "prettier/prettier": "error",
        "no-console": process.env.NODE_ENV === "production"
            ? "error"
            : "off",
        "no-debugger": process.env.NODE_ENV === "production"
            ? "error"
            : "off",
        "comma-dangle": [
            "error", "only-multiline"
        ],
        quotes: ["error", "single"],

    },
    "parser": "babel-eslint",

    // 此项是用来指定javaScript语言类型和风格，sourceType用来指定js导入的方式，默认是script，此处设置为module，指某块导入方式
    parserOptions: {
        parser: "babel-eslint" // 此项是用来指定eslint解析器的，解析器必须符合规则，babel-eslint解析器是对babel解析器的包装使其与ESLint解析
    }
};
