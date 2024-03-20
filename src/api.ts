import { PokeAPI } from 'pokeapi-types';
import { PokemonLimit, PokemonListResponse, PokemonListItem } from './types';

const pokemonApiBaseUrl = 'https://pokeapi.co';
const pokemonEndpoint = 'api/v2/pokemon';

const pokemonUrl = (limit?: PokemonLimit) =>
  `${pokemonApiBaseUrl}/${pokemonEndpoint}${limit ? `?limit=${limit}/` : ``}`;

const fetchPokemonList = (limit: PokemonLimit): PokemonListResponse =>
  fetch(pokemonUrl(limit)).then(response => response.json());

const fetchPokemonInfo = ({ url }: PokemonListItem): Promise<PokeAPI.Pokemon> =>
  fetch(url).then(response => response.json());

const api = {
  fetchPokemonInfo,
  fetchPokemonList,
};

export { api };
