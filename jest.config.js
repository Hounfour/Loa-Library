module.exports = {
  moduleFileExtensions: ['js', 'json', 'vue', 'ts'],
  moduleNameMapper: {
    '^@vue/test-utils':
      '<rootDir>/node_modules/@vue/test-utils/dist/vue-test-utils.cjs.js',
  },
  preset: 'ts-jest',
  transform: {
    '^.+\\.vue$': '@vue/vue3-jest',
    '^.+\\.(js|jsx)$': 'babel-jest',
    '^.+\\.(ts|tsx)$': 'ts-jest', // Optional if you have TypeScript files
  },
  testEnvironment: 'jsdom',
  testMatch: [
    '**/__tests__/**/*.[jt]s?(x)', // Look for tests in __tests__ directories
    '**/?(*.)+(spec|test).[tj]s?(x)', // Look for .spec.js, .spec.ts, .test.js, or .test.ts files
  ],
  testPathIgnorePatterns: ['<rootDir>/node_modules/'], // Ignore node_modules
};
