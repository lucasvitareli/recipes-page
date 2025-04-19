import React from 'react';
import { HeaderContainer, Title, Nav, NavLink, Button } from './style';


function Header() {
    return (
        <HeaderContainer>
            <Title>Chef Navarro</Title>
            <Nav>
                <NavLink href="#">Home</NavLink>
                <NavLink href="#">Recipes</NavLink>
                <NavLink href="#about">About</NavLink>
                <NavLink href="#">Contact</NavLink>
                <Button>Sign-Up</Button>
            </Nav>
        </HeaderContainer>
    );
}

export default Header;