/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testPathIgnorePatterns: ['node_modules'],
  transformIgnorePatterns: ['node_modules'],
  rootDir: './',
  moduleNameMapper: {
    '@JavaScript/(.*)$': '<rootDir>/code/JavaScript/$1'
  }
}
