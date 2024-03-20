import { TextStyle } from 'react-native';

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

const typographyObj = {
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

export { baseTypography, fontWeight, typographyObj };
