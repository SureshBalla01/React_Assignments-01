import React from 'react';
import {BrowserRouter, Route, Routes } from 'react-router-dom';
import Chat from './Component/Chat';
import Home from './Component/Home';
import Navbar from './Component/Navbar';
import SignIn from './Component/SignIn';
import SignUp from './Component/SignUp';

function App () {
  return(
    <BrowserRouter>
    <div className='App'>
      <Navbar />
      <div className='content'>
        <Routes>
          <Route exact path='/' element ={<Home/>}/>
          <Route exact path="/home" element={<Home/>} />
          <Route path="/chat" element={<Chat/>} />
          <Route path="/signIn" element={<SignIn/>} />
          <Route path="/signUp" element={<SignUp/>} />
        </Routes>
      </div>
    </div>
    </BrowserRouter>
  )
}

export default App;