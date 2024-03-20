import { typographyObj } from './typography-obj';

const typographyCss = {
  displayLarge: `
    line-height: ${typographyObj.displayLarge.lineHeight}px;
    font-size: ${typographyObj.displayLarge.fontSize}px;
  `,
  displayMedium: `
    line-height: ${typographyObj.displayMedium.lineHeight}px;
    font-size: ${typographyObj.displayMedium.fontSize}px;
  `,
  displaySmall: `
    line-height: ${typographyObj.displaySmall.lineHeight}px;
    font-size: ${typographyObj.displaySmall.fontSize}px;
  `,
  headlineLarge: `
    line-height: ${typographyObj.headlineLarge.lineHeight}px;
    font-size: ${typographyObj.headlineLarge.fontSize}px;
  `,
  headlineMedium: `
    line-height: ${typographyObj.headlineMedium.lineHeight}px;
    font-size: ${typographyObj.headlineMedium.fontSize}px;
  `,
  headlineSmall: `
    line-height: ${typographyObj.headlineSmall.lineHeight}px;
    font-size: ${typographyObj.headlineSmall.fontSize}px;
  `,
  titleLarge: `
    line-height: ${typographyObj.titleLarge.lineHeight}px;
    font-size: ${typographyObj.titleLarge.fontSize}px;
  `,
  titleMedium: `
    letter-spacing: ${typographyObj.titleMedium.letterSpacing}px;
    font-weight: ${typographyObj.titleMedium.fontWeight};
    line-height: ${typographyObj.titleMedium.lineHeight}px;
    font-size: ${typographyObj.titleMedium.fontSize}px;
  `,
  titleSmall: `
    letter-spacing: ${typographyObj.titleSmall.letterSpacing}px;
    line-height: ${typographyObj.titleSmall.lineHeight}px;
    font-size: ${typographyObj.titleSmall.fontSize}px;
    font-weight: ${typographyObj.titleSmall.fontWeight};
  `,
  titleExSmall: `
    letter-spacing: ${typographyObj.titleExSmall.letterSpacing}px;
    line-height: ${typographyObj.titleExSmall.lineHeight}px;
    font-size: ${typographyObj.titleExSmall.fontSize}px;
    font-weight: ${typographyObj.titleExSmall.fontWeight};
  `,
  labelLarge: `
    letter-spacing: ${typographyObj.labelLarge.letterSpacing}px;
    line-height: ${typographyObj.labelLarge.lineHeight}px;
    font-size: ${typographyObj.labelLarge.fontSize}px;
    font-weight: ${typographyObj.labelLarge.fontWeight};
  `,
  labelMedium: `
    letter-spacing: ${typographyObj.labelMedium.letterSpacing}px;
    line-height: ${typographyObj.labelMedium.lineHeight}px;
    font-size: ${typographyObj.labelMedium.fontSize}px;
    font-weight: ${typographyObj.labelMedium.fontWeight};
  `,
  labelSmall: `
    letter-spacing: ${typographyObj.labelSmall.letterSpacing}px;
    line-height: ${typographyObj.labelSmall.lineHeight}px;
    font-size: ${typographyObj.labelSmall.fontSize}px;
    font-weight: ${typographyObj.labelSmall.fontWeight};
  `,
  bodyLarge: `
    letter-spacing: ${typographyObj.bodyLarge.letterSpacing}px;
    font-size: ${typographyObj.bodyLarge.lineHeight}px;
    fontSize: hScale(16),
  `,
  bodyMedium: `
    letter-spacing: ${typographyObj.bodyMedium.letterSpacing}px;
    font-size: ${typographyObj.bodyMedium.lineHeight}px;
    fontSize: hScale(14),
  `,
  bodySmall: `
    letter-spacing: ${typographyObj.bodySmall.letterSpacing}px;
    line-height: ${typographyObj.bodySmall.lineHeight}px;
    font-size: ${typographyObj.bodySmall.fontSize}px;
    font-weight: ${typographyObj.bodySmall.fontWeight};
  `,
  badge: `
    letter-spacing: ${typographyObj.badge.letterSpacing}px;
    line-height: ${typographyObj.badge.lineHeight}px;
    font-size: ${typographyObj.badge.fontSize}px;
    font-weight: ${typographyObj.badge.fontWeight};
  `,
};

export default typographyCss;
