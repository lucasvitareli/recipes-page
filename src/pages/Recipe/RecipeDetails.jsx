import React from "react";
import { useState } from "react";
// Import Link from react-router-dom
import { useParams, Link } from "react-router-dom";
import { recipes } from "../../data/recipes";
import Modal from "../../components/Modal"

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

    // Create a state variable to track if the user is a member or not, false by default
    const [isMember, setIsMember] = useState(false);

    const handleVideoAccess = () => {
        // If the user is a member, set the state to true
        if (isMember) {
            alert("You are a member. Here is the video");
        } else {
            // If not a member
            setShowModal(true)
        }
    };

    // Create a state variable to track if the modal is open or not, false by default
    const [showModal, setShowModal] = useState(false)

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

                    <WatchButton onClick={handleVideoAccess}>WATCH VIDEO</WatchButton>
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

            {/* This a modal that appears when the user clicks on the "WATCH VIDEO" button. */}
            {showModal && <Modal onClose={() => setShowModal(false)} />}

        </Container>
    );
}

export default RecipeDetails;


