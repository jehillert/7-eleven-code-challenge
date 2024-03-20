module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    ['babel-plugin-inline-import'],
    [
      'babel-plugin-styled-components',
      {
        pure: true,
      },
    ],
  ],
};
