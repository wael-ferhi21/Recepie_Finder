import { useParams } from "react-router-dom";
import React, { useContext, useEffect } from 'react'
import GlobalState from "../../context";
import axios from "axios";

function RecipeDetail() {
    const {id}=useParams();
    const {recipeDetailsData,setRecipeDetailsData}=useContext(GlobalState);
    useEffect(()=>{
        async function getRecipeDetails(){
            const response=await axios.get(`https://forkify-api.herokuapp.com/api/v2/recipes?search=${id}`) ;
            const data = response.data;
            if(data?.data){
                setRecipeDetailsData(data?.data);
                
            }
              }
              getRecipeDetails()
    },[])
  return (
    <div>RecipeDetail</div>
  )
}

export default RecipeDetail