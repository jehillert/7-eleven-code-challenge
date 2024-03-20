const pokemonApiBaseUrl = 'https://pokeapi.co';
const pokemonEndpoint = 'api/v2/pokemon';
const queryParams = '?limit=151';

type PokemonLimit = number | undefined;

const pokemonUrl = (limit?: PokemonLimit) =>
  `${pokemonApiBaseUrl}/${pokemonEndpoint}${limit ? `?limit=${limit}` : ``}`;

const fetchPokemon = () =>
  fetch(pokemonUrl()).then(response => response.json());

const api = {
  fetchPokemon,
};

export { api };
