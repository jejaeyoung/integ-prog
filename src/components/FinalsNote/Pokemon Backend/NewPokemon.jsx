import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'

function NewPokemon() {
    const navigate = useNavigate();
    const [pname,setPname] = useState("");
    const [page,setPage] = useState(0);
    const [pimg,setPimg] = useState("");
    const [plevel,setPlevel] = useState(0);
    const [ptype,setPtype] = useState("");

    const registerPokemon=()=>{
        const nPokemon = {
            p_name : pname,
            p_age :page,
            p_img: pimg,
            p_level: plevel,
            p_type: ptype

        }
        axios.post(`http://localhost:8000/api/pokemon/new`, nPokemon)
            .then((response)=>{
                console.log(response);
                navigate('/GetPokemon')
            })
            .catch((err)=>{
                console.log(err);
            })
    }
    
  return (
   <>
   <center>
    <div className='container'>
        <h1>Create New Pokemon</h1>
        <hr/>
        <p>Enter Pokemon Name: <input type='text'onChange={(e)=>{setPname(e.target.value)}}/></p>
        <p>Enter Pokemon Image URL: <input type='text'onChange={(e)=>{setPimg(e.target.value)}}/></p>
        <p>Enter Pokemon Level: <input type='number'onChange={(e)=>{setPlevel(e.target.value)}} /></p>
        <p>Enter Pokemon Age: <input type='number'onChange={(e)=>{setPage(e.target.value)}}/></p>
        <p>Enter Pokemon Type: <input type='text'onChange={(e)=>{setPtype(e.target.value)}}/></p>
        <button onClick={()=>{registerPokemon()}}>Create</button>
    </div>
</center>
   </>
  )
}

export default NewPokemon
