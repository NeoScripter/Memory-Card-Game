import React, { useState, useEffect } from 'react';
import usePokemonData from '../../hooks/usePokemonData';
import styles from './Body.module.css';

function shuffleArray(array) {
  const newArray = [...array]; 
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
}

function Body() {
  const pokemonData = usePokemonData();
  const [pokemonArray, setPokemonArray] = useState([]);

  useEffect(() => {
    setPokemonArray(pokemonData);
  }, [pokemonData]);

  function rearrangeCards() {
    setPokemonArray((prev) => shuffleArray(prev));
  }

  return (
    <div className={styles.cardsContainer}>
      {pokemonArray.map((pokemon, index) => (
        <div key={index} className={styles.pokemonCard} onClick={rearrangeCards}>
          <img src={pokemon.image} alt={pokemon.name} />
          <p>{pokemon.name}</p>
        </div>
      ))}
    </div>
  );
}

export default Body;
