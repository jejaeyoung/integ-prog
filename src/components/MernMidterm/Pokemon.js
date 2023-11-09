//INF211_MERN_POKEMON_QUILATAN_DANIELSEBASTIAN
import React from 'react'
import { useState } from "react";
import Pokemons from './Pokemons';

function Pokemon() {
    //states for pokemons
    //name
    const [theName, setTheName]=useState("");  
    //level of pokemon
    const [theLevel, setTheLevel]=useState(0);
    //Type
    const [theType, setTheType]=useState("");
    //image
    const [theImage, setTheImage]=useState("");
    //set
    const [thePokemon,setThePokemon]=useState({});
    //for an array state (Listahan ng Array)
    const [thePokemons, setThePokemons]=useState([]);

    const create=(e)=>{
        e.preventDefault();
        if(theName.length < 3)
        {
            window.alert("Error");
        } 

        else
        {
            let newPokemon ={
                name:theName,
                type:theType,
                level:theLevel,
                image:theImage
            }
            //setting
            setThePokemon(newPokemon);
            //para mag accumulate sila
            let existingList = thePokemons;
            existingList.push(newPokemon);  
            setThePokemons(existingList);
            console.log(thePokemons);
        }  
    }
  return (
    <>
    <center>
        <h1>POKEDEX</h1>
        <form>
            <p>Enter Pokemon Name: <input onChange={(e)=>{setTheName(e.target.value)}} type="text"/> </p>
            <p>Select Pokemon Type: <select onChange={(e)=>{setTheType(e.target.value)}}>
                                            <option value=""></option>
                                            <option value="Water">Water</option>
                                            <option value="Fire">Fire</option>
                                            <option value="Electricity">Electricity</option>
                                            <option value="Grass">Grass</option>
                                            <option value="Physical">Physical</option>
                                            <option value="Psychics">Psychic</option>
                                    </select> </p>
            <p>Enter Pokemon Level: <input onChange={(e)=>{setTheLevel(e.target.value)}} type="number"/> </p>
            <p>Image URL: <input onChange={(e)=>{setTheImage(e.target.value)}} type="text"/></p>
            <p><button type="submit" onClick={(e)=>{create(e)}}>Create Pokemon</button></p>
        </form>
  

        <hr/>
        <h1>Pokemon List</h1>
        <hr/>
        {thePokemons.map((element,index)=>{return <> <Pokemons key={index} pokemonDetails={element}></Pokemons><hr/> </>})}
    </center>
    </>
  )
}

export default Pokemon
