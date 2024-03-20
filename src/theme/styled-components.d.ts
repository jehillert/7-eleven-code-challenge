// create styled-components.d.ts in your project source
// if it isn't being picked up, check tsconfig compilerOptions.types
import type { CSSProp } from 'styled-components';
import { lightTheme } from './theme';

type ThemeType = typeof lightTheme;

declare module 'styled-components/native' {
  export interface DefaultTheme extends ThemeType {}
}

declare module 'react' {
  interface Attributes {
    css?: CSSProp;
  }
}
