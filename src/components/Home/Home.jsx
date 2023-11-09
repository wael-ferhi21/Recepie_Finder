import React from 'react'
import "../Home/Home.css"
import * as Icon from "react-bootstrap-icons";
function Home() {
  return (
  <div className='home-container'>
    <div className='home-banner'>
      <h2> Here You Can Find New Recepies To Try !</h2>
      <p> Obtain access to many  delecious recepies and join now  </p>
      <img src="illustration.png" alt="" />
      <button id='get-started-bt'> Find a Recepie </button>
    </div>
    <div className='home-description'>
     <h3>What you can do...</h3>
     <div id='options'>
      <div id='option'>
      <h4>Search for Recipes</h4>
      <Icon.Search style={{ width: "100px", height: "150px", color: "grey" }}/>
        <p> Enter an ingredient, dish name or use filters to find receipes.</p>
       
      </div>
      <div id='option'>
      <h4>Save recipes</h4>
            <Icon.Heart style={{ width: "100px", height: "150px", color: "#C05A5A" }}/>
             <p>Once you are logged in, you can bookmark recipes to your profile
              and add the recipe ingredients to your shopping cart! </p>
      </div>
      <div id='option'>
      <h4>Explore!</h4>
            <Icon.GlobeAmericas
              style={{ width: "100px", height: "150px", color: "#578D3E" }}
            />
            <p>Enjoy and get a taste of different cuisines!</p>
          
      </div>

    </div>
  </div>
  </div>
  )
}

export default Home