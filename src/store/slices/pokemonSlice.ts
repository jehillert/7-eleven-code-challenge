import {
  createEntityAdapter,
  createSlice,
  PayloadAction,
} from '@reduxjs/toolkit';

interface Pokemon {
  id: string;
  name: string;
}

const commentsAdapter = createEntityAdapter<Pokemon>();

const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState: {
    activePokemon: '',
  },
  reducers: {
    setActivePokemon(state, { payload }: PayloadAction<string>) {
      state.activePokemon = payload;
    },
  },
  selectors: {
    selectActivePokemon: state => state.activePokemon,
  },
  // extraReducers: builder => {
  //   builder.addMatcher(
  //     action => [transformDocAsyncThunk.rejected].includes(action.type),
  //     state => {
  //       state.requestStatus = 'idle';
  //     },
  //   );
  // },
});

export const { setActivePokemon } = pokemonSlice.actions;

export const { selectActivePokemon } = pokemonSlice.selectors;

export default pokemonSlice.reducer;
