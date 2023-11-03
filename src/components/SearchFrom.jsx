import React from 'react'

function SearchFrom() {
  return (
<div className='container-fluid'>
    <div className='serach-container'>
       <div className='serach-recepies'>
        <input className='searchbar'   type="text" name="mealName" id="mealName" />   
        <button className='searchbar-btn' type='submit' name='mealNmae'> 
            Search 
        </button> 
       </div>
       <div>
       <input type="text" name="ingredient" className="searchbar" placeholder="Search Ingredient" id="ingredient"/>
        <button type="submit" className="searchbar-btn" name="ingredient">
            Search
        </button>
        <div ></div>
       </div>
    </div>
</div> 
  
  )
}

export default SearchFrom