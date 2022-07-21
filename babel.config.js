module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./'],
        alias: {
          '@component': './src/components',
          '@nav': './src/navigation',
          '@redux': './src/redux',
          '@utils': './src/utils',
          '@screen': './src/screens',
          '@asset': './src/assets',
        },
      },
    ],
  ],
};
