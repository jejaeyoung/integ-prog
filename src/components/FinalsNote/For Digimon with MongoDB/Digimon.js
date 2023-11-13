import React from 'react'
import axios from 'axios';
import { useState, useEffect } from "react";




function Digimon() {

const [allDigimon, setAllDigimon] = useState([]);
//For Digimon New
const [newDigimon, setNewDigimon] = useState({
    digimon_name: "",
    digimon_age: 1,
    digimon_img: "",
    digimon_element: "Fire",
    digimon_category: "Rookie",
    digimon_gender: "Male"
});

const [searchCriteria, setSearchCriteria] = useState("name");
const [searchQuery, setSearchQuery] = useState("");


const handleCreate = ()=>{
    axios.post("http://localhost:8000/api/digimon/new", newDigimon)
    .then((response) => {
        setAllDigimon([...allDigimon, response.data.TheNewDigimon]);
        console.log("New digimon has been created.");
        // Reset the form
        setNewDigimon({
            digimon_name: "",
            digimon_age: 0,
            digimon_img: "",
            digimon_element: "",
            digimon_category: "",
            digimon_gender: ""
        });
    })
    .catch((err) => {
        console.log(err);
    });

}

// only used for rendering
    useEffect(() => {
    axios.get("http://localhost:8000/api/digimon/all")
    .then((response) => {
        setAllDigimon(response.data.AllDigimons);
        console.log(response.data.AllDigimons);
    })
    .catch((err) => {
        console.log(err);
    });
    
    }, [])


    const handleDelete = (digimonId) => {
        axios.delete(`http://localhost:8000/api/delete/digimon/${digimonId}`)
            .then((response) => {
                // If the deletion is successful, update the state to remove the deleted digimon
                setAllDigimon(allDigimon.filter(digimon => digimon._id !== digimonId));
                console.log(`Digimon with ID ${digimonId} has been deleted.`);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const handleInputChange = (e) => {
        const inputName = e.target.name;
        const inputValue = e.target.value;
    
        setNewDigimon((prevDigimon) => {
            const updatedDigimon = { ...prevDigimon };
            updatedDigimon[inputName] = inputValue;
            return updatedDigimon;
        });
    };

   
    

  return (
    <>
        <center>

                <h2>Create New Digimon</h2>

                <p><input
                    type="text"
                    name="digimon_name"
                    placeholder="Name"
                    value={newDigimon.digimon_name}
                    onChange={handleInputChange}
                />
                </p>
                
                <p>
                    <form>
                      <input type="radio"  name="digimon_gender" value="Male" onChange={handleInputChange}/>
                      <label for="male">Male</label>
                      <input type="radio" id="css" name="digimon_gender" value="Female" onChange={handleInputChange}/>
                      <label for="female">Female</label>
                    </form>
                </p>

                <p><input
                    type="number"
                    name="digimon_age"
                    placeholder="Age"
                    value={newDigimon.digimon_age}
                    onChange={handleInputChange}
                />
                </p>
                <p><input
                    type="text"
                    name="digimon_img"
                    placeholder="Image URL"
                    value={newDigimon.digimon_img}
                    onChange={handleInputChange}
                />
                </p>
            
                <p>
                    <span>Digimon Element: </span>
                    <select 
                        onChange={handleInputChange} 
                        value={newDigimon.digimon_element}
                        name="digimon_element">
                            <option value="Fire">Fire</option>
                            <option value="Ice">Ice</option>
                            <option value="Water">Water</option>
                            <option value="Air">Air</option>
                            <option value="Thunder">Thunder</option>
                    </select>
                </p>

                <p>
                    <span>Digimon Category: </span>
                    <select
                        name='digimon_category'
                        onChange={handleInputChange}
                        value={newDigimon.digimon_category}>
                            <option value="Rookie">Rookie</option>
                            <option value="Master">Master</option>
                            <option value="Champion">Champion</option>
                    </select>
                </p>
                <button onClick={(e)=>{handleCreate(e)}}>Create</button>
        </center>

    <center>
             
        <hr/>
            <p>
                  <select
                      value={searchCriteria}
                      onChange={(e)=>{setSearchCriteria(e.target.value)}}
                      name="searchCriteria"
                  >
                      <option value="name">Name</option>
                      <option value="category">Category</option>
                      <option value="element">Element</option>
                  </select>
                  <input
                      type="text"
                      placeholder={`Search by ${searchCriteria}`}
                      value={searchQuery}
                      onChange={(e)=>{setSearchQuery(e.target.value)}}
                  />
            </p>
        {allDigimon.filter((element) => {
    // Filter based on the selected search criteria and query
    if (searchCriteria === "name") {
      return element.digimon_name.includes(searchQuery);
    } else if (searchCriteria === "category") {
      return element.digimon_category.includes(searchQuery);
    } else if (searchCriteria === "element") {
      return element.digimon_element.includes(searchQuery);
    }
    return true; // Return all Digimon if no criteria or query is specified
  })
        .map((element,index)=>{
            return<>
            <div key={index}>
                <p>Digimon Name: {element.digimon_name}</p>
                <p>Digimon Gender: {element.digimon_gender}</p>
                <p>Digimon Age: {element.digimon_age}</p>
                <p>Digimon Category: {element.digimon_category}</p>
                <p>Digimon Element: {element.digimon_element}</p>
                <p>Image: <img width="150" height="150" src={element.digimon_img} alt='digimonimage'></img></p>
                <p><button onClick={() => handleDelete(element._id)}>Delete</button></p>
               
                <hr/>
            </div>
            </>
        })}
    </center>
    <p>Hi</p>
   
  
    </>
  )
}

export default Digimon
