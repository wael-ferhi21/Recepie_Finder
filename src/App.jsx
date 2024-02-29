
import React from 'react';
import './App.css';
import NavBar from "./components/NavBar/NavBar"
import Login from "./components/Login/Login"
import Home from "./components/Home/Home"
import SignUp from "./components/SignUp/SignUp"
import Footer from "./components/Footer/Footer";

import { Route,Routes } from 'react-router-dom';
import SearchForm from './components/SearchForm/SearchForm';
import SearchResult from './components/SearchResult/SearchResult';
import RecipeDetail from './components/RecipeDetail/RecipeDetail';


function App() {
  return(
    <div className='app'>
    <NavBar />
   
    <Routes>
    <Route path='/login' element={<Login />} />
    <Route path='/' element={<Home/>} />
    <Route path='/signup' element={<SignUp />} />
    <Route path='/search' element={<SearchForm />} />
    <Route path='/result' element={<SearchResult />} />
    <Route path='/recipe/:id' element={<RecipeDetail />} />
    </Routes>
    <Footer/>
    
    </div>

  );
}

export default App
