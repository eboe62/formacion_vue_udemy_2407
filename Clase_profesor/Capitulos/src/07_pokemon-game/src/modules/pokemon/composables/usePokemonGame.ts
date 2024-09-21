import { computed, onMounted, ref } from 'vue';
import { GameStatus, type Pokemon, type PokemonListResponse } from '../interfaces';
import { pokemonApi } from '../api/pokemonApi';
import confetti from 'canvas-confetti';

export const usePokemonGame = () => {
  const gameStatus = ref<GameStatus>(GameStatus.Playing);
  const pokemons = ref<Pokemon[]>([]); // Propiedad Reactiva para la Propiedad Reactiva loading
  const pokemonOptions = ref<Pokemon[]>([]); // Propiedad Reactiva

  const randomPokemon = computed(() => {
    const randomIndex = Math.floor(Math.random() * pokemonOptions.value.length);
    return pokemonOptions.value[randomIndex];
  });
  const isLoading = computed(() => pokemons.value.length === 0); // Propiedad Computada para cargar la lista completa de Pokemons

  const getPokemons = async (): Promise<Pokemon[]> => {
    const response = await pokemonApi.get<PokemonListResponse>('/?limit=151');

    const pokemonsArray = response.data.results.map((pokemon) => {
      const urlParts = pokemon.url.split('/');
      //      const id = urlParts[urlParts.length -2];
      const id = urlParts.at(-2) ?? 0; //?? 0 nos permite prevenir la posibilidad undefined
      return {
        name: pokemon.name,
        id: +id,
      };
    });

    return pokemonsArray.sort(() => Math.random() - 0.5); // listado en orden aleatorio
  };

  const getNextRound = (howMany: number = 4) => {
    gameStatus.value = GameStatus.Playing;
    pokemonOptions.value = pokemons.value.slice(0, howMany);
    pokemons.value = pokemons.value.slice(howMany);
  };

  const checkAnswer = (id: number) => {
    const hasWon = randomPokemon.value.id === id;

    if (hasWon) {
      gameStatus.value = GameStatus.Won;
      confetti({
        particleCount: 300,
        spread: 150,
        origin: { y: 0.6 },
      });
      return;
    }

    gameStatus.value = GameStatus.Lost;
  };

  onMounted(async () => {
    await new Promise(r => setTimeout(r, 1000)) // Retardo para que nos de tiempo a ver como se realiza la carga
    pokemons.value = await getPokemons();
    getNextRound();

    console.log(pokemonOptions.value);
  });

  return {
    gameStatus,
    isLoading,
    pokemonOptions,
    randomPokemon,

    // methods
    getNextRound,
    checkAnswer,
  };
};
