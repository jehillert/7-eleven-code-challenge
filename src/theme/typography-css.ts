import { typography } from './theme';

const cssTypography = {
  displayLarge: `
    line-height: ${typography.displayLarge.lineHeight}px;
    font-size: ${typography.displayLarge.fontSize}px;
  `,
  displayMedium: `
    line-height: ${typography.displayMedium.lineHeight}px;
    font-size: ${typography.displayMedium.fontSize}px;
  `,
  displaySmall: `
    line-height: ${typography.displaySmall.lineHeight}px;
    font-size: ${typography.displaySmall.fontSize}px;
  `,
  headlineLarge: `
    line-height: ${typography.headlineLarge.lineHeight}px;
    font-size: ${typography.headlineLarge.fontSize}px;
  `,
  headlineMedium: `
    line-height: ${typography.headlineMedium.lineHeight}px;
    font-size: ${typography.headlineMedium.fontSize}px;
  `,
  headlineSmall: `
    line-height: ${typography.headlineSmall.lineHeight}px;
    font-size: ${typography.headlineSmall.fontSize}px;
  `,
  titleLarge: `
    line-height: ${typography.titleLarge.lineHeight}px;
    font-size: ${typography.titleLarge.fontSize}px;
  `,
  titleMedium: `
    letter-spacing: ${typography.titleMedium.letterSpacing}px;
    font-weight: ${typography.titleMedium.fontWeight};
    line-height: ${typography.titleMedium.lineHeight}px;
    font-size: ${typography.titleMedium.fontSize}px;
  `,
  titleSmall: `
    letter-spacing: ${typography.titleSmall.letterSpacing}px;
    line-height: ${typography.titleSmall.lineHeight}px;
    font-size: ${typography.titleSmall.fontSize}px;
    font-weight: ${typography.titleSmall.fontWeight};
  `,
  titleExSmall: `
    letter-spacing: ${typography.titleExSmall.letterSpacing}px;
    line-height: ${typography.titleExSmall.lineHeight}px;
    font-size: ${typography.titleExSmall.fontSize}px;
    font-weight: ${typography.titleExSmall.fontWeight};
  `,
  labelLarge: `
    letter-spacing: ${typography.labelLarge.letterSpacing}px;
    line-height: ${typography.labelLarge.lineHeight}px;
    font-size: ${typography.labelLarge.fontSize}px;
    font-weight: ${typography.labelLarge.fontWeight};
  `,
  labelMedium: `
    letter-spacing: ${typography.labelMedium.letterSpacing}px;
    line-height: ${typography.labelMedium.lineHeight}px;
    font-size: ${typography.labelMedium.fontSize}px;
    font-weight: ${typography.labelMedium.fontWeight};
  `,
  labelSmall: `
    letter-spacing: ${typography.labelSmall.letterSpacing}px;
    line-height: ${typography.labelSmall.lineHeight}px;
    font-size: ${typography.labelSmall.fontSize}px;
    font-weight: ${typography.labelSmall.fontWeight};
  `,
  bodyLarge: `
    letter-spacing: ${typography.bodyLarge.letterSpacing}px;
    font-size: ${typography.bodyLarge.lineHeight}px;
    fontSize: hScale(16),
  `,
  bodyMedium: `
    letter-spacing: ${typography.bodyMedium.letterSpacing}px;
    font-size: ${typography.bodyMedium.lineHeight}px;
    fontSize: hScale(14),
  `,
  bodySmall: `
    letter-spacing: ${typography.bodySmall.letterSpacing}px;
    line-height: ${typography.bodySmall.lineHeight}px;
    font-size: ${typography.bodySmall.fontSize}px;
    font-weight: ${typography.bodySmall.fontWeight};
  `,
  badge: `
    letter-spacing: ${typography.badge.letterSpacing}px;
    line-height: ${typography.badge.lineHeight}px;
    font-size: ${typography.badge.fontSize}px;
    font-weight: ${typography.badge.fontWeight};
  `,
};

export default cssTypography;
