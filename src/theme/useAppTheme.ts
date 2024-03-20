import { StatusBarStyle } from 'react-native';
import { selectTheme, useAppSelector } from '../store';
import { theme as themes } from './theme';

const useAppTheme = () => {
  const theme = useAppSelector(selectTheme);
  const isDark = theme === 'dark';
  const barStyle: StatusBarStyle = isDark ? 'light-content' : 'dark-content';
  const appTheme = themes[theme];

  return {
    isDark,
    theme,
    appTheme,
    barStyle,
  };
};

export { useAppTheme };
