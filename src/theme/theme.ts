import { StyleSheet, TextStyle } from 'react-native';
import { DefaultTheme } from 'styled-components/native';
import { typographyBase, typographyObj } from '.';
import { staticDimensions } from '../constants';
import { shadowCss } from './shadow-styles';
import typographyCss from './typography-css';

type Colors = typeof lightColors;

const animation = {
  opacityDelta: 0.3,
};

const dimensions = {
  iconSmall: 16,
  iconMedSmall: 20,
  iconMedium: 28,
  iconLarge: 32,
  iconFab: 56,
  cardBorderRadius: 6,
  actionColumnWidth: 46,
  positioner: {
    offsetXDefault: 12,
    offsetYDefault: 12,
  },
  ...staticDimensions,
};

const spacing = {
  hairlineWidth: StyleSheet.hairlineWidth,
  listGap: 3 * StyleSheet.hairlineWidth,
};

const commonColors = {
  backdrop: '#000000ac',
  white: '#ffffff',
  black: '#000000',
  transparent: '#ffffff00',
};

const lightColors = {
  ...commonColors,
  background: '#d1d1d1',
  gridItemBackground: '#9e9d9d',
  incrementButton: '#454545',
  navHeader: '#eaecf5',
  onPrimary: '#8a8a88',
  statusBar: '#d1d1d1',
  text: '#1c1c1e',
  textDisabled: '#757373',
  textSecondary: '#929292',
};

const darkColors: Colors = {
  ...commonColors,
  background: '#434343',
  gridItemBackground: '#121111',
  incrementButton: '#747070',
  navHeader: '#0a0a0a',
  onPrimary: '#ffffff',
  statusBar: '#434343',
  text: '#e5e5e7',
  textDisabled: '#6c6a6a',
  textSecondary: '#d6d6d6',
};

const absoluteFill = `
  position: absolute;
  right: 0px;
  left: 0px;
  top: 0px;
  bottom: 0px;
`;

const fontWeight: Record<string, TextStyle['fontWeight']> = {
  light: '300',
  regular: '400',
  medium: '500',
  mediumBold: '600',
  bold: '700',
};

const restOfTheme = {
  absoluteFill,
  animation,
  dimensions,
  fontWeight,
  shadow: shadowCss,
  spacing,
  typographyBase,
  typographyObj,
  typography: typographyCss,
};

const lightTheme = {
  colors: lightColors,
  ...restOfTheme,
};

const darkTheme: DefaultTheme = {
  colors: darkColors,
  ...restOfTheme,
};

const theme = {
  light: lightTheme,
  dark: darkTheme,
};

export type { Colors };

export { darkTheme, dimensions, lightTheme };

export { theme };
