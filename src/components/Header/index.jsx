import React, { useState } from 'react';
import {
    HeaderContainer,
    Title,
    Nav,
    NavLink,
    Burger,
    MobileMenu,
} from './style';

function Header() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <HeaderContainer id='home'>
            <Title>Chef Navarro</Title>
            {/* Burguer Button */}
            <Burger onClick={() => setIsOpen(!isOpen)}>
                ☰
            </Burger>

            {/* Default Menu - only desktop */}
            <Nav className="desktop-menu">
                <NavLink href="#home">Home</NavLink>
                <NavLink href="#recipes">Recipes</NavLink>
                <NavLink href="#membership">Membership</NavLink>
                <NavLink href="#about">About</NavLink>
                <NavLink href="#contact">Contact</NavLink>
            </Nav>

            {/* Menu Mobile (dropdown) */}
            {isOpen && (
                <MobileMenu>
                    <NavLink href="#home">Home</NavLink>
                    <NavLink href="#recipes">Recipes</NavLink>
                    <NavLink href="#membership">Membership</NavLink>
                    <NavLink href="#about">About</NavLink>
                    <NavLink href="#contact">Contact</NavLink>
                </MobileMenu>
            )}
        </HeaderContainer>
    );
}

export default Header;