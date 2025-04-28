import React from "react";
// Import Link from react-router-dom
import { useParams, Link } from "react-router-dom";
import { recipes } from "../../data/recipes";

import {
    Container,
    Wrapper,
    ImageContainer,
    Image,
    Details,
    Title,
    Badges,
    Badge,
    Description,
    WatchButton,
    BottomContent,
    Column,
    SectionTitle,
    List,
    BackLink
}
    from "./style";

// this is a functional component that displays the details of a recipe
function RecipeDetails() {
    const { id } = useParams()
    const recipe = recipes.find((item) => item.id === parseInt(id));

    // if the recipe is not found, return a message
    if (!recipe) {
        return <p>Recipe not found</p>
    }

    return (
        <Container>
            <BackLink to="/#recipes">← Back to recipes</BackLink>
            <Wrapper>
                {/* Top-left (Image) */}
                <ImageContainer>
                    <Image
                        src={recipe.image}
                        alt={recipe.name} />
                </ImageContainer>

                {/* Top-right (Recipe Information) */}
                <Details>
                    <Title>{recipe.name}</Title>
                    <Description>{recipe.description}</Description>

                    <Badges>
                        <Badge>Serves: <span>{recipe.serves}</span> </Badge>
                        <Badge><span>{recipe.difficulty}</span> </Badge>
                        <Badge>Prep: <span>{recipe.prepTime}</span> </Badge>
                        <Badge>Cook: <span>{recipe.cookTime}</span> </Badge>
                    </Badges>

                    <WatchButton>WATCH VIDEO</WatchButton>
                </Details>
            </Wrapper>

            {/* Bottom Content  */}
            <BottomContent>
                <Column>
                    <SectionTitle>Ingredients</SectionTitle>
                    <List>
                        {recipe.ingredients.map((ing, i) => (
                            <li key={i}>{ing}</li>
                        ))}
                    </List>
                </Column>

                <Column>
                    <SectionTitle>Instructions</SectionTitle>
                    <List as="ol">
                        {recipe.instructions.map((step, i) => (
                            <li key={i}>{step}</li>
                        ))}
                    </List>
                </Column>
            </BottomContent>



            {/* <SectionTitle>Ingredients</SectionTitle>
                <List>
                    {recipe.ingredients.map((ing, i) => (
                        <li key={i}>{ing}</li>
                    ))}
                </List> */}

            {/* Adicione aqui uma seção de "Preparation steps" no futuro se quiser */}

        </Container>
    );
}

export default RecipeDetails;


