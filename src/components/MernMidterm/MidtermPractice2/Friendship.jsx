import React from 'react'
import { useState } from "react";

function Friendship() {
    // Create States
        //name
        const [theName, setName]=useState(""); 
        //age
        const [theAge, setAge]=useState(0);
        //image
        const [theImage, setImage]=useState("");
        //sex
        const [theSex, setSex]=useState("");
        //hobbies
        const [theHobbies, setHobbies]=useState("");
        //remarks
        const [theRemarks, setRemarks]=useState("");
        //collection
        const [theFriends, setFriends]=useState([]);

        //For Editing State
        const [selectedFriend, setSelectedFriend] = useState(null);
        const [isEditing, setIsEditing] = useState(false);

        //createFriend event Listener
        const createFriend = (e) => {
            if(theName.length <= 3 || theHobbies.length <= 5)
            {
                alert("Please fill in all required field correctly.")
            }
            else
            {
                const newFriend ={
                    theName,
                    theAge,
                    theImage,
                    theSex,
                    theHobbies,
                };
                //to stop auto refresh
                e.preventDefault();
                //to accumulate
                setFriends([...theFriends, newFriend])

                //Remarks for Age
                if(theAge >= 18)
                {
                    setRemarks("Adult");
                }
                else
                {
                    setRemarks("Minor!");
                } 
            }
        };
        //Delete Friend
        const deleteFriend = (index) => {
            const updatedFriends = theFriends.filter((_, i) => i !== index);
            setFriends(updatedFriends);   
        };

        //Handle Edit
        const handleEditFriend = (index) => {
            //setting selected index only
            setSelectedFriend(theFriends[index]);
            setIsEditing(true);
        };

        //in Edit Form
        const handleUpdateFriend = () => {
            //finding the index of the theFriends
            //parameter for find index equals to the selectedFriend
            const index = theFriends.findIndex((theFriend)=> theFriend === selectedFriend); 

            // add a copy of the  theFriends
            const updatedFriend = [...theFriends];
            
            //Update the selected Friend with the new Data
            updatedFriend[index] = {
                theName,
                theAge,
                theImage,
                theSex,
                theHobbies, 
            };
            setFriends(updatedFriend);
            setSelectedFriend(null);
            setIsEditing(false);

        }

  return (
    <>
    <center>
       
        <h1>{isEditing ? 'Edit your BFF' : 'Create BFF'}</h1>
            {isEditing ? (
                <>
                <p> Name: <input onChange={(e)=>{setName(e.target.value)}} type="text" 
                value={theName}/></p>

                <p> Age: <input onChange={(e)=>{setAge(e.target.value)}} type="text" 
                value={theAge}/></p>
                
                <p>Sex: <input type="radio" 
                        value="Male" 
                        checked={theSex === 'Male'} 
                        onChange={(e)=>{setSex(e.target.value)}}/>
                        <label for="male">Male</label>

                        <input type="radio" 
                        value="Female"
                        checked={theSex === 'Female'} 
                        onChange={(e)=>{setSex(e.target.value)}}/>
                        <label for="female">Female</label>
                </p>

                <p> Profile Picture URL: <input onChange={(e)=>{setImage(e.target.value)}} type="text" 
                value={theImage}/></p>

                <p> Hobbies: <input onChange={(e)=>{setHobbies(e.target.value)}} type="text"
                value={theHobbies}/> </p>
                    <button onClick={handleUpdateFriend}>Update Pokemon</button>
                </>
                

            ):
            ( 
            
                <div>
                 {/* Create Friend Form */}
                    <form>
                        <p> Name: <input onChange={(e)=>{setName(e.target.value)}} type="text"/></p>
                        <p> Age: <input onChange={(e)=>{setAge(e.target.value)}} type="text"/></p>
                            <p>Sex: <input type="radio" value="Male" checked={theSex === 'Male'} onChange={(e)=>{setSex(e.target.value)}}/>
                            <label for="male">Male</label>
                            <input type="radio" value="Female" checked={theSex === 'Female'} onChange={(e)=>{setSex(e.target.value)}} />
                            <label for="female">Female</label>
                            </p>
                        <p> Profile Picture URL:<input onChange={(e)=>{setImage(e.target.value)}} type="text"/> </p>
                        <p> Hobbies: <input onChange={(e)=>{setHobbies(e.target.value)}} type="text"/> </p>
                        <p><button type="submit" onClick={(e)=>{createFriend(e)}}>Create Friend</button></p>          
                    </form>
                </div>
        )}

        {/* Accumulation */}
        <div>
          <h2>Friends List</h2>
          {theFriends.length > 0 && (
            <div>
              {theFriends.map((element, index) => { 
                // Calculate nameColor based on the friend's gender
                let nameColor;
                if (element.theSex === 'Male') {
                  nameColor = 'Blue';
                } else {
                  nameColor = 'Pink';
                }

                let remarksColor;
                if (element.theAge >=18) {
                  remarksColor = 'Green';
                } else {
                  remarksColor = 'Red';
                }


                
                return (

                <div key={index}>
                    <img src={element.theImage} />
                    {/* Apply the calculated nameColor to the Name paragraph */}
                    <p style={{ color: nameColor }}>Name: {element.theName}</p>
                    <p>Age: {element.theAge}</p>
                    <p style={{ color: remarksColor }}>Remarks: {theRemarks}</p>
                    <p>Sex: {element.theSex}</p>
                    <p>Hobbies: {element.theHobbies}</p>
                    <button onClick={() => deleteFriend(index)}>Delete</button>
                    <button onClick={() => handleEditFriend(index)}>Edit</button>
                </div>
                
                );
              })}
            </div>
          )}
        </div>
      </center>
    </>
  )
}

export default Friendship