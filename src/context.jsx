import { createContext, useState } from "react";
import axios from 'axios';
import { useNavigate } from 'react-router-dom'


export const GlobalContext = createContext(null);
export default function GlobalState({ children }) {
    const [searchParam, setSearchParam] = useState('');
    const [loading, setLoading] = useState(false);
    const [recipeList, setRecipeList] = useState([]);
    const [recipeDetailsData, setRecipeDetailsData] = useState(null);
    const navigate = useNavigate();

    async function handleSubmit(event) {
        event.preventDefault()
        try {

            const response = await axios.get(`https://forkify-api.herokuapp.com/api/v2/recipes?search=${searchParam}`);
            const data = response.data;

            if (data?.data.recipes) {

                setRecipeList(data.data.recipes)
                setLoading(false)
                setSearchParam('')
            }


        } catch (e) {
            console.log(e);
            setLoading(false)
            setSearchParam('')


        }
        navigate(`/result`);


    }
    console.log(recipeList, loading);


    return <GlobalContext.Provider value={{
        searchParam,
        loading,
        recipeList,
        setSearchParam,
        handleSubmit,
        recipeDetailsData,
        setRecipeDetailsData
    }}> {children}</GlobalContext.Provider>
}