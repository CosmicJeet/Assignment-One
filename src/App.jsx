import { useState } from 'react'
import Signin from './components/Signinfol/Signin'
import { BrowserRouter } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import FirstList from './components/firstlistfol/FirstList';

function App() {

  return (
    <>
    <BrowserRouter>
     <Routes> 
    <Route path='/' element={<Signin/>} />
    <Route path='firstlist' element={<FirstList/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App;
