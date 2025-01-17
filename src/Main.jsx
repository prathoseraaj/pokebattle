import React, { useEffect, useState } from 'react'

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
    <div>
      <div className='pokemon'>
        
      </div>
      <div className='pokemon'>

      </div>
    </div>
  )
}

export default Main