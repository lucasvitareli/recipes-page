import React from 'react';
import { Link } from 'react-router-dom';


import {
    StyledLink,
    CardCointainer,
    Image,
    Name,
    Info,
    TagList,
    Tag
} from './style';

function RecipeCard({ recipe }) {
    return (
        <StyledLink to={`/recipe/${recipe.id}`}>
            <CardCointainer>
                <Image src={recipe.image} alt={recipe.name} />
                <Name>{recipe.name}</Name>
                <Info>{recipe.time} | {recipe.difficulty}</Info>

                <TagList>
                    {recipe.ingredients.map((ingredient, index) => (
                        <Tag key={index}>{ingredient}</Tag>
                    ))}
                </TagList>
            </CardCointainer>
        </StyledLink>
    );
}

export default RecipeCard;