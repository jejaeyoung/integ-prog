import { useState } from "react";
import Friend from "./Friend";
import React from 'react'
const Myform=()=>{
    const [theName, setTheName]=useState("");
    const [theAlias, setTheAlias]=useState("");
    const [theRanking, setTheRanking]=useState(0);
    const [theImage, setTheImage]=useState("");
    //for an array state (Listahan ng Array)
    const [theFriends, setTheFriends]=useState([]);

    //adding new state heir to become new placeholder
    const [theFriend,setTheFriend]=useState({});
    
    const theSet=["Peter","Mark","Joseph"];

    //map is a callback function 
    //element is a value of an array and index is an index of an array
    // theSet.map((element,index)=>{console.log((index+1)+". Hi "+element);})
    
    //synthetic event for setting a 
    const register=(e)=>{
        e.preventDefault();
        //creating if statement for validation kapag pinindot toh
        if(theName.length<3 || (theRanking < 1 || theRanking>=100))
        {
            window.alert("Dagdagan mo pa sis koh");
        } else{

            let newFriend ={
                name:theName,
                alias:theAlias,
                ranking:theRanking,
                image:theImage
            }
            setTheFriend(newFriend);
            //create a copy of your array
            let existingList = theFriends;  //getting theFriends
            existingList.push(newFriend);   //ipupush niya ýung newFriend sa taas 
            setTheFriends(existingList);
            console.log(theFriends);
        }
       
    }
    return(
        <>
        <center>
        <h1>Create a Friend</h1>

            <form>
                {/* <p style={{color:"red"}}> {(theName.length < 3)? "Kulang":""}</p> */}
                <p>Enter Friend Name: <input onChange={(e)=>{setTheName(e.target.value)}} type="text"/> </p>
                <p>Enter Friend Alias: <input onChange={(e)=>{setTheAlias(e.target.value)}} type="text"/></p>
                <p>Enter Initial Ranking: <input onChange={(e)=>{setTheRanking(e.target.value)}} type="number"/>  </p>
                <p>Enter Image URL: <input onChange={(e)=>{setTheImage(e.target.value)}} type="text"/></p>
                <p><button type="submit" onClick={(e)=>{register(e)}}>Create The Friend</button></p>
            
            </form>
            
            <hr/>
            <h1>Details for Summary</h1>
            <hr/>
                
                
                {theFriends.map((element,index)=>{return <> <Friend key={index} friendDetails={element}></Friend><hr/> </>})}

              
        </center>
        </>
    )
}

export default Myform;