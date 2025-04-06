import styled from 'styled-components';

export const HeaderContainer = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: ${ ({ theme }) => theme.colors.primary};
    padding: 10px 40px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.5);
    `

export const Title = styled.h1`
    font-size: 3rem;
    font-weight: bold; 
    font-style: italic; 
    color: ${ ({ theme }) => theme.colors.textWhite};
    margin: 0;
    font-family: ${ ({ theme }) => theme.fonts.title};
    cursor: pointer;
`

export const Nav = styled.nav`
    display: flex;
    gap: 40px;
    align-items: center;
    margin: 0;
`

export const NavLink = styled.a`
    text-decoration: none;
    color: ${ ({ theme }) => theme.colors.textWhite};
    font-size: 1.2rem;
    font-family: ${ ({ theme }) => theme.fonts.NavLink};
    transition: color 0.3s ease-in-out;
    
    &:hover {
        color: ${ ({ theme }) => theme.colors.hooverLink};
    }
`

export const Button = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 6px 12px;
    border: none;
    border-radius: 22px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
    background-color: ${ ({ theme }) => theme.colors.background};
    color: ${ ({ theme }) => theme.colors.text};
    font-size: 1.2rem;
    font-family: ${ ({ theme }) => theme.fonts.NavLink};
    cursor: pointer;
    transition: background-color 0.3s ease-in-out;
    margin: 0;
    &:hover {
        background-color: ${ ({ theme }) => theme.colors.hooverButton};
        color: ${ ({ theme }) => theme.colors.textWhite};
    }
    `



    