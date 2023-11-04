import React from 'react'
import { useState, useEffect } from "react";

function UseEpek() {
  const [count , setCount] = useState(0);
  const [resourceType, setResourceType]= useState('posts')
  const [items , setItems]= useState([])
  // useEffect(()=>{},[]);
  useEffect(()=>{
    //the code that we want to run
    console.log('The count is:', count);
    //Optional return function
    return ()=>{
      console.log('I am being cleaned up!');
    }
  },[count]); //the dependency array (kung saan papakinggan nya kung anong irarun)

 //users,posts,comments
  console.log(items)

  useEffect(() => {
    // Fetch data based on the selected resource type
    fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
      .then(response => response.json())
      .then(data => {
        setItems(data);
      });

    // Fetch user data specifically

    
  }, [resourceType]);
  //getting all users name

    

  //window resize
  const [windowWidth, setwindowWidth] = useState(window.innerWidth);
  const handleWidth =()=>{
    setwindowWidth(window.innerWidth);
  }
  useEffect(()=>{
    window.addEventListener('resize',handleWidth)
    return ()=> {
      window.removeEventListener('resize', handleWidth)
    }
  },[]);
  return (
    <>

    <div>
      <h1>Count: {count}</h1>
      <button onClick={()=> setCount(count-1)}>Decrement</button>
      <button onClick={()=> setCount(count+1)}>Increment</button>
    </div>
    <hr/>
    <div>
      <button onClick={()=> setResourceType('posts')}>Posts</button>
      <button onClick={()=> setResourceType('users')}>users</button>
      <button onClick={()=> setResourceType('comments')}>Comments</button>
    </div>
    <h1>{resourceType}</h1>

    <div>
      {/* if resource type is users */}
      {resourceType === 'users' ? (
          items.map((item) => (
            <div key={item.id}>
              <p>Name: {item.name}</p>
            </div>
          ))
        ) : null}
      {/* if resource type is post */}
        {resourceType === 'posts' ? (
          items.map((item) => (
            <div key={item.id}>
              <p>Post: {item.title}</p>
            </div>
          ))
        ) : null}
      {/* if resource type is comments */}
        {resourceType === 'comments' ? (
          items.map((item,index) => (
            <div key={item.id}>
              <p>Comment number {index+1}: {item.name}</p>
            </div>
          ))
        ) : null}
    
    </div>

    <div>{windowWidth} </div>
    </>
  )
}

export default UseEpek