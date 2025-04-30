import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledLink = styled(Link)`
    text-decoration: none;
    color: inherit;
`

export const CardCointainer = styled.div`
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
    padding: 16px;
    width: 100%;
    max-width: 320px;
    height: 100%; 
    min-height: 420px; 
    display: block;
    margin: 0 auto;
    align-items: center;
    gap: 12px;
    border-radius: 16px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        
`
export const Image = styled.img`
    width: 100%;
    height: 180px;
    object-fit: cover;
    border-radius: 12px;
`

export const Name = styled.h3`
    font-size: 1rem;
    font-weight: 600;
    margin-bottom: 8px;
`

export const Info = styled.p`
    font-size: 0.9rem;
    font-weight: 400;
    margin-bottom: 16px;
`

export const TagList = styled.ul`
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
    margin-top: 8px;
`
export const Tag = styled.li`
    background-color: ${({ theme }) => theme.colors.tag};
    color: ${({ theme }) => theme.colors.text};
    padding: 4px 10px;
    font-size: 0.8rem;
    border-radius: 20px;
    cursor: pointer;
    list-style: none;

    &:hover{
        transform: translateY(-2px);
    }

`