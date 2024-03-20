import { StyleSheet, TextStyle } from 'react-native';
import { DefaultTheme } from 'styled-components/native';
import { baseTypography, typographyObj } from '.';
import { staticDimensions } from '../constants';
import { shadowCss } from './shadow-styles';

type Colors = typeof lightColors;

type IconSize = 'small' | 'medium-small' | 'medium' | 'large';

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

const lightColors = {
  backgroundColor: '#d1d1d1',
};

const darkColors: Colors = {
  backgroundColor: '#434343',
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
  baseTypography: baseTypography,
  spacing,
  typography: typographyObj,
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

export type { Colors, IconSize };

export { darkTheme, dimensions, lightTheme };

export default theme;
