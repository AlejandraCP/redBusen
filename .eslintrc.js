module.exports = {
  root: true,
  parser: "babel-eslint",
  parserOptions: {
    sourceType: "module"
  },
  extends: ["plugin:react/recommended", "standard", "eslint:recommended"],
  plugins: ["html"],
  rules: {
    "no-console": "off",
    "arrow-parens": 0,
    "generator-star-spacing": 0,
    "no-debugger": process.env.NODE_ENV === "production" ? 2 : 0,
    "no-undef": 2,
    "no-unused-vars": 2,
    "semi-spacing": 2,
    "no-extra-semi": 2,
    "no-unexpected-multiline": 2,
    quotes: [2, "single", "avoid-escape"],
    indent: [2, 2, { SwitchCase: 1 }]
  }
};
