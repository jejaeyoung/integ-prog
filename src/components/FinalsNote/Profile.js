import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'

const Profile=(props) => { 
    const{username,age} = useParams();
    const navigate = useNavigate();

    const logout=()=>{
        navigate('/')
    }
    return(
        <>
        <center>
            <p> Profile </p>
           
            {/* i-checheck kung may laman yung (age) if meron, ididisplay niya yung h2 tag */}
            {username && <h1>This is your Profile, {username}</h1>}
            {age && <h2>Age: {age}</h2>}
            <button onClick={(e)=>{logout(e.target.value)}}>Log out</button>
        </center>
        </>
    )
}
export default Profile