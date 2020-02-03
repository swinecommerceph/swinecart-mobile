module.exports = {
  presets: ['module:metro-react-native-babel-preset', 'module:react-native-dotenv'],
  plugins: [
    ['module-resolver', {
      'root': ['./src'],
      'alias': {
        'features': './src/features',
        'services': './src/services',
        'shared': './src/shared',
        'navigation': './src/navigation',
        'utils': './src/utils',
        'constants': './src/constants',
        'components': './src/components',
        'validationSchemas': './src/validationSchemas',
      }
    }]
  ],
};
