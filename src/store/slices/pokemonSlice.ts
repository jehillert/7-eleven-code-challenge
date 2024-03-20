import {
  createEntityAdapter,
  createSlice,
  PayloadAction,
} from '@reduxjs/toolkit';
import { api } from '../../api';
import { PokemonEntity, PokemonListItem } from '../../types';
import { AppThunk } from '../store';

const pokemonAdapter = createEntityAdapter({
  selectId: (pokemon: PokemonListItem) => pokemon.name,
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

const fetchPokemonListThunk =
  (limit?: number): AppThunk =>
  async dispatch => {
    try {
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

      dispatch(addManyPokemon(pokemonList));
    } catch (err) {
      console.error(err);
    }

    // res[0].sprites.front_default
    // const promise1 = Promise.resolve(3);
    // const promise2 = new Promise((resolve, reject) =>
    //   setTimeout(reject, 100, 'foo'),
    // );

    // const promises = results.map(({url}: PokemonListItem) => (url: string) => fetch(url).then(response => response.json())

    // Promise.allSettled(promises).then(results =>
    //   results.forEach(result => console.log(result.status)),
    // );
  };

export const { addManyPokemon, setActivePokemonId } = pokemonSlice.actions;
export const { selectActivePokemonId } = pokemonSlice.selectors;
export { fetchPokemonListThunk, pokemonAdapter };
export default pokemonSlice.reducer;
