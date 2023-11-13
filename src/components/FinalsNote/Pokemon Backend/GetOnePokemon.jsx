import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
function GetOnePokemon() {
    const {pname} = useParams();
    const [allPokemon, setAllPokemon] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
      axios.get('http://localhost:8000/api/pokemon/'+pname)
        .then((response)=>{
          console.log(response.data);
          setAllPokemon(response.data.thePokemon);
        })
        .catch((err)=>{
          console.log(err);
        })
     
    }, [])
    
    const deletePokemon=(pid)=>{
   
      const resp=window.confirm("are you sure you want to delete?")
      if(resp)
      {
        axios.delete('http://localhost:8000/api/pokemon/delete/'+pid)
        .then((response)=>{
          console.log(response)
          
          navigate("/GetPokemon");
        })
        .catch((err)=>{

        })
      }
      
    }
  return (
    <>
    <center>
        <div className="container">
            <h1>{pname}</h1>
            <hr/>

                <p> Age: {allPokemon.p_age}</p>
                <p> Image: <img src={allPokemon.p_img} alt="haha" />  </p>
                <p> Level: {allPokemon.p_level}</p>
                <p> Type: {allPokemon.p_type}</p>
                <p><button onClick={()=>{deletePokemon(allPokemon._id)}}>Delete</button></p>
            {/* {allPokemon.map((element,index)=>{
              return(
                <>
                <p key={index}> Age: {element.p_age}</p>
                  <p key={index}> Image: {element.p_image}</p>
                  <p key={index}> Level: {element.p_level}</p>
                  <p key={index}> Type: {element.p_type}</p>
                </>
              )
              
            })} */}
        </div>
    </center> 
    </>
  )
}

export default GetOnePokemon
