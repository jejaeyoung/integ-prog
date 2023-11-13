import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'


function GetAllPokemon() {
    const [allPokemon, setAllPokemon] = useState([]);

    useEffect(() => {
      axios.get('http://localhost:8000/api/pokemon/all')
        .then((response)=>{
          console.log(response.data.thePokemon);
          setAllPokemon(response.data.thePokemon);
        })
        .catch((err)=>{
          console.log(err);
        })
     
    }, [])
    
  return (
    <>
    <center>
        <div className="container">
            <h1>List of Pokemons</h1>
            {allPokemon.map((element,index)=>{
              return(
                <>
                  <p key={index}>{index+1}. <Link to={"/pokemon/singlepokemon/"+element.p_name}>{element.p_name}</Link></p>
                </>
              )
              
            })}
        </div>
    </center> 
    </>
  )
}

export default GetAllPokemon
