module.exports = {
  root: true,
  parserOptions: {
    sourceType: "module",
    ecmaVersion: 2020,
  },
  env: {
    browser: true,
  },
  rules: {
    "indent": ["warn", 2],
    //行末分号
    // "semi": ["warn", "always"],
    "arrow-parens": 0
  }
};
