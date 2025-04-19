import React from 'react';
import {
    Container,
    Content,
    Title,
    Awards,
    AwardsText,
    AwardsImage,
    Experience,
    ExperienceText,
    ExperienceImage
} from "./style";

const AboutMe = () => {
    return (
        <Container id='about'>
            <Content>
                <Title> About Me </Title>
                <Experience>
                    <ExperienceText>
                        <h2>experience</h2>
                        <p>With over 20 years of culinary experience, I’ve had the privilege of working in some of the most prestigious kitchens in Brazil and the United States. My journey has taken me through renowned restaurants like D.O.M. in São Paulo and The French Laundry in California. Passionate about flavor, technique, and presentation, I bring dedication and creativity to every dish I prepare.</p>
                    </ExperienceText>
                    <ExperienceImage
                        src='/images/about/experience.png'
                        alt='Chef Navarro cooking'
                    />
                </Experience>
                <Awards>
                    <AwardsImage
                        src='/images/about/award.png'
                        alt='Chef Navarro cooking'
                    />
                    <AwardsText>
                        <h2>awards</h2>
                        <p>Throughout my career, I’ve been honored to receive some of the most prestigious awards in the culinary world. In 2014, I was awarded the Best Latin Cuisine Chef in São Paulo, and in 2016, I received the Golden Spoon Award in New York. Most recently, being recognized with the Dolma Culinary Trophy has been one of the greatest highlights of my journey as a chef.</p>
                    </AwardsText>
                </Awards>
            </Content>
        </Container>
    )
}

export default AboutMe