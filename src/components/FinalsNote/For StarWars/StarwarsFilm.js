import React from 'react'
import axios from 'axios';
import { useState, useEffect } from "react";


function StarwarsFilm(props) {
    const [films, setFilms] = useState({});
    const {link} = props;
    useEffect(() => {
        axios.get(link) //yung link mismo is galing sa  https://swapi.dev/api/films/ tinatranslate niya yung link array into an object
          .then((response) => {
  
            setFilms(response.data);
          })
          .catch((err) => {
            console.log(err);
          });

      }, []);
      
 

  return (
<>
    <center key={films}>
      {films.title}
    </center>
    
</>
  )
}

export default StarwarsFilm