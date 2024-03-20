// https://redux-toolkit.js.org/usage/migrating-rtk-2
import { createSlice } from '@reduxjs/toolkit';
import { fetchPokemonAsyncThunk } from './pokemonSlice';

type LoadingStatus = 'idle' | 'pending' | 'succeeded' | 'failed';

const globalUiSlice = createSlice({
  name: 'globalUi',
  initialState: {
    isLoading: false,
    loadingStatus: 'idle' as LoadingStatus,
  },
  selectors: {
    selectIsLoading: state => state.isLoading,
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addMatcher(
        action => [fetchPokemonAsyncThunk.pending].includes(action.type),
        state => {
          if (state.loadingStatus === 'idle') {
            state.loadingStatus = 'pending';
          }
        },
      )
      .addMatcher(
        action => [fetchPokemonAsyncThunk.fulfilled].includes(action.type),
        state => {
          state.loadingStatus = 'idle';
        },
      )
      .addMatcher(
        action => [fetchPokemonAsyncThunk.rejected].includes(action.type),
        state => {
          state.loadingStatus = 'idle';
        },
      );
  },
});

export const { selectIsLoading } = globalUiSlice.selectors;

export default globalUiSlice.reducer;
