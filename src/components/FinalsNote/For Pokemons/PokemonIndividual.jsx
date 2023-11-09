import React from 'react'
import axios from 'axios';
import { useParams, useNavigate, Link } from 'react-router-dom'
import { useState, useEffect } from "react";
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';




//if you want to extract the drop down arrow on console, you have to make another useState string
function PokemonIndividual(props) {
    const [Pokemonx, setPokemon]=useState("");
    const [pokeImage, setPokeImage]=useState("");
    const [pokeStats, setPokeStats]=useState([]);
    const [pokeType, setPokeType]=useState([]);

    const [pokeSpeciesUrl, setPokeSpeciesUrl]=useState([]);
    const [pokeSpecies, setPokeSpecies]=useState("");
    //under pokeSpecies with dropdowns
    const [pokeColor, setPokeColor]=useState("");
    const [generation, setGeneration]=useState("");
    const [habitat, setHabitat]=useState("");
    const [growthrate, setGrowthRate]=useState({});

    const [pokeAbilities, setPokeAbilities]=useState([]);
    //to get the name value of the pokemon
    const {pname} = useParams();
    //evolution
    const [evolution, setEvolution]=useState("");
    console.log(pname);

     //Pokemon Image
     useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${pname}`)
            .then((response) => {
                console.log(response.data);
                setPokemon(response.data);
                setPokeStats(response.data.stats);
                setPokeImage(response.data.sprites);
                setPokeType(response.data.types);
                setPokeSpeciesUrl(response.data.species.url) 
                setPokeAbilities(response.data.abilities) 
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);
    
        //for Species
        useEffect(() => {
        // Fetch species data
        axios.get(pokeSpeciesUrl)
            .then((response) => {
                console.log(response.data);
            setPokeSpecies(response.data);
            })
            .catch((err) => {
            console.log(err);
            });
        },[pokeSpeciesUrl]);  // Use pokeSpeciesUrl as the dependency

        useEffect(() => {
        // Update color, generation, and habitat based on pokeSpecies data
        if (pokeSpecies) {
            setPokeColor(pokeSpecies.color);
            setGeneration(pokeSpecies.generation);
            setHabitat(pokeSpecies.habitat);
            setEvolution(pokeSpecies.evolves_from_species)
            setGrowthRate(pokeSpecies.growth_rate)
            console.log(pokeSpecies.growth_rate);

        }
        }, [pokeSpecies]);
            



    const capitalizeFirstLetter=(string)=> {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

  return (
    <>
    <div className="container">

    <center>
        <h1>Pokemon Profile</h1>
    </center>
    
    <center>
        <div>
            <p>Pokemon Name: {Pokemonx.name ? capitalizeFirstLetter(Pokemonx.name): ''}</p> 
        
            <img src={pokeImage.front_default} width="100" height="100" alt='front'></img>
            <img src={pokeImage.back_default} width="100" height="100" alt='back'></img> 
        
            <p>Pokemon Height: {Pokemonx.height}</p>
            <p>Pokemon Weight: {Pokemonx.weight}</p>

        <hr/>
            <h5>Types:</h5>
            {pokeType.map((element,index)=>{
                return<>
                    <p key={index}> {element.type.name} </p>
                </>
            })}

        <hr/>
        <Container>
        <h2>Abilities</h2>
            {pokeAbilities.map((element,index)=>{
                return<>
                    
                    <p>{element.ability.name}</p>
                </>
                    
            })}
                
                {/* <Link to={`/Pokemon/${pname}/evolution`}> <button>Check Profile</button></Link> */}
        </Container>


        <hr/>
            <h2>Pokemon Stats</h2>
            <Container>
                {pokeStats.map((element, index) => (
                    <Row className='justify-content-md-center' key={index}>
                        <Col xs lg="2">{element.stat.name}:</Col>
                        <Col xs lg="2">{element.base_stat}</Col>
                    </Row>
                ))}
            </Container>
        <hr/>
            <Container> 
                <h2>Species Information</h2>
                <p>Base Happiness: {pokeSpecies.base_happiness}</p>
                <p>Capture Rate: {pokeSpecies.capture_rate}</p>
                <p>Generation: {generation.name}</p>
                <p>Color: {pokeColor.name}</p>
                {/* if habitat the habitat has null value */}
                <p>Habitat: {habitat ? habitat.name : 'Null'}</p>
                <p>Growth Rate: {growthrate ? growthrate.name : 'Null'}</p>
              {/* <p>{pokeSpecies.color.name}</p> */}
            </Container>
        <hr/>
            <Container>
                <h2>Evolutions</h2>
                <p></p>
                {/* <Link to={`/Pokemon/${pname}/evolution`}> <button>Check Profile</button></Link> */}
            </Container>


        </div>
        
    </center>
    </div>
    </>
  )
}

export default PokemonIndividual