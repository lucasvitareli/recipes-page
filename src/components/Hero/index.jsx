import React from "react";
import {
    HeroContainer,
    HeroContentLeft,
    Subtitle,
    Title,
    CTAButton,
    ChefImage,
    HeroContentRight
} from "./style";


function HeroSection() {
    return (
        <HeroContainer>
            <HeroContentLeft>
                <Title>
                    Discover delicious recipes...
                </Title>
                <Subtitle>
                    "Hi, i’m Thiago Navarro, and this is my kitchen — 
                    a place to share simple, delicious recipes made with care."
                </Subtitle>
            </HeroContentLeft>
            <ChefImage src="/public/images/hero/chef.png" alt="Chef" />
            <HeroContentRight>
                <Title>
                    So much to cook, and even more to discover ...
                </Title>
                <Subtitle>
                “Many of my favorite recipes are free — but members get exclusive tips and
                behind-the-scenes content you won’t find anywhere else.”
                </Subtitle>
                <CTAButton>Join Now</CTAButton>
            </HeroContentRight>
        </HeroContainer>
    );
}

export default HeroSection;