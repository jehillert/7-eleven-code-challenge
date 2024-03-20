import {
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
  nanoid,
  PayloadAction,
} from '@reduxjs/toolkit';
import { PokemonBaseEntity, PokemonEntity, PokemonListItem } from '.';
import { api } from '../../api';

const pokemonAdapter = createEntityAdapter<PokemonEntity>({});

const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState: pokemonAdapter.getInitialState({
    activePokemonId: '',
  }),
  reducers: {
    addManyPokemon: pokemonAdapter.addMany,
    setActivePokemonId(state, { payload }: PayloadAction<string>) {
      state.activePokemonId = payload;
    },
    incrementCart(state, { payload }: PayloadAction<string>) {
      state.entities[payload].cartCount += 1;
    },
    decrementCart(state, { payload }: PayloadAction<string>) {
      state.entities[payload].cartCount -= 1;
    },
    removeFromCart(state, { payload }: PayloadAction<string>) {
      state.entities[payload].cartCount = 0;
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

    const pokemonList: PokemonEntity[] = promiseAllResults.map(
      (result, index) => {
        let pokemon: PokemonBaseEntity = pokemonBaseList[index];
        const status = result.status;
        const isFulfilled = status === 'fulfilled';

        return {
          ...pokemon,
          cartCount: 0,
          id: nanoid(),
          imageUrl: isFulfilled ? result.value.sprites.front_default : '',
          error: !isFulfilled ? (result.reason as string) : '',
        };
      },
    );

    return pokemonList;
  },
);

export const {
  addManyPokemon,
  setActivePokemonId,
  incrementCart,
  decrementCart,
  removeFromCart,
} = pokemonSlice.actions;

export const { selectActivePokemonId } = pokemonSlice.selectors;

export { fetchPokemonAsyncThunk, pokemonAdapter };

export default pokemonSlice.reducer;
