import React from 'react'
import '../SearchForm/SearchForm.css'

function SearchForm() {
  return (
    <div className="container-fluid">
    <div className='search-container'>
       <div className='search-small-screen'>
        <input className='searchbar'   type="text" name="mealName" id="mealName" placeholder='Search Recepie' />   
        <button className='searchbar-btn' type='submit' name='mealNmae'> 
            Search 
        </button> 
       
     
       <input type="text" name="ingredient" className="searchbar" placeholder="Search Ingredient" id="ingredient"/>
        <button type="submit" className="searchbar-btn" name="ingredient">
            Search
        </button>
        </div>
    
        <div  className='filters'>
          <select name="category" className='filter' id="category">
          <option value="">Category</option>
          </select>
          <select name="cuisine" className='filter' id="cuisine">
          <option value="">Cuisine</option>
          </select>
        </div>
       </div>
     
        
        
        
        
        
        </div> 
     
 

  
  )
}

export default SearchForm