import React, { useEffect, useState } from 'react'
import './App.css';

const Main = () => {
  const [pokemon1data, setPokemon1data] = useState(null);
  const [pokemon2data, setPokemon2data] = useState(null);



  async function fetchpokemon() {
    const response1 = await fetch(`https://pokeapi.co/api/v2/pokemon/pikachu`);
    const response2 = await fetch(`https://pokeapi.co/api/v2/pokemon/bulbasaur`);
    const poke1data = await response1.json();
    const poke2data = await response2.json();
    console.log(poke1data);
    console.log(poke2data);
    setPokemon1data(poke1data);
    setPokemon2data(poke2data);

}
  useEffect(() => {
    fetchpokemon();
  }, []);
  return (
    <div className='container'>
      <div className='pokemon'>
        {pokemon1data ? (
            <h2>{pokemon1data.name}</h2>
          ) : (
            <p>loading...</p>
          )}
      </div>
      <div className='pokemon'>
      {pokemon2data ? (
            <h2>{pokemon2data.name}</h2>
          ) : (
            <p>loading...</p>
          )}
      </div>
    </div>
  )
}

export default Main