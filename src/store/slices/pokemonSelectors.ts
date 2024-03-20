import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { pokemonAdapter } from './pokemonSlice';

const getPokemonState = (state: RootState) => state.pokemon;

const {
  selectAll: selectPokemon,
  selectEntities: selectPokemonDict,
  selectIds: selectPokemonIds,
} = pokemonAdapter.getSelectors<RootState>(state => state.pokemon);

const { selectById, selectEntities } = pokemonAdapter.getSelectors();

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
  createSelector(getPokemonState, pokemontate => {
    return ids.map(id => selectEntities(pokemontate)[id]);
  });

export {
  getPokemonState,
  selectPokemon,
  selectPokemonById,
  selectPokemonByIds,
  selectPokemonDict,
  selectPokemonIds,
};
