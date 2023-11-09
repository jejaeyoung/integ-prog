//MIDTERM_MERN_INF211_QUILATAN_DANIELSEBASTIAN_00122Afgh
//INF211_POKEMON_API1_QUILATAN_DANIELSEBASTIAN_115667s@y1
import './App.css';
import Pokemon from './components/FinalsNote/For Pokemons/Pokemon';
import Starwars from './components/FinalsNote/For StarWars/Starwars';
import Profile from './components/FinalsNote/Profile';
import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

// import Pokemon from './components/FinalsNote/Pokemon';
// import ScheduleForm from './components/MernMidterm/ScheduleForm';
// import ScheduleFormMidterm from './components/MernMidterm/ScheduleFormMidterm';
import UseEpek from './components/FinalsNote/UseEpek';
import Myform from './components/Myform';
import Myfriends from './components/Myfriends';
import { BrowserRouter, Routes, Route, Link} from "react-router-dom";
import Home from './components/FinalsNote/Home';
import PokemonIndividual from './components/FinalsNote/For Pokemons/PokemonIndividual';
import PokemonEvolution from './components/FinalsNote/For Pokemons/PokemonEvolution';
import StarwarsDisplay from './components/FinalsNote/For StarWars/StarwarsDisplay';
import Digimon from './components/FinalsNote/For Digimon with MongoDB/Digimon';










function App() {

  // const setOfPeople = [
  //   {
  //     firstname:"Mark Anthony",
  //     lastname:"Tampol",
  //     age:55
  //   },
  //   {
  //     firstname:"Mary Joy",
  //     lastname:"Tempura",
  //     age:18
  //   },
  //   {
  //     firstname:"Timothy",
  //     lastname:"Daracan",
  //     age:15
  //   },
  //   {
  //     firstname:"Cynthia",
  //     lastname:"Daracan",
  //     age:35
  //   },
  //   {
  //     firstname:"Arthur",
  //     lastname:"Nyare",
  //     age:48
  //   },
  // ]

  // console.log(setOfPeople);
  //filter works by calling a variable itself
  //filter needs to have a condition
  // const below20 = setOfPeople.filter((element)=>{return element.firstname!=="Timothy"});
  // console.log(below20);

  return (
    <>


   
   
   <BrowserRouter>

   <nav className="navbar navbar-dark bg-dark navbar-expand-lg justify-content-center">
   <div className="collpase navbar-collapse-justify-content-center">
    <ul className="navbar-nav justify-content-center ">
      <li className="navbar-item">
        <Link to={"/"} className='nav-link'>Home</Link>
      </li>
      <li className="navbar-item">
        <Link to={"/Profile/John/30"} className='nav-link'>Profile</Link>
      </li>   
      <li className="navbar-item">
        <Link to={"/Pokemon"} className='nav-link'>Pokemon List</Link>
      </li>
  
      <NavDropdown title="Starwars" id="basic-nav-dropdown">
          <NavDropdown.Item href={"/StarwarsList"}>List and Films</NavDropdown.Item>
          <NavDropdown.Item href="/StarwarsDisplay">People and Planet</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
      </NavDropdown>

      <li className="navbar-item">
        <Link to={"/Digimon"} className='nav-link'>Digimon</Link>
      </li>

    </ul>
   </div>
 
   </nav>

    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/Profile/:username/:age' element={<Profile/>}></Route>
      
      <Route path='/Pokemon' element={<Pokemon/>}></Route>
      <Route path='/Pokemon/:pname' element={<PokemonIndividual/>}></Route>
      <Route path='/Pokemon/:pname/evolution' element={<PokemonEvolution/>}></Route>
      
      <Route path='/StarwarsList' element={<Starwars/>}></Route>
      <Route path='/StarwarsDisplay'  element={<StarwarsDisplay/>}></Route>
      <Route path='/StarwarsDisplay/people/:id'  element={<StarwarsDisplay svalue="people"/>}></Route>
      <Route path='/StarwarsDisplay/planets/:id'  element={<StarwarsDisplay svalue="planets"/>}></Route>
      
      <Route path='/Digimon' element={<Digimon/>}></Route>
    </Routes>
   </BrowserRouter>

    {/* <Myform></Myform> */}
    {/* <Myfriends fname={"Elmo"} ranking={1}/>
    <Myfriends fname={"Marims"} ranking={4}/>
    <Myfriends fname={"Bangenge"} ranking={7}/>
     */}
      {/* <ScheduleForm/> */}
      {/* <ScheduleFormMidterm/>
      <Pokemon/> */}
    </>
  );
}

export default App;

