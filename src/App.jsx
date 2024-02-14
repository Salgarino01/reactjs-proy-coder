import './style.css'
import NavBar from './NavBar'
import ContainerCardItems from './components/components item/ContainerCardItems'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DetailsItem from './components/components item/DetailsItem';
import { createContext, useState } from 'react';
function App() {

  return (

    <BrowserRouter>
    <NavBar />
      <Routes>
        <Route path='/' element={ <ContainerCardItems />} />
        <Route path='/item/:idItem' element={ <DetailsItem />} />
        <Route path='/category/:idCategory' element={ <ContainerCardItems />} />
      </Routes>
  </BrowserRouter>

  
  );
}

export default App;