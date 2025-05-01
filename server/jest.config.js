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
          tsConfig: 'tsconfig.json',
        },
      ],
      '^.+\\.tsx?$': [
        'ts-jest',
        {},
      ],
    },
  }