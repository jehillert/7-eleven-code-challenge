import { TextStyle } from 'react-native';

const fontWeight: Record<string, TextStyle['fontWeight']> = {
  light: '300',
  regular: '400',
  medium: '500',
  mediumBold: '600',
  bold: '700',
};

const typographyBase: TextStyle = {
  fontFamily: 'Roboto-Regular',
  fontWeight: fontWeight.medium,
  textAlignVertical: 'center',
  letterSpacing: 0,
};

const typographyObj = {
  displayLarge: {
    ...typographyBase,
    lineHeight: 64,
    fontSize: 57,
  },
  displayMedium: {
    ...typographyBase,
    lineHeight: 52,
    fontSize: 45,
  },
  displaySmall: {
    ...typographyBase,
    lineHeight: 44,
    fontSize: 36,
  },
  headlineLarge: {
    ...typographyBase,
    lineHeight: 40,
    fontSize: 32,
  },
  headlineMedium: {
    ...typographyBase,
    lineHeight: 36,
    fontSize: 28,
  },
  headlineSmall: {
    ...typographyBase,
    lineHeight: 32,
    fontSize: 24,
  },
  titleLarge: {
    ...typographyBase,
    lineHeight: 28,
    fontSize: 22,
  },
  titleMedium: {
    ...typographyBase,
    letterSpacing: 0.15,
    fontWeight: fontWeight.medium,
    lineHeight: 24,
    fontSize: 16,
  },
  titleSmall: {
    ...typographyBase,
    letterSpacing: 0.1,
    fontWeight: fontWeight.medium,
    lineHeight: 20,
    fontSize: 14,
  },
  titleExSmall: {
    ...typographyBase,
    letterSpacing: 0.05,
    fontWeight: fontWeight.medium,
    lineHeight: 16,
    fontSize: 12,
  },
  labelLarge: {
    ...typographyBase,
    letterSpacing: 0.1,
    fontWeight: fontWeight.medium,
    lineHeight: 20,
    fontSize: 14,
  },
  labelMedium: {
    ...typographyBase,
    letterSpacing: 0.5,
    fontWeight: fontWeight.medium,
    lineHeight: 16,
    fontSize: 12,
  },
  labelSmall: {
    ...typographyBase,
    letterSpacing: 0.5,
    fontWeight: fontWeight.medium,
    lineHeight: 16,
    fontSize: 11,
  },
  bodyLarge: {
    ...typographyBase,
    letterSpacing: 0.15,
    lineHeight: 24,
    fontSize: 16,
  },
  bodyMedium: {
    ...typographyBase,
    fontWeight: fontWeight.light,
    letterSpacing: 0.25,
    lineHeight: 20,
    fontSize: 14,
  },
  bodySmall: {
    ...typographyBase,
    letterSpacing: 0.4,
    lineHeight: 16,
    fontSize: 12,
    fontWeight: fontWeight.light,
  },
  bodyExSmall: {
    ...typographyBase,
    letterSpacing: 0.4,
    lineHeight: 13,
    fontSize: 10,
    fontWeight: fontWeight.light,
  },
  badge: {
    ...typographyBase,
    letterSpacing: 0.5,
    fontWeight: fontWeight.bold,
    lineHeight: 13.2,
    fontSize: 10,
  },
};

export { fontWeight, typographyBase, typographyObj };
