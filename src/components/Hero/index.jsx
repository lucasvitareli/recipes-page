import React from "react";
import {
    HeroContainer,
    HeroContentLeft,
    Subtitle,
    Title,
    CTAButton,
    ChefImage
} from "./style";


function HeroSection() {
    return (
        <HeroContainer>
            <HeroContentLeft>
                <Title>
                    Discover delicious recipes...
                </Title>
                <Subtitle>
                    ...and share them with your friends
                </Subtitle>
                <CTAButton>Get Started</CTAButton>
            </HeroContentLeft>
            <ChefImage src="/assets/chef.png" alt="Chef" />
        </HeroContainer>
    );
}

export default HeroSection;