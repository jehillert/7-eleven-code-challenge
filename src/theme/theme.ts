import { StyleSheet, TextStyle } from 'react-native';
import { DefaultTheme } from 'styled-components/native';
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

const getIconSize = (size: IconSize = 'medium') =>
  size === 'small'
    ? dimensions.iconSmall
    : size === 'medium'
    ? dimensions.iconMedium
    : size === 'medium-small'
    ? dimensions.iconMedSmall
    : dimensions.iconLarge;

const backgroundLight = '#eaecf5';
const backgroundDark = '#0a0a0a';
const cardDark = '#2a2a2a'; //RNLightTheme.card
const white = '#ffffff';
const black = '#000000';
const transparent = '#ffffff00';
const richTBDefBgColor = '#71787F';

const grey = {
  50: '#fafafa',
  100: '#f5f5f5',
  200: '#eeeeee',
  300: '#e0e0e0',
  400: '#bdbdbd',
  500: '#9e9e9e',
  600: '#757575',
  700: '#616161',
  800: '#424242',
  900: '#212121',
};

const RNLightTheme = {
  accentMajor: '#2d86d4',
  accentMinor: '#e0f2ff',
  accentDisabled: '#b2b2b2',
  primary: '#166daf',
  background: '#f2f2f2',
  card: '#ffffff',
  text: '#1c1c1e',
  border: '#d8d8d8',
  notification: '#ff3b30',
  textSecondary: '#929292',
  keyboardBgColor: '#363636',
};

const RNDarkTheme = {
  accentMajor: '#2d86d4',
  accentMinor: '#344357',
  accentDisabled: '#b2b2b2',
  primary: '#044789',
  background: '#010101',
  card: '#121212',
  text: '#e5e5e7',
  border: '#57575a',
  notification: '#ff453a',
  textSecondary: '#d6d6d6',
  keyboardBgColor: '#363636',
};

const input = {
  text: RNLightTheme.text,
  placeholder: RNLightTheme.textSecondary,
  border: RNLightTheme.accentMajor,
  background: '#E1E1E1',
};

const commonColors = {
  actionsText: '#ffff0b',
  actionsBackdrop: '#000000ac',
  backdrop: '#000000ac',
  actionDelete: '#c2202b',
  actionRename: '#f58032',
  backgroundDisabled: '#929292',
  onError: '#d32f2f',
  searchbarBg: '#383838',
  transparent,
  white,
  grey,
};

const surface1 = '#272a2c';
const surface2 = '#9aa3ad';
const surface3 = '#c2cad3';
const onSurface1 = RNDarkTheme.text;
const onSurface2 = '#d3deeb';
const onSurface3 = RNLightTheme.text;

const toolbarConfig = {
  light: {
    unselectedItemBackground: backgroundLight,
    selectedListBackground: '#a4aab1',
    selectedItemBackground: '#efefef',
    iconColor: richTBDefBgColor,
  },
  dark: {
    selectedItemBackground: '#191d20',
    selectedListBackground: RNDarkTheme.background,
    unselectedItemBackground: '#3c4044',
    iconColor: richTBDefBgColor,
  },
};

const sharing = {
  light: {
    itemBackground: surface3,
    bgComment: RNLightTheme.background,
  },
  dark: {
    itemBackground: surface1,
    bgComment: surface1,
  },
  spacing: {
    paddingVertical: 8,
    rowGap: 3 * StyleSheet.hairlineWidth,
  },
};

const annotations = {
  colors: {
    light: {
      fgMarkup: RNLightTheme.text,
      fgComment: RNLightTheme.textSecondary,
      backgroundColor: surface3,
      documentBgColor: surface1,
      listBackground: surface3,
      bgComment: RNLightTheme.background,
      border: grey[500],
    },
    dark: {
      fgMarkup: RNDarkTheme.text,
      fgComment: RNDarkTheme.textSecondary,
      backgroundColor: surface1,
      documentBgColor: surface3,
      listBackground: surface1,
      bgComment: RNDarkTheme.background,
      border: grey[500],
    },
  },
  spacing: {
    paddingVertical: 8,
    rowGap: 3 * StyleSheet.hairlineWidth,
  },
};

const spacing = {
  hairlineWidth: StyleSheet.hairlineWidth,
  listGap1: 3 * StyleSheet.hairlineWidth,
  listGap2: 6 * StyleSheet.hairlineWidth,
  pagingBar: 16,
  annotations: annotations.spacing,
  sharing: sharing.spacing,
};

