module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current',
        },
      },
    ],
    '@babel/preset-typescript',
  ],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          '@utils': '../src/utils',
          '@core': '../src/core',
          '@repositories': '../src/repositories',
        },
      },
    ],
  ],
  ignore: ['**/*.spec.ts'],
};
