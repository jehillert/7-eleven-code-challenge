import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../../store/store';
import { pokemonAdapter } from './pokemonSlice';

const getPokemonState = (state: RootState) => state.pokemon;

const selectIsLoading = (state: RootState) =>
  state.pokemon.loading === 'pending';

const selectLoading = (state: RootState) => state.pokemon.loading;

const {
  selectAll: selectPokemon,
  selectEntities: selectPokemonDict,
  selectIds: selectPokemonIds,
} = pokemonAdapter.getSelectors<RootState>(state => state.pokemon);

const { selectById, selectEntities } = pokemonAdapter.getSelectors();

const selectIsPokemon = createSelector(selectPokemonIds, ids => !!ids?.length);

/**
 * @example
 * const myPokemon = useAppSelector(selectPokemonById(id));
 */
const selectPokemonById = (id: string) =>
  createSelector(getPokemonState, pokemonState => selectById(pokemonState, id));

/**
 * @example
 * const ids = [id1, id2, id3];
 * const myPokemon = useAppSelector(selectPokemonByIds(ids));
 */
const selectPokemonByIds = (ids: string[]) =>
  createSelector(getPokemonState, pokemonState => {
    return ids.map(id => selectEntities(pokemonState)[id]);
  });

const selectPokemonCartList = createSelector(selectPokemon, pokemon => {
  return pokemon.filter((p, currentIndex) => p.cartCount > 0);
});

export {
  getPokemonState,
  selectIsLoading,
  selectIsPokemon,
  selectLoading,
  selectPokemon,
  selectPokemonById,
  selectPokemonByIds,
  selectPokemonCartList,
  selectPokemonDict,
  selectPokemonIds,
};
