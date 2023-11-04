import React from 'react'
import axios from 'axios';
import { useState, useEffect } from "react";
import StarwarsFilm from './StarwarsFilm';
import { useNavigate } from 'react-router-dom'



function Starwars() {

const [characters, setCharacters] = useState({});
const [currentCharacterIndex, setCurrentCharacterIndex] = useState(1);
const [films, setFilms] = useState([]);


//   

useEffect(() => {
  axios.get("https://swapi.dev/api/people/"+currentCharacterIndex)
    .then((response) => {
      console.log(response.data);
      setCharacters(response.data);
      
      setFilms(response.data.films)

    
    })
    .catch((err) => {
      console.log(err);
    });
}, [currentCharacterIndex]);


  const previousCharacter = () => {
      setCurrentCharacterIndex(currentCharacterIndex - 1);
  };

  const nextCharacter = () => {
    
      setCurrentCharacterIndex(currentCharacterIndex + 1);
    
  };


  return (
    <>
      <center>
        
      <div className="container">
          <h1>Starwars</h1>
          <hr/>
            <div>
              <p>Character Name: {characters.name}</p>
              <p>Character Birthyear: {characters.birth_year}</p>
              <p>Character Gender: {characters.gender}</p>
            </div>

            {/* Films */}
            <div>
              <hr/>
                <h1>Films</h1>
              <hr/>
              
                  {films.map((element,index)=>{  
                    return<>
                    <p>Title {index+1}. <StarwarsFilm key={index} link={element}></StarwarsFilm> </p> 
                    {/* <p> this is the element {index+1} :  {element} </p> */}
                    </>})}
             
            </div>

        <hr />
            {/* Buttons */}                                              
            <div>
              <button onClick={previousCharacter}>
                Previous
              </button>
              <button onClick={nextCharacter}>
                Next
              </button>
            </div>

        <hr/>
      </div>
      </center>
    </>

  )
}

export default Starwars