const lightColors = {
  ...commonColors,
  /** sub-themes */
  annotations: annotations.colors.light,
  sharing: sharing.light,
  toolbarConfig: toolbarConfig.light,
  /** other */
  handlebar: RNLightTheme.text,
  surface1,
  surface2,
  surface3,
  surfaceContrast: black,
  onSurface1,
  onSurface2,
  onSurface3,
  accentMajor: RNLightTheme.accentMajor,
  accentMinor: RNLightTheme.accentMinor,
  accentDisabled: RNLightTheme.accentDisabled,
  actionColumn: backgroundLight,
  background: backgroundLight,
  backgroundDefault: RNLightTheme.background, // backgroundMenu: '#445e91', see android app
  backgroundSideSearch: RNLightTheme.background,
  border: RNLightTheme.border,
  card: RNLightTheme.card,
  drawerBackground: white,
  error: '#410002',
  iconPrimary: '#282828',
  iconDisabled: '#a4a4a4',
  input,
  listVariant: '#00000039',
  menuBackground: backgroundLight,
  menuSelected: '#eaecf580',
  menuText: RNLightTheme.text,
  modalBackground: surface2,
  notification: RNLightTheme.notification,
  onPrimary: '#8a8a88',
  onSecondary: '#282828',
  primary: RNLightTheme.primary,
  primaryContainer: 'white',
  screenHeaderDefault: backgroundLight,
  screenHeaderVariation: backgroundLight,
  screenFooter: '#232323',
  secondaryContainer: '#d8d8d8',
  statusBar: backgroundLight,
  richBackground: backgroundLight,
  richBarBackground: '#efefef',
  richBarBorder: '#efefef',
  text: RNLightTheme.text,
  textContrast: RNDarkTheme.text,
  textDisabled: '#757373',
  textSecondary: RNLightTheme.textSecondary,
  textGroupBody: RNLightTheme.text,
  textGroupFn: RNLightTheme.text,
  webViewBgColor: white,
  webViewFgColor: RNLightTheme.text,
  elevation: {
    level0: transparent,
    level1: RNLightTheme.background,
    level2: '#363536',
    level3: '#f0e7f6',
    level4: '#efe5f5',
    level5: '#ece2f3',
  },
};

