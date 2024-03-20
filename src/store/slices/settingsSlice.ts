import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Appearance } from 'react-native';
import { RootState } from '../store';

type ThemeSelection = 'light' | 'dark' | 'system';

const settingsSlice = createSlice({
  name: 'settings',
  initialState: {
    themeSelection: 'system' as ThemeSelection,
  },
  reducers: {
    setThemeSelection(
      state,
      { payload: themeSelection }: PayloadAction<ThemeSelection>,
    ) {
      state.themeSelection = themeSelection;
    },
    toggleTheme(state) {
      const systemColorScheme = Appearance.getColorScheme() ?? 'light';
      const currentTheme =
        state.themeSelection === 'system'
          ? systemColorScheme
          : state.themeSelection;
      state.themeSelection = currentTheme === 'light' ? 'dark' : 'light';
    },
  },
  selectors: {
    selectThemeSelection: state => state.themeSelection,
  },
});

const selectTheme = (state: RootState) => {
  const themeSelection = state.settings.themeSelection;
  const colorScheme = Appearance.getColorScheme() ?? 'light';
  return themeSelection === 'system' ? colorScheme : themeSelection;
};

export type { ThemeSelection };

export const { setThemeSelection, toggleTheme } = settingsSlice.actions;

export const { selectThemeSelection } = settingsSlice.selectors;

export { selectTheme };

export default settingsSlice.reducer;
