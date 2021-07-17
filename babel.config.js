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
          '@libs': '../src/libs',
          '@repositories': '../src/repositories',
        },
      },
    ],
  ],
  ignore: ['**/*.spec.ts'],
};
