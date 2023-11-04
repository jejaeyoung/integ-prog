// PokemonForm.js
import React, { useState } from 'react';

const PokemonForm = () => {
  const [name, setName] = useState('');
  const [type, setType] = useState('WATER');
  const [powerLevel, setPowerLevel] = useState('');
  const [image, setImage] = useState('');
  const [pokemons, setPokemons] = useState([]);
  const [remark, setRemark] = useState('');

  const [selectedPokemon, setSelectedPokemon] = useState(null);
  const [isEditing, setIsEditing] = useState(false);


  const handleCreatePokemon = () => {
    // Validate the input kinakailangan
    if (name.length >= 3 && powerLevel >= 5 && image !== '') 
    {
      const newPokemon = {
        name,
        type,
        powerLevel,
        image,
      };
      //other way of accumulating data from input
      setPokemons([...pokemons, newPokemon]);

      // Determine the remark
      if (powerLevel >= 5 && powerLevel <= 20) {
        setRemark('Weak');
      } else if (powerLevel >= 21 && powerLevel <= 60) {
        setRemark('Quite Strong');
      } else {
        setRemark('Veteran');
      }

    
      // Clear the form fields
      setName('');
      setType('WATER');
      setPowerLevel('');
      setImage('');
    } 
    
    else 
    {
      alert('Please fill in all required fields correctly.');
    }
  };

  //delete pokemon
  const handleDeletePokemon = (index) => {
    const updatedPokemons = pokemons.filter((_, i) => i !== index);
    setPokemons(updatedPokemons);
  };

  //Handle edit
  const handleEditPokemon = (index) => {
    setSelectedPokemon(pokemons[index]);
    setIsEditing(true);
  };

  //edit form
  const handleUpdatePokemon = () => {
    // Find the index of the selected Pokemon
    const index = pokemons.findIndex((pokemon) => pokemon === selectedPokemon);

    // Create a copy of the current Pokemon list
    const updatedPokemons = [...pokemons];
 
    // Update the selected Pokemon with the new data
    updatedPokemons[index] = {
      name,
      type,
      powerLevel,
      image,
    };

    // Set the updated Pokemon list and reset the selected Pokemon
    setPokemons(updatedPokemons);
    setSelectedPokemon(null);
    setIsEditing(false);
  };


  return (
    <div>
      <h1>{isEditing ? 'Edit Pokemon' : 'Create Pokemon'}</h1>
      
      {/* True is editing */}
      {isEditing ? (
        <div>
          {/* Edit Pokemon form */}
          {/* Populate input fields with selectedPokemon data */}
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label>Type:</label>
          <select value={type} onChange={(e) => setType(e.target.value)}>
            <option value="WATER">WATER</option>
            <option value="FIRE">FIRE</option>
            <option value="ELECTRICITY">ELECTRICITY</option>
            <option value="GRASS">GRASS</option>
            <option value="PHYSICAL">PHYSICAL</option>
            <option value="PSYCHIC">PSYCHIC</option>
          </select>
          <label>Power Level:</label>
          <input
            type="number"
            value={powerLevel}
            onChange={(e) => setPowerLevel(e.target.value)}
          />
          <label>Image URL:</label>
          <input
            type="text"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
          <button onClick={handleUpdatePokemon}>Update Pokemon</button>
        </div>
      ) : 
      
      //false
      (
        <div>
          {/* Create Pokemon form */}
          {/* ... (existing code) */}
        <div>
        <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        </div>

      <div>
        <label>Type:</label>
        <select value={type} onChange={(e) => setType(e.target.value)}>
          <option value="WATER">WATER</option>
          <option value="FIRE">FIRE</option>
          <option value="ELECTRICITY">ELECTRICITY</option>
          <option value="GRASS">GRASS</option>
          <option value="PHYSICAL">PHYSICAL</option>
          <option value="PSYCHIC">PSYCHIC</option>
        </select>
      </div>

      <div>
        <label>Power Level:</label>
        <input
          type="number"
          value={powerLevel}
          onChange={(e) => setPowerLevel(e.target.value)}/>
      </div>

      <div>
        <label>Image URL:</label>
        <input
          type="text"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
      </div>

      <button onClick={handleCreatePokemon}>Create Pokemon</button>
        </div>
        
      )}
      {/* Pokemons is listahan */}
      {pokemons.length > 0 && (
        <div>
          <h2>Pokemon List</h2>
         
            {/* To retrieve all the input data in the fields */}
            {pokemons.map((element, index) => (
              <li key={index}>
                <img src={element.image} alt={element.name} />
                <p>Name: {element.name}</p>
                <p>Type: {element.type}</p>
                <p>Power Level: {element.powerLevel}</p>
                <p>Remark: {remark}</p>
                <button onClick={() => handleDeletePokemon(index)}>
                  Delete
                </button>
                <button onClick={() => handleEditPokemon(index)}>
                  Edit
                </button>


              </li>
            ))}
        
       </div>
      )} 
    </div>
  );
};

export default PokemonForm;
