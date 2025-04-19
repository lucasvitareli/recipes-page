import styled from "styled-components";

export const FooterContainer = styled.footer`
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.textWhite};
    padding: 40px 20px;
    text-align: center;
`;

export const FooterContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;

    @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    max-width: 1000px;
    margin: 0 auto;
    }
`;

export const Logo = styled.h3`
    font-family: ${({ theme }) => theme.fonts.title};
    font-size: 1.5rem;
`;

export const NavLinks = styled.nav`
    display: flex;
    gap: 24px;
    flex-wrap: wrap;
`;

export const LinkItem = styled.a`
    color: ${({ theme }) => theme.colors.textWhite};
    font-size: 1rem;
    transition: opacity 0.3s;

    &:hover {
    opacity: 0.7;
    }
`;

export const Copyright = styled.p`
    margin-top: 24px;
    font-size: 0.9rem;
    color: ${({ theme }) => theme.colors.muted};
`;
