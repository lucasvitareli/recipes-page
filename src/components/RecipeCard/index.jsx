import React from 'react';

import { 
    CardCointainer, 
    Image,
    Name,
    Info,
    TagList,
    Tag
    } from './style';

function RecipeCard( {recipe} ) {
    return (
        <CardCointainer>
            <Image src={recipe.image} alt={recipe.name} />
            <Name>{recipe.name}</Name>
            <Info>{recipe.time} | {recipe.difficulty}</Info>

            <TagList>
                {recipe.ingredients.map((ingredient,index) => (
                    <Tag key={index}>{ingredient}</Tag>
                ))}
            </TagList>
        </CardCointainer>
    );
}

export default RecipeCard;