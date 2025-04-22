import React, { useState, useEffect } from "react";
import {
    Container,
    Content,
    LeftSide,
    RightSide,
    Image,
    Title,
    CardsContainer,
    BenefitCard,
    BenefitIcon,
    BenefitTitle,
    BenefitText,
    PriceText,
    CTAButton
} from "./style";

// Import icons for cards
import { FaGift, FaTelegramPlane, FaPlayCircle } from "react-icons/fa";
import { MdOutlineMenuBook } from "react-icons/md";

function Membership() {
    // Set up a state variable to track if the screen is mobile
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkScreenSize = () => {
            setIsMobile(window.innerWidth <= 768); 
    }

    checkScreenSize();
        window.addEventListener("resize", checkScreenSize);

        return () => window.removeEventListener("resize", checkScreenSize);
}, []);

    return (
        <Container id="membership">
            <Content className="content">
                <LeftSide className="leftSide">
                    <Image
                        src={isMobile ? "/images/membership/chef-mobile.png" : "/images/membership/chef.png"}
                        alt="Chef Navarro offering exclusive contents" 
                    />
                </LeftSide>

                <RightSide className="rightSide">
                    <Title>AND THE BEST IS YET TO TASTE...</Title>

                    <CardsContainer>
                        <BenefitCard>
                            <BenefitIcon><MdOutlineMenuBook size={52} /></BenefitIcon>
                            <BenefitTitle>EXCLUSIVE RECIPES</BenefitTitle>
                            <BenefitText>Every week a new recipe only for members</BenefitText>
                        </BenefitCard>

                        <BenefitCard>
                            <BenefitIcon><FaTelegramPlane size={52} /></BenefitIcon>
                            <BenefitTitle>GROUP CHAT</BenefitTitle>
                            <BenefitText>Access to our exclusive Telegram channel</BenefitText>
                        </BenefitCard>

                        <BenefitCard>
                            <BenefitIcon><FaPlayCircle size={52} /></BenefitIcon>
                            <BenefitTitle>VIDEO TUTORIAL</BenefitTitle>
                            <BenefitText>Step-by-step videos to master the recipes</BenefitText>
                        </BenefitCard>

                        <BenefitCard>
                            <BenefitIcon><FaGift size={52} /></BenefitIcon>
                            <BenefitTitle>GIFTS</BenefitTitle>
                            <BenefitText>Monthly giveaways for members only</BenefitText>
                        </BenefitCard>
                    </CardsContainer>
                    
                    <PriceText>
                        All this and more, for  only $4.99/month
                    </PriceText>

                    <CTAButton>BECOME A MEMBER</CTAButton>
                </RightSide>
            </Content>
        </Container>
    )
}

export default Membership

