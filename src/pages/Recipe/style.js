import styled from "styled-components";
import { Link } from "react-router-dom"; // Add this line

export const Container = styled.div`
    max-width: 1280px;
    margin: 0 auto;
    padding: 20px;
    font-family: ${({ theme }) => theme.fonts.base};
    background-color: ${({ theme }) => theme.colors.background};
`;

export const Wrapper = styled.div`
    display: flex;
    gap: 40px;
    flex-wrap: wrap;
    align-items: flex-start;
`

export const BackLink = styled(Link)`
    display: inline-block;
    margin-bottom: 20px;
    color: ${({ theme }) => theme.colors.text};
    text-decoration: none;
    font-weight: bold;

    &:hover {
        text-decoration: underline;
    }
`

// Top-left (Image)
export const ImageContainer = styled.div`
    flex: 1;
    min-width: 300px;
`

export const Image = styled.img`
    width: 400px;
    max-height: 300px;
    object-fit: cover;
    border: 1px solid ${({ theme }) => theme.colors.text};
    border-radius: 16px;
    margin-top: 40px;
`;

// Top-Right (Recipe Information)
export const Details = styled.div`
    flex: 2;
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: center;

    `

export const Title = styled.h1`
    font-size: 3.2rem;
    margin-bottom: 20px;
    font-family: ${({ theme }) => theme.fonts.title};
`;

export const Description = styled.p`
    text-align: center;
    font-size: 1.2rem;
    color: ${({ theme }) => theme.colors.text};
    margin-bottom: 20px;
`


export const Badges = styled.div`
    display: flex;
    gap: 16px;
    max-width: 318px;
    width: 100%;
    flex-wrap: wrap;
    margin-bottom: 20px;
`;

export const Badge = styled.span`
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.textWhite};
    padding: 8px 22px;
    font-size: 1rem;
    width: 150px;
    text-align: center;
    border-radius: 8px;

    span{
        font-weight: bold;
    }
`

export const WatchButton = styled.button`
    background-color: ${({ theme }) => theme.colors.watchButton};
    color: ${({ theme }) => theme.colors.textWhite};
    padding: 16px 34px;
    font-size: 1.4rem;
    border: none;
    border-radius: 24px;
    cursor: pointer;
    font-weight: bold;
    transition: background-color 0.3s ease, color 0.3s ease;
    
    &:hover {
        background-color: ${({ theme }) => theme.colors.textWhite};
        color: ${({ theme }) => theme.colors.watchButton};
        border: 1px solid ${({ theme }) => theme.colors.watchButton};
    }

`

// Bottom Content (Ingredients)

export const BottomContent = styled.div`
    display: flex;
    margin-top: 60px;
`

export const Column = styled.div`
    flex: 1;
    min-width: 280px;
`

export const SectionTitle = styled.h2`
    font-size: 3.5rem;
    margin-bottom: 20px;
    color: ${({ theme }) => theme.colors.secondary};
    font-family: ${({ theme }) => theme.fonts.title};
    
`;

export const List = styled.ul`
    list-style: ${(props) => (props.as === "ol" ? "decimal" : "disc")};
    padding-left: 20px;
    font-size: 1.2rem;
    color: ${({ theme }) => theme.colors.text};
    line-height: 1.6;
    align-items: ;

    & li {
        margin-bottom: 8px;
    }

`;

