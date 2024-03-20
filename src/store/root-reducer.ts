// NOTE - MMKV Store Shareable b/n Apps: https://github.com/mrousavy/react-native-mmkv#app-groups.
import { combineReducers } from '@reduxjs/toolkit';
import pokemonReducer from '../features/pokemon/pokemonSlice';
import settingsReducer from '../features/settings/settingsSlice';

const rootReducer = combineReducers({
  pokemon: pokemonReducer,
  settings: settingsReducer,
});

export { rootReducer };
