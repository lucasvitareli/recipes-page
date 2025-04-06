import styled from "styled-components";

export const HeroContainer = styled.section`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 280px 40px;
    background-color: ${({ theme }) => theme.colors.secondary};
    color: ${({ theme }) => theme.colors.textWhite};
`

export const HeroContentLeft = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0 20px;
`

export const Title = styled.h1`
    font-family: ${({ theme }) => theme.fonts.base};    
    font-size: 84px;
`

export const Subtitle = styled.h2`
    font-family: ${({ theme }) => theme.fonts.base};
    font-size: 24px;
`

export const CTAButton = styled.button`
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.textWhite};
    border: none;
    padding: 10px 20px;
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: ${({ theme }) => theme.colors.hooverButton};
    }
`

export const ChefImage = styled.img`
    flex: 1;
    max-width: 100%;
    height: auto;
    margin-left: 20px;
`
