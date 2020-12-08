module.exports = {
  presets: ['module:metro-react-native-babel-preset', 'module:react-native-dotenv'],
  plugins: [
    ['module-resolver', {
      'root': ['./src'],
      'alias': {
        'features': './src/features',
        'services': './src/services',
        'navigation': './src/navigation',
        'utils': './src/utils',
        'constants': './src/constants',
        'atoms': './src/components/atoms',
        'molecules': './src/components/molecules',
        'organisms': './src/components/organisms',
      }
    }]
  ],
};
