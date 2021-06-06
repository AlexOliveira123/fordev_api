export default {
  // clearMocks: true,
  // collectCoverage: true,
  roots: [
    '<rootDir>/src'
  ],
  coverageDirectory: 'coverage',
  // coverageProvider: 'v8',
  collectCoverageFrom: ['<rootDir>/src/**/*.ts'],
  testEnvironment: 'node',
  transform: {
    '.+\\.ts$': 'ts-jest'
  }
}
