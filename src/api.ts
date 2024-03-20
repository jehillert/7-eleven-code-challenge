const pokemonApiBaseUrl = 'https://pokeapi.co';
const pokemonEndpoint = 'api/v2/pokemon';
const queryParams = '?limit=151';

const pokemonUrl = `${pokemonApiBaseUrl}/${pokemonEndpoint}${queryParams}`;
console.log(pokemonUrl);

const fetchPokemon = () => fetch(pokemonUrl).then(response => response.json());

const api = {
  fetchPokemon,
};

export {api};
