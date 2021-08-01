module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  roots: ['./src/'],
  modulePaths: ['src'],
  testMatch: ['**/?(*.)spec.ts'],
  clearMocks: true,
};
