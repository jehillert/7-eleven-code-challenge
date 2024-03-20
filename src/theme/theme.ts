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
  iconMedium: 24,
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

const rad = (scalar: number) => scalar * 4;

const p = (scalar: number) => scalar * 8;

const m = (scalar: number) => scalar * 8;

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
  accent: '#379000',
  background1: '#ffffff',
  background2: '#838383',
  background3: '#696868',
  background: '#d1d1d1',
  // gridItemBackground: '#9e9d9d',
  buttonBackground: '#454444',
  navHeader: '#eaecf5',
  onPrimary: '#8a8a88',
  statusBar: '#d1d1d1',
  text: '#1c1c1e',
  textDisabled: '#757373',
  textSecondary: '#929292',
};

const darkColors: Colors = {
  ...commonColors,
  ...commonColors,
  accent: '#ffea00',
  background1: '#000000',
  background2: '#2a2a2aff',
  background3: '#6a6969ff',
  background: '#434343',
  buttonBackground: '#747070',
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
  p,
  m,
  rad,
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
