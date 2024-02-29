import { useParams } from "react-router-dom";
import React, { useContext, useEffect } from 'react'
import {GlobalContext} from "../../context";
import axios from "axios";
import "../RecipeDetail/RecipeDetail.css"
import { Row,Col } from "react-bootstrap";

export default function RecipeDetail() {
  const  {id}  = useParams();
  const {recipeDetailsData,setRecipeDetailsData} = useContext(GlobalContext);
  useEffect(() => {
    async function getRecipeDetails() {
      const response = await axios.get(
        `https://forkify-api.herokuapp.com/api/v2/recipes/${id}`
      );
      const data =response.data;

      console.log(data);
      if (data?.data) {
        setRecipeDetailsData(data?.data);
      }
    }

    getRecipeDetails();
  }, []);
  console.log(recipeDetailsData);
 
  return (

    <div className="recipe-detail-container">
       
        <div className="recipe-image">
          <img src={recipeDetailsData?.recipe.image_url} alt="" />
        </div> 
       
       
        <div className="recipe">
        <div className="recipe-title">
          <span>
            {recipeDetailsData?.recipe?.publisher}
          </span>
          <h3> {recipeDetailsData?.recipe?.title}</h3>
        </div>
        <div>
          <button className="save">
            Save as Favourite
          </button>
        </div>
        <div className="ingredients">
          <span> Ingredients :</span>
          <ul className="list">

            {recipeDetailsData?.recipe.ingredients.map(ingredient => <li>
              <span>{ingredient.quantity} {ingredient.unit}</span>
              <span className="description">{ingredient.description}</span>
            </li>)}

          </ul>
        </div>
        </div>
       
      </div>
   
   
  )
}

