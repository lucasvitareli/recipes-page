import styled from "styled-components";

export const HeroContainer = styled.section`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 40px;
    background-color: ${({ theme }) => theme.colors.secondary};
    color: ${({ theme }) => theme.colors.textWhite};
    flex-wrap: wrap;
    background: linear-gradient(to bottom, #D16321 85%, #fefefe);

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

        h1,h2 {
            display:none;
        }
    }
`;

export const Title = styled.h1`
    font-family: ${({ theme }) => theme.fonts.base};    
    font-size: 72px;
    line-height: 1.1;
    margin-bottom: 40px;
    text-align: left;
    
    @media (max-width: 768px) {
        font-size: 2rem;
        text-align: center;
    }
`;

export const Subtitle = styled.h2`
    font-family: ${({ theme }) => theme.fonts.base};
    font-size: 22px;
    font-style: italic;
    margin-bottom: 40px;

    @media (max-width: 768px) {
        font-size: 1rem;
        text-align: center;
        margin-bottom: 20px;
    }
`;

export const ChefImage = styled.img`
width: 100%;
max-width: 500px;
height: auto;

@media (max-width: 768px) {
    margin: auto 0;
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
    border: none;
    padding: 8px 22px;
    font-family: ${({ theme }) => theme.fonts.base};
    font-size: 16px;
    font-weight: bold;
    cursor: pointer;
    transition: background-color 0.3s ease;
    margin-left: 180px;
    
    &:hover {
        background-color: ${({ theme }) => theme.colors.hooverButton};
    }

    @media (max-width: 768px) {
        margin: 20px auto 0;
        font-size: 1.2rem;

    }
`


