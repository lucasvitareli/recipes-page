import React from 'react';
import { HeaderContainer, Title, Nav, NavLink, Button } from './style';


function Header() {
    return (
        <HeaderContainer id='home'>
            <Title>Chef Navarro</Title>
            <Nav>
                <NavLink href="#home">Home</NavLink>
                <NavLink href="#recipes">Recipes</NavLink>
                <NavLink href="#membership">Membership</NavLink>
                <NavLink href="#about">About</NavLink>
                <NavLink href="#contact">Contact</NavLink>
                {/* <Button>Sign-Up</Button> */}
            </Nav>
        </HeaderContainer>
    );
}

export default Header;