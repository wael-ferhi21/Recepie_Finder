
import React from 'react';
import './App.css';
import NavBar from './components/NavBar'

import { Route,Routes } from 'react-router-dom';
import Login from './components/Login/Login';
import Home from './components/Home';
import SignUp from './components/SignUp/SignUp';

function App() {
  return(
    <div className='app'>
    <NavBar />
    <Routes>
    <Route path='/login' element={<Login />} />
    <Route path='/' element={<Home/>} />
    <Route path='/signup' element={<SignUp />} />
    </Routes>
    </div>

  );
}

export default App
