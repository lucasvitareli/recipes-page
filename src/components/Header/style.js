import styled from 'styled-components';

export const HeaderContainer = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: ${({ theme }) => theme.colors.primary};
    padding: 10px 40px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.5);

    @media (max-width: 768px) {
        flex-direction: column;
        padding: 10px 20px;
    }
`

export const Title = styled.h1`
    font-size: 3rem;
    font-weight: bold; 
    font-style: italic; 
    color: ${({ theme }) => theme.colors.textWhite};
    margin: 0;
    font-family: ${({ theme }) => theme.fonts.title};
    cursor: pointer;
`

export const Burger = styled.div`
    display: none;
    font-size: 2rem;
    color: ${({ theme }) => theme.colors.textWhite};
    cursor: pointer;

    @media (max-width: 768px) {
        display: block;
        position: absoulute;
        top: 15px;
        right: 20px;
    }
`

export const MobileMenu = styled.div`
    position: absoulte;
    top: 70px;
    left: 0;
    width: 100%;
    padding: 20px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    z-index: 999;

    a{
        margin: 10px 0;
        font-size: 1.2rem;
    }

`

export const Nav = styled.nav`
    display: flex;
    gap: 40px;
    align-items: center;
    margin: 0;

    @media (max-width: 768px) {
    display: none;
    gap: 20px;
    }
`

export const NavLink = styled.a`
    text-decoration: none;
    color: ${({ theme }) => theme.colors.textWhite};
    font-size: 1.2rem;
    font-family: ${({ theme }) => theme.fonts.NavLink};
    transition: color 0.3s ease-in-out;
    
    &:hover {
        color: ${({ theme }) => theme.colors.hooverLink};
    }

    @media (max-width: 768px) {
        font-size: 1rem;
        margin-top: 10px;
    }
`

export const Button = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 6px 8px;
    border: none;
    border-radius: 22px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
    font-size: 1rem;
    font-family: ${({ theme }) => theme.fonts.NavLink};
    cursor: pointer;
    transition: background-color 0.3s ease-in-out;
    margin: 0;
    &:hover {
        background-color: ${({ theme }) => theme.colors.hooverButton};
        color: ${({ theme }) => theme.colors.textWhite};
    }

    @media (max-width: 768px) {
        font-size: 1rem;
        padding: 5px 10px;
        display: none;
    }
`



