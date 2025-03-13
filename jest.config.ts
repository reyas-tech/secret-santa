module.exports = {
  __esModule: true,
  default: {
    preset: 'jest-preset-angular',
    setupFilesAfterEnv: [
      '<rootDir>/src/setup-jest.ts',
    ],
    testPathIgnorePatterns: [
      '<rootDir>/node_modules/',
      '<rootDir>/dist/',
    ],
    moduleNameMapper: {
      '^@app/(.*)$': '<rootDir>/src/app/$1',
    },
  },
  transform: {
    '^.+\\.tsx?$': [
      'ts-jest',
      {},
    ],
  },
}
