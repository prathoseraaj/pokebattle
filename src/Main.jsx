import React, { useEffect, useState } from 'react'
import './App.css';

const Main = () => {
  const [pokemon1data, setPokemon1data] = useState(null);
  const [pokemon2data, setPokemon2data] = useState(null);
  const [poke1hp, setPoke1hp] = useState(100);
  const [poke2hp, setPoke2hp] = useState(50);




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
      <div className='pokemon' id='poke1'>
        {pokemon1data ? (
          <> 
            <img src={pokemon1data.sprites.back_default} alt={pokemon1data.name} />
          <img src="/image.png" alt="ada" id='base' />
            <h2>{pokemon1data.name}</h2>
            <div className="health-bar" style={{ width: `${poke1hp}%`,
                                        backgroundColor: poke1hp > 50 ? '#4caf50' : '#ff9800' }}></div>
            <div>
              <button className="button">attack</button>
              <button className="button">defend</button>
              <button className="button">heal</button>
              <button className="button">special</button>
            </div>
          </>

          ) : (
            <p>loading...</p>
          )}
      </div>
      <div className='pokemon' id='poke2'>
      {pokemon2data ? (
        <>
          <img src={pokemon2data.sprites.front_default} alt={pokemon2data.name} />
          <img src="/image.png" alt="ada" id='base' />
          <h2>{pokemon2data.name}</h2>
          <div className="health-bar" style={{ width: `${poke2hp}%`,
                                      backgroundColor: poke2hp > 50 ? '#4caf50' : '#ff9800', }}></div>
          <div className='buttoncontainer'>
            <button className="button">attack</button>
            <button className="button">defend</button>
            <button className="button">heal</button>
            <button className="button">special</button>
          </div>
        </>
          ) : (
            <p>loading...</p>
          )}
      </div>
    </div>
  )
}

export default Main