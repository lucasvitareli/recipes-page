import styled, { keyframes } from "styled-components";

// Define a keyframe para a animação
const slideInFromRight = keyframes`
    from {
    opacity: 0;
    transform: translateX(100%);
    }
    
    to {
    opacity: 1;
    transform: translateX(0);
    }
`;

const slideInFromLeft = keyframes`
    from {
    opacity: 0;
    transform: translateX(-100%);
    }

    to {
    opacity: 1;
    transform: translateX(0);
    }
`;

export const Container = styled.section`
    padding: 0px;
    max-width: 80%;
    margin: 0 auto;
    margin-bottom: 52px;

    @media (max-width: 768px) {
        padding: 10px 0px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`
export const Content = styled.div`
    display: flex;
    flex-direction: column;
    background-color: ${({ theme }) => theme.colors.background};
    width: 100%;
    padding: 20px 20px;

    @media (max-width: 768px) {
        padding: 0;
    }

`

export const Title = styled.h1`
    font-weight: bold;
    text-align: left;
    max-width: 40%;
    position: Absolute;
    top: 180;
    font-family: ${({ theme }) => theme.fonts.PopPins};
    color: ${({ theme }) => theme.colors.secondary};
    font-size: 4.8rem;
    margin-top: 130px;

    @media (max-width: 768px) {
        font-size: 3rem;
        text-align: center;
        max-width: 100%;
        margin-top: 0;
        margin-bottom: 10px;
        width: 100%;
        position: relative;
    }
`

export const Awards = styled.div`
    display: flex;
    justify-content: left;
    max-width: 80%;
    margin-right: auto;
    align-items: top;

    @media (max-width: 768px) {
        flex-direction: column;
        align-items: center;
        max-width: 100%;
        order: 2; 
    }
`

export const AwardsText = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 450px;
    text-align: left;
    margin-left: 20px;
    margin-bottom: 0px;
    width: 100%;
    animation: ${slideInFromRight} 3s ease-out;

    h2 {
        font-size: 2.5rem;
        font-style: italic;
    }

    p {
        font-size: 1.2rem;
        font-weight: 400;
        line-height: 1.5;
    }

    @media (max-width: 768px) {
        text-align: center;
        margin-left: 0;
        max-width: 90%;
        animation: none;

        h2 {
            display: none;
        }

        p {
            font-size: 1rem;
        }
    }
`
export const AwardsImage = styled.img`
    max-width: 476px;

    @media (max-width: 768px) {
        max-width: 90%;
        margin-bottom: 10px;
    }
`
export const Experience = styled.div`
    display: flex;
    justify-content: right;
    max-width:60%;
    margin-left: auto;

    @media (max-width: 768px) {
        flex-direction: column-reverse; 
        align-items: center;
        max-width: 100%;
        order: 1; 
    }


`

export const ExperienceText = styled.div`
    display: block;
    max-width: 380px;
    margin-right: 20px;
    text-align: right;
    animation: ${slideInFromLeft} 3s ease-out;

    h2 {
        font-size: 2.5rem;
        font-style: italic;
    }

    p {
        font-size: 1.2rem;
        font-weight: 400;
        line-height: 1.5;
    }

    @media (max-width: 768px) {
        text-align: center;
        margin-right: 0;
        margin-bottom: 20px;
        max-width: 90%;
        animation: none;

        h2 {
            display: none;
            font-size: 2rem;
        }
        p {
            font-size: 1rem;
        }

    }
`

export const ExperienceImage = styled.img`
max-height: 565px;

    @media (max-width: 768px) {
        max-height: 400px;
        margin-bottom: 10px;
    }
`