const darkColors: Colors = {
  ...commonColors,
  /** sub-themes */
  annotations: annotations.colors.dark,
  sharing: sharing.dark,
  toolbarConfig: toolbarConfig.dark,
  /** other */
  handlebar: RNDarkTheme.text,
  surface1: surface3,
  surface2: surface2,
  surface3: surface1,
  surfaceContrast: white,
  onSurface1: onSurface3,
  onSurface2: onSurface2,
  onSurface3: onSurface1,
  accentMajor: RNDarkTheme.accentMajor,
  accentMinor: RNDarkTheme.accentMinor,
  accentDisabled: RNDarkTheme.accentDisabled,
  actionColumn: RNDarkTheme.background,
  background: backgroundDark,
  backgroundDefault: RNDarkTheme.background,
  backgroundSideSearch: RNDarkTheme.background,
  border: RNDarkTheme.border,
  card: cardDark,
  drawerBackground: '#3c4044',
  error: '#ffb4ab',
  iconPrimary: white,
  iconDisabled: '#5c5c5c',
  input,
  listVariant: '#e5e5e5',
  menuBackground: backgroundDark,
  menuSelected: '#0a0a0a80',
  menuText: RNDarkTheme.text,
  notification: RNDarkTheme.notification,
  onPrimary: white,
  onSecondary: '#e5e5e5',
  modalBackground: '#616161',
  primary: RNDarkTheme.primary,
  primaryContainer: '#2c3234',
  screenHeaderDefault: backgroundDark,
  screenHeaderVariation: '#383838',
  screenFooter: '#383838',
  secondaryContainer: '#616161',
  statusBar: backgroundDark,
  richBackground: grey[900],
  richBarBackground: '#191d20',
  richBarBorder: '#696969',
  text: RNDarkTheme.text,
  textContrast: RNLightTheme.text,
  textDisabled: '#a8a7a7',
  textSecondary: RNDarkTheme.textSecondary,
  textGroupBody: RNDarkTheme.text,
  textGroupFn: RNDarkTheme.text,
  webViewBgColor: '#121212',
  webViewFgColor: RNDarkTheme.text,
  elevation: {
    level0: transparent,
    level1: RNDarkTheme.background,
    level2: '#2c2830',
    level3: '#322c37',
    level4: '#342e39',
    level5: '#38313e',
  },
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

const baseTypography: TextStyle = {
  fontFamily: 'Roboto-Regular',
  fontWeight: fontWeight.medium,
  textAlignVertical: 'center',
  letterSpacing: 0,
};

const typography = {
  displayLarge: {
    ...baseTypography,
    lineHeight: 64,
    fontSize: 57,
  },
  displayMedium: {
    ...baseTypography,
    lineHeight: 52,
    fontSize: 45,
  },
  displaySmall: {
    ...baseTypography,
    lineHeight: 44,
    fontSize: 36,
  },
  headlineLarge: {
    ...baseTypography,
    lineHeight: 40,
    fontSize: 32,
  },
  headlineMedium: {
    ...baseTypography,
    lineHeight: 36,
    fontSize: 28,
  },
  headlineSmall: {
    ...baseTypography,
    lineHeight: 32,
    fontSize: 24,
  },
  titleLarge: {
    ...baseTypography,
    lineHeight: 28,
    fontSize: 22,
  },
  titleMedium: {
    ...baseTypography,
    letterSpacing: 0.15,
    fontWeight: fontWeight.medium,
    lineHeight: 24,
    fontSize: 16,
  },
  titleSmall: {
    ...baseTypography,
    letterSpacing: 0.1,
    fontWeight: fontWeight.medium,
    lineHeight: 20,
    fontSize: 14,
  },
  titleExSmall: {
    ...baseTypography,
    letterSpacing: 0.05,
    fontWeight: fontWeight.medium,
    lineHeight: 16,
    fontSize: 12,
  },
  labelLarge: {
    ...baseTypography,
    letterSpacing: 0.1,
    fontWeight: fontWeight.medium,
    lineHeight: 20,
    fontSize: 14,
  },
  labelMedium: {
    ...baseTypography,
    letterSpacing: 0.5,
    fontWeight: fontWeight.medium,
    lineHeight: 16,
    fontSize: 12,
  },
  labelSmall: {
    ...baseTypography,
    letterSpacing: 0.5,
    fontWeight: fontWeight.medium,
    lineHeight: 16,
    fontSize: 11,
  },
  bodyLarge: {
    ...baseTypography,
    letterSpacing: 0.15,
    lineHeight: 24,
    fontSize: 16,
  },
  bodyMedium: {
    ...baseTypography,
    letterSpacing: 0.25,
    lineHeight: 20,
    fontSize: 14,
  },
  bodySmall: {
    ...baseTypography,
    letterSpacing: 0.4,
    lineHeight: 16,
    fontSize: 12,
    fontWeight: fontWeight.light,
  },
  bodyExSmall: {
    ...baseTypography,
    letterSpacing: 0.4,
    lineHeight: 13,
    fontSize: 10,
    fontWeight: fontWeight.light,
  },
  badge: {
    ...baseTypography,
    letterSpacing: 0.5,
    fontWeight: fontWeight.bold,
    lineHeight: 13.2,
    fontSize: 10,
  },
};

/**
 * ❗Requirements for zIndex to work correctly:
 *   • Shared ancestor component.
 *   • Different z-indexes
 *   • Different elevation (for android)
 * Otherwise items will push each other out of the way.
 * Or maybe you just didn't realize you hadn't specified them for both.
 * ❗Requirements for zIndex to work correctly:
 * • Shared ancestor component.
 * • Different z-indexes
 * • Different elevation (for android)
 * ❗You do not need z-index to prevent keyboard pushing up items.
 * Instead, just set container height to windowHeight instead of using flex: 1.
 * But you need to get the outermost container for that modal, or screen, or drawer.
 * Intervening views do not seem to help.
 */
const zIndex = {
  bottomBar: 1002,
  drawer: 1001,
  loadingOverlay: 1002,
  modal: 1000,
  pagerDots: 101,
  pagerView: 102,
  positionerDefault: 10,
  palette: 50,
  stickyFooter: 50,
  stickyHeader: 0,
};

const elevation = {
  bottomBar: 6,
  drawer: 5,
  loadingOverlay: 7,
  modal: 4,
  pagerDots: 2,
  pagerView: 3,
  positionerDefault: 1,
  palette: 2,
  stickyFooter: 2,
  stickyHeader: 0,
};

const restOfTheme = {
  absoluteFill,
  animation,
  dimensions,
  fontWeight,
  shadow: shadowCss,
  baseTypography,
  spacing,
  typography,
  elevation,
  zIndex,
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

export { darkTheme, dimensions, getIconSize, lightTheme, typography };

export default theme;
