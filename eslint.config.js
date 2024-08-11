const eslintConfigPrettier = require("eslint-config-prettier");
const jest = require("eslint-plugin-jest");

module.exports = [
  //...require('@eslint/js').configs.recommended,
  {
    files: ["test/**"],
    ...jest.configs["flat/recommended"],
    rules: {
      ...jest.configs["flat/recommended"].rules,
      "jest/prefer-expect-assertions": "off",
    },
  },
  eslintConfigPrettier,
];
