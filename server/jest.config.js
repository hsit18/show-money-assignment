/** @type {import('jest').Config} */

module.exports = {
    testEnvironment: 'node',
    moduleFileExtensions: [
      'js',
      'ts',
    ],
    testMatch: [
      '**/tests/**/*.test.(ts)',
    ],
    transform: {
      '^.+\\.ts?$': [
        'ts-jest',
        {
          babel: true,
          tsconfig: 'tsconfig.json',
        },
      ],
      '^.+\\.tsx?$': [
        'ts-jest',
        {},
      ],
    },
  }