import React from 'react';

function FriendList({ theFriends, deleteFriend, handleEditFriend, theRemarks }) {
  return (
    <div>
      <h2>Friends List</h2>
      {theFriends.length > 0 && (
        <div>
          {theFriends.map((element, index) => {
            // Calculate nameColor based on the friend's gender
            const nameColor = element.theSex === 'Male' ? 'Blue' : 'Pink';

            // Calculate remarksColor based on the friend's age
            const remarksColor = element.theAge >= 18 ? 'Green' : 'Red';

            return (
              <div key={index}>
                <img src={element.theImage} alt={`Friend ${index}`} />
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
  );
}

export default FriendList;
