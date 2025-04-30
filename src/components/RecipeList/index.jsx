import React, { useState } from "react";
import { recipes } from "../../data/recipes"

import RecipeCard from "../RecipeCard"
import SearchBar from "../SearchBar";

import { ListContainer, Grid } from "./style"

/* This component is for filtering the recipes. 
It will receive the recipes data from the data/recipes.js file and filter them based on the search term. */ 
function RecipeList() {
    const [searchTerm, setSearchTerm] = useState("");

    const filteredRecipes = recipes.filter((recipe) =>
    recipe.name.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())
);

    return (
        <ListContainer id="recipes">
            <SearchBar 
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
                />            
            <Grid>
                {/* Only filtered recipes will be displayed */}
                {filteredRecipes.map((recipe => (
                    <RecipeCard key={recipe.id} recipe={recipe}  />
                )))}
            </Grid>

        </ListContainer>
    )
}

export default RecipeList