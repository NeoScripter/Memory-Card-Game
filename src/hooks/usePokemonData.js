import { useState, useEffect } from 'react';
import axios from 'axios';

const fetchPokemonData = async () => {
  try {
    const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=15');
    const results = response.data.results;

    const pokemonDetails = await Promise.all(
      results.map(async (pokemon) => {
        const pokemonDetailResponse = await axios.get(pokemon.url);
        return {
          id: pokemonDetailResponse.data.id,
          name: pokemon.name,
          image: pokemonDetailResponse.data.sprites.other['official-artwork'].front_default,
        };
      })
    );

    return pokemonDetails;
  } catch (error) {
    console.error('Error fetching Pokémon data:', error);
    return [];
  }
};

const usePokemonData = () => {
  const [pokemonData, setPokemonData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchPokemonData();
      setPokemonData(data);
    };

    fetchData();
  }, []);

  return pokemonData;
};

export default usePokemonData;
