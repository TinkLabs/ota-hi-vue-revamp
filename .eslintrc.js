module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: ['airbnb-base', 'plugin:vue/recommended'],
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-alert": process.env.NODE_ENV === "production" ? "error" : "off",
    //全局化require
    "global-require": 0,
    //允许require中使用数组，在vue声明路由中使用到
    "import/no-dynamic-require": 0,
    //强制使用单引号
    quotes: ["error", "single"],
    //强制不使用分号结尾
    semi: ["error", "never"]
  },
}
