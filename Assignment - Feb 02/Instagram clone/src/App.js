import React from 'react';
import {BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Component/Home';
import Navbar from './Component/Navbar';

function App () {
  return(
    <BrowserRouter>
    <div className='App'>
      <Navbar />
      <div className='content'>
        <Routes>
          <Route exact path='/' element ={<Home/>}/>
          <Route exact path="/home" element={<Home/>} />
        </Routes>
      </div>
    </div>
    </BrowserRouter>
  )
}

export default App;