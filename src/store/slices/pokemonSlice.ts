import {
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
  PayloadAction,
} from '@reduxjs/toolkit';
import { api } from '../../api';
import { PokemonEntity, PokemonListItem } from '../../types';

type LoadingState = 'idle' | 'pending' | 'succeeded' | 'failed';

const pokemonAdapter = createEntityAdapter({
  selectId: (pokemon: PokemonListItem) => pokemon.name,
});

const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState: pokemonAdapter.getInitialState({
    activePokemonId: '',
    loading: 'idle' as LoadingState,
  }),
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
  extraReducers: builder => {
    builder.addCase(fetchPokemonAsyncThunk.fulfilled, (state, action) => {
      pokemonAdapter.addMany(state, action.payload);
    });
  },
});

const fetchPokemonAsyncThunk = createAsyncThunk(
  'fetchPokemonAsyncThunk',
  async (limit?: number) => {
    const res = await api.fetchPokemonList(limit);
    const pokemonBaseList: PokemonListItem[] = res.results ?? [];

    const pokemonPromises = pokemonBaseList.map(result => {
      return api.fetchPokemonInfo(result);
    });

    const promiseAllResults = await Promise.allSettled(pokemonPromises);

    const pokemonList = promiseAllResults.map((result, index) => {
      let pokemon: PokemonEntity = pokemonBaseList[index];
      const status = result.status;
      if (status === 'fulfilled') {
        pokemon.imageUrl = result.value.sprites.front_default;
      }

      if (status === 'rejected') {
        pokemon.error = result.reason;
      }
      return pokemon;
    });

    return pokemonList;
  },
);

export const { addManyPokemon, setActivePokemonId } = pokemonSlice.actions;

export const { selectActivePokemonId } = pokemonSlice.selectors;

export { fetchPokemonAsyncThunk, pokemonAdapter };

export default pokemonSlice.reducer;
