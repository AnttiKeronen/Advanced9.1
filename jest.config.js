/** @type {import('ts-jest').JestConfigWithTsJest} */
export default {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '\\.(css|less|sass|scss)$': 'identity-obj-proxy'
  },
  reporters: [
    'default',
    ['jest-junit', { outputDirectory: './test-results', outputName: 'junit.xml' }]
  ],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest'
  }
};
