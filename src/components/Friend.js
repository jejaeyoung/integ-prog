
import React from 'react'

const Friend=(props)=> {
    console.log(props);
    const {name, alias, ranking, image} = props.friendDetails;
  return (
    <>
        <p>Name: {name}</p>
        <p>Alias: {alias}</p>
        <p>Ranking: {ranking}</p>
        <p>Image: <img src={image} alt="gandah"></img></p>
    </>
  )
}

export default Friend
