//INF211_MERN_POKEMON_QUILATAN_DANIELSEBASTIAN
import React from 'react'

const Pokemons=(props)=> {
    console.log(props);
    const {name, type, level, image} = props.pokemonDetails;

    const theRemark =()=>{
      if(level >= 5 && level <= 20)
      {
        return "Weak";
      }
      else if (level >= 21 && level <=60)
      {
        return "Quite Strong";
        
      }
      else if (level >= 61)
      {
        return "Veteran";
      }
      else 
      {
        return "Invalid Power";
      }
      
    }


  return (
    <>
        <p>Pokemon Name: {name}</p>
        <p>Pokemon Type: {type}</p>
        <p>Pokemon Level: {level} , {theRemark(level)} </p>
        <p>Image: <img src={image}></img></p>
    </>
  )
}

export default Pokemons
