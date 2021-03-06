module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current'
        }
      }
    ],
    '@babel/preset-typescript'
  ],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          '@config': './src/config',
          '@models': './src/models',
          '@controllers': './src/controllers',
          '@views': './src/views',
          '@interfaces': './src/interfaces',
          '@databaseManager': './src/databaseManager',
          '@types': './src/types',
          '@services': './src/services',
          '@utils': './src/utils',
          '@useCase': './src/useCase'
        }
      }
    ]
  ],
  ignore: ['**/*.spec.ts']
}
