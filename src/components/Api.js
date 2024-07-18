// src/components/PokemonCards.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
/* import './PokemonCards.css'; */

const PokemonCards = () => {
  const [pokemonData, setPokemonData] = useState([]);

  useEffect(() => {
    const fetchPokemonData = async () => {
      try {
        const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=20');
        const results = response.data.results;

        const pokemonDetails = await Promise.all(
          results.map(async (pokemon) => {
            const pokemonDetailResponse = await axios.get(pokemon.url);
            return {
              name: pokemon.name,
              image: pokemonDetailResponse.data.sprites.other['official-artwork'].front_default
            };
          })
        );

        setPokemonData(pokemonDetails);
      } catch (error) {
        console.error('Error fetching Pokémon data:', error);
      }
    };

    fetchPokemonData();
  }, []);

  return (
    <div className="pokemon-container">
      {pokemonData.map((pokemon, index) => (
        <div key={index} className="pokemon-card">
          <img src={pokemon.image} alt={pokemon.name} />
          <h3>{pokemon.name}</h3>
        </div>
      ))}
    </div>
  );
};

export default PokemonCards;
