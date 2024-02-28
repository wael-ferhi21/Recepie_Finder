import React from 'react'

import { useContext } from 'react'
import { GlobalContext } from '../../context'
import RecipeItem from '../RecipeItem/RecipeItem'
import '../SearchResult/SearchResult.css'

function SearchResult() {
  const { recipeList, loading,searchParam } = useContext(GlobalContext)
  if (loading) return <div> Loading...Please wait</div>
  return (
    <div className="recipe-results-container">
      <div>
        <p> Research Results for {searchParam}</p>
      </div>
      <div className='meals-grid'>
      {
        recipeList && recipeList.length > 0 ?
          recipeList.map(item => <RecipeItem item={item} />)
          : <div>
            <p> nothing to show .Please search something </p>
          </div>

      }
      </div>
    </div>

  )
}


export default SearchResult