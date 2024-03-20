import {
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
  nanoid,
  PayloadAction,
  SerializedError,
} from '@reduxjs/toolkit';
import { PokemonBaseEntity, PokemonEntity, PokemonListItem } from '.';
import { api } from '../../api';

type LoadingStatus = 'idle' | 'pending' | 'succeeded' | 'failed';

const pokemonAdapter = createEntityAdapter<PokemonEntity>({});

const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState: pokemonAdapter.getInitialState({
    loading: 'idle' as LoadingStatus,
    currentRequestId: undefined as string | undefined,
    requestError: null as SerializedError | null,
  }),
  reducers: {
    addManyPokemon: pokemonAdapter.addMany,
    incrementCart(state, { payload }: PayloadAction<string>) {
      state.entities[payload].cartCount += 1;
    },
    decrementCart(state, { payload }: PayloadAction<string>) {
      state.entities[payload].cartCount -= 1;
    },
    removeFromCart(state, { payload }: PayloadAction<string>) {
      state.entities[payload].cartCount = 0;
    },
    setLoadingState(state, { payload }: PayloadAction<LoadingStatus>) {
      state.loading = payload;
    },
  },
  selectors: {
    selectPokemon: state => state.entities,
  },
  extraReducers: builder => {
    builder
      .addCase(fetchPokemonAsyncThunk.pending, (state, action) => {
        if (state.loading === 'idle') {
          state.loading = 'pending';
          state.currentRequestId = action.meta.requestId;
        }
      })
      .addCase(fetchPokemonAsyncThunk.fulfilled, (state, action) => {
        const { requestId } = action.meta;
        if (
          state.loading === 'pending' &&
          state.currentRequestId === requestId
        ) {
          state.loading = 'idle';
          state.currentRequestId = undefined;
          pokemonAdapter.addMany(state, action.payload);
        }
      })
      .addCase(fetchPokemonAsyncThunk.rejected, (state, action) => {
        const { requestId } = action.meta;
        if (
          state.loading === 'pending' &&
          state.currentRequestId === requestId
        ) {
          state.loading = 'idle';
          state.requestError = action.error;
          state.currentRequestId = undefined;
        }
      });
  },
});

const fetchPokemonAsyncThunk = createAsyncThunk(
  'pokemon/requestStatus',
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
  incrementCart,
  decrementCart,
  removeFromCart,
  setLoadingState,
} = pokemonSlice.actions;

export const {} = pokemonSlice.selectors;

export { fetchPokemonAsyncThunk, pokemonAdapter };

export default pokemonSlice.reducer;
