import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Appearance } from 'react-native';
import { RootState } from '../../store/store';

type ThemeId = 'light' | 'dark' | 'system';

const settingsSlice = createSlice({
  name: 'settings',
  initialState: {
    themeId: 'system' as ThemeId,
  },
  reducers: {
    setThemeId(state, { payload: themeId }: PayloadAction<ThemeId>) {
      state.themeId = themeId;
    },
    toggleTheme(state) {
      const systemColorScheme = Appearance.getColorScheme() ?? 'light';
      const currentTheme =
        state.themeId === 'system' ? systemColorScheme : state.themeId;
      state.themeId = currentTheme === 'light' ? 'dark' : 'light';
    },
  },
  selectors: {
    selectThemeId: state => state.themeId,
  },
});

const selectTheme = (state: RootState) => {
  const themeId = state.settings.themeId;
  const colorScheme = Appearance?.getColorScheme() ?? 'light';
  return themeId === 'system' ? colorScheme : themeId;
};

export { selectTheme };
export type { ThemeId };
export const { setThemeId, toggleTheme } = settingsSlice.actions;
export const { selectThemeId } = settingsSlice.selectors;
export default settingsSlice.reducer;
