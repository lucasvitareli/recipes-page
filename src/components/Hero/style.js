import styled from "styled-components";

export const HeroContainer = styled.section`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 60px 40px;
    min-height: 60vh;
    background-color: ${({ theme }) => theme.colors.secondary};
    color: ${({ theme }) => theme.colors.textWhite};
    flex-wrap: wrap;

    @media (max-width: 768px) {
        flex-direction: column;
        padding: 40px;
    }
`;

export const HeroContentLeft = styled.div`
    flex: 1;
    display: block;
    padding: 0 20px;
    max-width: 600px;

    @media (max-width: 768px) {
        padding: 0;
        max-width: 100%;
        text-align: center;
    }
`;

export const Title = styled.h1`
    font-family: ${({ theme }) => theme.fonts.base};    
    font-size: 72px;
    line-height: 1.1;
    margin-bottom: 40px;
    text-align: left;
    
    @media (max-width: 768px) {
        font-size: 42px;
        text-align: center;
    }
`;

export const Subtitle = styled.h2`
    font-family: ${({ theme }) => theme.fonts.base};
    font-size: 22px;
    font-style: italic;
    margin-bottom: 20px;

    @media (max-width: 768px) {
        font-size: 18px;
        text-align: center;
    }
`;

export const ChefImage = styled.img`
width: 100%;
max-width: 600px;
height: auto;
margin-left: 20px;

@media (max-width: 768px) {
    margin: 20px auto 0;
    max-width: 100%;
}
`;

export const HeroContentRight = styled.div`
flex: 1;
display: block;
padding: 0 20px;
max-width: 600px;

@media (max-width: 768px) {
    padding: 0;
    max-width: 100%;
    text-align: center;
}
`
export const CTAButton = styled.button`
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.textWhite};
    border-radius: 20px;
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.2);
    padding: 12px 22px;
    font-size: 16px;
    font-weight: bold;
    cursor: pointer;
    transition: background-color 0.3s ease;
    
    &:hover {
        background-color: ${({ theme }) => theme.colors.hooverButton};
    }

    @media (max-width: 768px) {
        margin: 20px auto 0;
    }
`


