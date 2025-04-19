import React from "react";
import { useParams, Link } from "react-router-dom";
import { recipes } from "../data/recipes";
import styled from "styled-components";

function RecipeDetails() {
    const { id } = useParams() 
        const recipe = recipes.find((item) => item.id === parseInt(id));
        
        if (!recipe) {
            return  <p>Recipe not found</p>
        }
        return (
            <Container>
                <BackLink to="/">← Back to recipes</BackLink>
        
                <Title>{recipe.name}</Title>
                <Image src={recipe.image} alt={recipe.name} />
        
                <Info>
                    <p><strong>Time:</strong> {recipe.time}</p>
                    <p><strong>Difficulty:</strong> {recipe.difficulty}</p>
                </Info>
        
                <SectionTitle>Ingredients</SectionTitle>
                <List>
                    {recipe.ingredients.map((ing, i) => (
                        <li key={i}>{ing}</li>
                    ))}
                </List>
        
                {/* Adicione aqui uma seção de "Preparation steps" no futuro se quiser */}
            </Container>
        );
}

export default RecipeDetails;

const Container = styled.div`
    max-width: 800px;
    margin: 80px auto;
    padding: 0 20px;
    font-family: ${({ theme }) => theme.fonts.base};
`;

const Title = styled.h1`
    font-size: 2.5rem;
    margin-bottom: 20px;
    font-family: ${({ theme }) => theme.fonts.title};
`;

const Image = styled.img`
    width: 100%;
    border-radius: 16px;
    margin-bottom: 24px;
`;

const Info = styled.div`
    font-size: 1rem;
    margin-bottom: 32px;
    color: ${({ theme }) => theme.colors.text};
`;

const SectionTitle = styled.h2`
    font-size: 1.5rem;
    margin-bottom: 12px;
`;

const List = styled.ul`
    list-style: disc;
    padding-left: 20px;
`;

const BackLink = styled(Link)`
    display: inline-block;
    margin-bottom: 20px;
    color: ${({ theme }) => theme.colors.primary};
    text-decoration: none;
    font-weight: bold;

    &:hover {
    text-decoration: underline;
    }
`
