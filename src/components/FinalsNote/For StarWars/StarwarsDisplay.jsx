import React from 'react'
import Form from 'react-bootstrap/Form';
import './css/Sw.css';
import Button from 'react-bootstrap/Button';
import { useState, useEffect } from "react";
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';


function StarwarsDisplay(props) {
    const {svalue} = props;
    const {id} = useParams();
    const navigate = useNavigate();
    const [thePeople, setThepeople]=useState("people");
    const [theId, setTheid]=useState(1);

    const [theData, setTheData]=useState({});



    const searchFn =()=>{
        // console.log(thePeople +' - '+theId)
        navigate(`/StarwarsDisplay/${thePeople}/${theId}`)
    }

    useEffect(() => {
     axios
       .get("https://swapi.dev/api/"+svalue+"/"+id)
       .then((response)=>{
            console.log(response.data);
            setTheData(response.data)
       })
       .catch((err)=>{
            console.log(err);
       })
    
     
    }, [thePeople, theId, svalue, id]) //Add the relevant dependencies here that needs to be re render
    

  return (
    <>
    <div className="container">
      <div className="d-flex flex-wrap align-items-center justify-content-center">
        <div className="text-center mb-0">
          <p className="mb-0">Search For:</p>
        </div>

        <div className="mb-0">
          <Form.Select className="form-select1" onChange={(e)=>{setThepeople(e.target.value)}}>
            <option svalue={"people"}>people</option>
            <option svalue={"people"}>planets</option>
          </Form.Select>
        </div>

        <div className="d-flex flex-wrap align-items-center justify-content-center text-center mb-0">
          <p className="mb-0 container1">ID:</p>
            <div className="mb-0">
            <Form.Control className="form-control1" min={1} type="number" onChange={(e)=>{setTheid(e.target.value)}}/>
            </div>
        </div>
        <Button variant="primary" className='mb-0' onClick={()=>{searchFn()}}>Search</Button>
      </div>
    </div>

    <div className="container-sm">
        {(svalue===`people`) ?(
        <>
            <h1>{theData.name}</h1>
            <p><span style={{ fontWeight: 'bold' }}>Height:</span> {theData.height}</p>
            <p><span style={{ fontWeight: 'bold' }}>Hair Color:</span> {theData.hair_color}</p>
            <p><span style={{ fontWeight: 'bold' }}>Eye Color:</span> {theData.eye_color}</p>
            <p><span style={{ fontWeight: 'bold' }}>Skin Color:</span> {theData.skin_color}</p>
        </>
        ): (svalue===`planets`)?(
        <>
            <h1>{theData.name}</h1>
            <p><span style={{ fontWeight: 'bold' }}>Climate:</span> {theData.climate}</p>
            <p><span style={{ fontWeight: 'bold' }}>Terrain:</span> {theData.terrain}</p>
            <p><span style={{ fontWeight: 'bold' }}>Surface Water:</span> {theData.surface_water}</p>
            <p><span style={{ fontWeight: 'bold' }}>Population:</span> {theData.population}</p>
        </>):""}
    </div>
       
           
  
        
    </>
  )
}

export default StarwarsDisplay