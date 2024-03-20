import { StatusBarStyle } from 'react-native';
import { theme as themes } from '.';
import { selectTheme, useAppSelector } from '../store';

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
