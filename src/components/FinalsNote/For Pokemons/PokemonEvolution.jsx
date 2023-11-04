import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useState, useEffect } from "react";
function PokemonEvolution(props) {
  const {pname} = useParams();
  console.log(pname);
  return (
    <>
      Hi
    </>

  )
}

export default PokemonEvolution