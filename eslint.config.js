const jest = require('eslint-plugin-jest');

module.exports = [
  {
    files: [
      /* glob matching your test files */
    ],
    ...jest.configs['flat/recommended'],
  },
];