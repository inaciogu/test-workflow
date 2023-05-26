export default {
  moduleFileExtensions: ['js'],
  transform: {
    '^.+\\.js$': 'babel-jest',
  },
  testMatch: ['**/*.spec.js'],
  testEnvironment: 'node',
};
