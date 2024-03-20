// NOTE - MMKV Store Shareable b/n Apps: https://github.com/mrousavy/react-native-mmkv#app-groups.
import { combineReducers } from '@reduxjs/toolkit';
import { globalUiReducer, pokemonReducer, settingsReducer } from './slices';

const rootReducer = combineReducers({
  globalUi: globalUiReducer,
  pokemon: pokemonReducer,
  settings: settingsReducer,
});

export { rootReducer };
