//INF211_POKEMON_API1_QUILATAN_DANIELSEBASTIAN_115667s@y1
//Axios
import React from 'react'
import axios from 'axios';
import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';






const Pokemon =()=> {
    const [Pokemonx, setPokemon]=useState("");
    const [pokeImage, setPokeImage]=useState("");
    const [allPokemon, setAllPokemon]=useState([]);


    //for input number
    const [aNumber, setAnumber]=useState(1);
    //for limit
    const [limit, setLimit] = useState(10);
    // for Pokemon type element
    const [allType,setAlltype]=useState([]);
    // selectedtype for pokemon results
    const [selectedType,setSelectedType]=useState(1)

    // for pages
    // const [currentPage, setCurrentPage] = useState(1);
    // //next paging
    // const displayedPokemon = allPokemon.slice((currentPage - 1) * limit, currentPage * limit);
    // const handlePrevious = () => { 
    //     setCurrentPage(currentPage - 1);
    // };
    // const handleNext = () => { 
    //     setCurrentPage(currentPage + 1);
    // };
    //consume an api
    //promise - it will try to execute an instruction, pero yung ibang line mo sa ibaba irereload niya.
    //task hindi guaranteed pero itatatry siyang i load ni computer
     

    //This is for deleting a specific Pokemon 
    const deletePokemon =(nameofpokemon)=>{
      window.alert(`u removed ` + nameofpokemon)
      const newList = allPokemon.filter((element)=>{return element.pokemon.name !== nameofpokemon})
      setAllPokemon(newList);
    }
    
    //Pokemon Image
    useEffect(() => {
      axios.get(`https://pokeapi.co/api/v2/pokemon/${aNumber}`)
          .then((response) => {
            console.log(response.data);
              setPokemon(response.data);
              setPokeImage(response.data.sprites.front_default);
          })
          .catch((err) => {
              console.log(err);
          });
  }, [aNumber]);

    //Randomizer
    const generateRandomNumber = () => {
      const randomPokemonNumber = Math.floor(Math.random() * 1021) + 1; // max pokemon: 10275
      setAnumber(randomPokemonNumber);
  };
    //This is for Pokemon results
    useEffect(()=>{
      axios.get("https://pokeapi.co/api/v2/type/"+selectedType)
      .then((response)=>{
        //finding specific index
        // console.log(response.data.pokemon[1].pokemon.name);
        console.log(response.data.pokemon);
        setAllPokemon(response.data.pokemon);
        // setAllPokemon(response.data.results);
    })
      .catch((err)=>{
        console.log(err)
    })
    },[selectedType]);

    //This is for Pokemon Element Type
    useEffect(()=>{
      axios.get("https://pokeapi.co/api/v2/type/")
      .then((response)=>{
        console.log(response.data.results);
        setAlltype(response.data.results)     
    })
      .catch((err)=>{
        console.log(err)
    })
    },[]);

    //I want to capitalize the Pokemonx.name first letter
    const capitalizeFirstLetter=(string)=> {
      return string.charAt(0).toUpperCase() + string.slice(1);
  }
  return (
    <>

    <center>

    <div className="container">
      <h1>Who's that Pokémon?</h1>
      {/* if having problem with charAt */}
      <h2>{Pokemonx.name ? capitalizeFirstLetter(Pokemonx.name): ''}</h2> 
      <img src={pokeImage} width="100" height="100" alt=''></img> 
      <p>Pokemon Height: {Pokemonx.height}</p>
      <p>Enter Pokemon ID: <input onChange={(e)=>{setAnumber(e.target.value)}} type="number"/> or <button onClick={generateRandomNumber}>Random</button></p>
    </div>

    <div className="container">
      <hr/>
      <h1>Pokemon Details</h1>
      <hr/>
      <p>Select Pokemon Type: 
      <select onChange={(e)=>{setSelectedType(e.target.value)}}>
        
        {allType.map((element,index)=>{
          return<> <option key={index}>{element.name}</option>
          </>
        })}
      </select>
      </p>

      Display Limit: 
        <input type="range" value={limit} min={10} max={200} onChange={(e) => { setLimit(e.target.value) }}/> {limit}
        {/* Slice is Minus One of the Index */}
       {allPokemon.slice(0, limit).map((element,index)=>{
        return <>
        <div >
          <p>{index+1}. {element.pokemon.name} (ID: {element.pokemon.url.split("/", -7).slice(-2)}) </p>
         <Link to={"/Pokemon/"+element.pokemon.name}> <button>Check Profile</button></Link> <button onClick={()=>{deletePokemon(element.pokemon.name)}}>Delete</button>
        </div>
        </>
      })}

    </div>
      {/* <div>
        <button onClick={handlePrevious} disabled={currentPage === 1}>Previous</button>
        <button onClick={handleNext} disabled={currentPage === Math.ceil(allPokemon.length / limit)}>Next</button>
      </div> */}

      
    
    </center>
    </>
  )
}

export default Pokemon
