import {
  createEntityAdapter,
  createSlice,
  PayloadAction,
} from '@reduxjs/toolkit';
import { api } from '../../api';
import { AppThunk } from '../store';

type Pokemon = {
  name: string;
  url: string;
};

const pokemonAdapter = createEntityAdapter({
  selectId: (pokemon: Pokemon) => pokemon.name,
});

const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState: pokemonAdapter.getInitialState({ activePokemonId: '' }),
  reducers: {
    addManyPokemon: pokemonAdapter.addMany,
    setActivePokemonId(state, { payload }: PayloadAction<string>) {
      state.activePokemonId = payload;
    },
  },
  selectors: {
    selectActivePokemonId: state => state.activePokemonId,
    selectPokemon: state => state.entities,
  },
});

const fetchPokemonThunk = (): AppThunk => async (dispatch, getState) => {
  const resp = await api.fetchPokemon();
  const pokemonList: Pokemon[] = resp?.results ?? [];
  dispatch(addManyPokemon(pokemonList));
};

export const { addManyPokemon, setActivePokemonId } = pokemonSlice.actions;
export const { selectActivePokemonId } = pokemonSlice.selectors;
export { fetchPokemonThunk, pokemonAdapter };
export default pokemonSlice.reducer;
