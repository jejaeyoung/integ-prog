import { useState } from "react";
import Myform from "./Myform";
import React from 'react'


const Myfriends=(props)=>{
    console.log(props)
    //destructuring
    const {fname,ranking}=props; //this is object
   
    //using state 
    //promote
    const [theNum, setThenum]=useState(ranking); 
    const [btnDisable, setBtnDisable] = useState(false);
    //theNum is getters and setThenum is setters and function 

    
    const promoteTrigger =()=>{

         if(theNum==1)
         {
             setBtnDisable(true);
         }
         else{
            setThenum(theNum-1);
         }
        console.log(theNum);
        //setThenum is a setter and a function
    
    }

    //demote
    const demoteTrigger =()=>{
         if(theNum>0)
         {
             setBtnDisable(false);
         }
        console.log(theNum);
        //setThenum is a setter and a function
        setThenum(theNum+1)
    }
    
    
    return(
        <>
            <p>Name: {fname}</p>
            <p> Ranking: {theNum}</p>
            <button disabled={btnDisable} onClick={promoteTrigger}>Promote</button>
            <button onClick={demoteTrigger}>Demote</button>
            <br/>
        </>
    )
}

export default Myfriends;