module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['@testing-library/jest-dom', './jest.setup.ts'],
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
    '^@zydon/common-csr(.*)$':
      '<rootDir>/node_modules/@zydon/common-csr/dist$1',
    '^@zydon/common(.*)$': '<rootDir>/node_modules/@zydon/common/dist$1',
    '^@zydon/auth(.*)$': '<rootDir>/node_modules/@zydon/auth/dist$1',
    '@zydon/common/theme/ThemeProvider':
      '<rootDir>/src/tests/__mocks__/@zydon/common/theme/ThemeProvider.tsx',
  },
  testMatch: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[jt]s?(x)'],
  transform: {
    '^.+\\.(ts|tsx)$': [
      'ts-jest',
      {
        tsconfig: 'tsconfig.json',
        isolatedModules: true,
        useESM: true,
      },
    ],
    '^.+\\.(js|jsx|mjs)$': [
      'babel-jest',
      {
        presets: [
          ['@babel/preset-env', { targets: { node: 'current' } }],
          '@babel/preset-react',
        ],
      },
    ],
  },
  transformIgnorePatterns: [
    '/node_modules/(?!(.*@zydon/(common|common-csr|auth).*)).+\\.(js|jsx|ts|tsx)$',
  ],
  moduleDirectories: ['node_modules', 'src'],
  collectCoverage: true,
  coverageDirectory: 'coverage',
  coverageReporters: ['text', 'lcov', 'json', 'json-summary'],
  coverageThreshold: {
    global: {
      branches: 0.01,
      functions: 0.01,
      lines: 0.01,
      statements: 0.01,
    },
  },
  collectCoverageFrom: [
    'src/**/*.{ts,tsx}',
    '!src/**/*.{spec,test}.{ts,tsx}',
    '!src/**/*.stories.{ts,tsx}',
    '!src/**/*.style.{ts,tsx}',
    '!src/**/index.ts',
    '!src/types/**/*',
    '!src/**/*.d.ts',
    '!src/assets/**/*',
  ],
  coveragePathIgnorePatterns: [
    'node_modules',
    'dist',
    'coverage',
    'public',
    'src/configs',
    'src/models',
    'src/types',
  ],
  extensionsToTreatAsEsm: ['.ts', '.tsx'],
};
