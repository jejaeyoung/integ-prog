import React from 'react';

function FriendForm({
  isEditing,
  theName,
  theAge,
  theSex,
  theImage,
  theHobbies,
  setName,
  setAge,
  setSex,
  setImage,
  setHobbies,
  createFriend,
  handleUpdateFriend,
}) {
  return (
    <form>
      <p>Name: <input onChange={(e) => setName(e.target.value)} type="text" value={theName} /></p>
      <p>Age: <input onChange={(e) => setAge(e.target.value)} type="text" value={theAge} /></p>
      <p>
        Sex:
        <input
          type="radio"
          value="Male"
          checked={theSex === 'Male'}
          onChange={(e) => setSex(e.target.value)}
        />
        <label htmlFor="male">Male</label>
        <input
          type="radio"
          value="Female"
          checked={theSex === 'Female'}
          onChange={(e) => setSex(e.target.value)}
        />
        <label htmlFor="female">Female</label>
      </p>
      <p>Profile Picture URL: <input onChange={(e) => setImage(e.target.value)} type="text" value={theImage} /></p>
      <p>Hobbies: <input onChange={(e) => setHobbies(e.target.value)} type="text" value={theHobbies} /></p>
      <p>
        <button type="submit" onClick={(e) => (isEditing ? handleUpdateFriend() : createFriend(e))}>
          {isEditing ? 'Update Friend' : 'Create Friend'}
        </button>
      </p>
    </form>
  );
}

export default FriendForm;
