import React, { useState } from 'react';
import FriendForm from './FriendForm';
import FriendList from './FriendList';

function Friend() {
  const [theName, setName] = useState("");
  const [theAge, setAge] = useState(0);
  const [theImage, setImage] = useState("");
  const [theSex, setSex] = useState("");
  const [theHobbies, setHobbies] = useState("");
  const [theRemarks, setRemarks] = useState("");
  const [theFriends, setFriends] = useState([]);
  const [selectedFriend, setSelectedFriend] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  const createFriend = (e) => {
    // ... (your createFriend function code)
  };

  const deleteFriend = (index) => {
    // ... (your deleteFriend function code)
  };

  const handleEditFriend = (index) => {
    // ... (your handleEditFriend function code)
  };

  const handleUpdateFriend = () => {
    // ... (your handleUpdateFriend function code)
  };

  return (
    <>
      <center>
        <h1>{isEditing ? 'Edit your BFF' : 'Create BFF'}</h1>
        {isEditing ? (
          <FriendForm
            isEditing={isEditing}
            theName={theName}
            theAge={theAge}
            theSex={theSex}
            theImage={theImage}
            theHobbies={theHobbies}
            setName={setName}
            setAge={setAge}
            setSex={setSex}
            setImage={setImage}
            setHobbies={setHobbies}
            createFriend={createFriend}
            handleUpdateFriend={handleUpdateFriend}
          />
        ) : (
          <FriendForm
            theName={theName}
            theAge={theAge}
            theSex={theSex}
            theImage={theImage}
            theHobbies={theHobbies}
            setName={setName}
            setAge={setAge}
            setSex={setSex}
            setImage={setImage}
            setHobbies={setHobbies}
            createFriend={createFriend}
            handleUpdateFriend={handleUpdateFriend}
          />
        )}

        <FriendList
          theFriends={theFriends}
          deleteFriend={deleteFriend}
          handleEditFriend={handleEditFriend}
          theRemarks={theRemarks}
        />
      </center>
    </>
  );
}

export default Friend;
