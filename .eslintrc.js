const RULES = {
  OFF: "off",
  ERROR: "error",
  WARN: "warn",
};

module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  extends: ["airbnb-base", "prettier"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["@typescript-eslint"],
  rules: {
    "import/no-unresolved": RULES.OFF,
    "no-console": RULES.OFF,
  },
};
