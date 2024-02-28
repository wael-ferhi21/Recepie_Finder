import React, { useContext } from 'react'
import '../SearchForm/SearchForm.css'
import { GlobalContext } from '../../context'
import { Display } from 'react-bootstrap-icons';



function SearchForm() {
  const { searchParam, setSearchParam,handleSubmit } = useContext(GlobalContext);

 
  return (
    <div className="container-fluid">
      <div className='search-container'>
     
        <div className='search-small-screen'>
       
          
          <form onSubmit={handleSubmit} className='form'>
         
          <input className='searchbar'
            type="text" name="mealName"
            id="mealName"
            placeholder='Search Recepie'
            value={searchParam}
            onChange={(event)=>setSearchParam(event.target.value)} />
              
         
          
            <button type="submit" className="searchbar-btn" name="ingredient" >
            
             
            Search
           
            </button>
          
       
           
         
        
          </form>
     


      
        </div>
      
       
        

      </div>






    </div>
  
    




  )
}

export default SearchForm