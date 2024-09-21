import axios from 'axios';

const pokemonApi = axios.create({
  baseURL: 'https://pokeapi.co/api/v2/pokemon',
});

export { pokemonApi }; // No hacemos el export directamente la declaración pokemonAPI porque más adelante implementaremos middelware
