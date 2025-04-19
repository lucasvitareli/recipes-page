import React, { useState } from "react";
import { recipes } from "../../data/recipes"
import RecipeCard from "../RecipeCard"
import SearchBar from "../SearchBar";

import { ListContainer, Grid } from "./style"

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
                onSearch={() => {}}
                />
            
            <Grid>
                {filteredRecipes.map((recipe => (
                    <RecipeCard key={recipe.id} recipe={recipe}  />
                )))}
            </Grid>

        </ListContainer>
    )
}

export default RecipeList