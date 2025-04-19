import React from "react";
import {
    FooterContainer,
    FooterContent,
    Logo,
    NavLinks,
    LinkItem,
    Copyright
} from "./style";

function Footer() {
    return (
        <FooterContainer>
            <FooterContent>
                <Logo>Chef Navarro</Logo>

                <NavLinks>
                    <LinkItem href='home'>Home</LinkItem>
                    <LinkItem href='#recipes'>Recipes</LinkItem>
                    <LinkItem href='#about'>About</LinkItem>
                    <LinkItem href='#contact'>Contact</LinkItem>
                </NavLinks>
            </FooterContent>

            <Copyright>
                © {new Date().getFullYear()} Thiago Navarro. All rights reserved.
            </Copyright>
        </FooterContainer>
    );
}

export default Footer;