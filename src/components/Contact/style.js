import styled from "styled-components";

export const Container = styled.section`
    padding: 20px;
    max-width: 1280px;
    width: 100%;
    margin: 0 auto;
    margin-top: 52px;
    margin-bottom: 52px;
`

export const Content = styled.div`
    background-color: #F1EAEA;
    display: flex;
    flex-direction: row;
    width: 100%;
    padding: 0 20px;
    
    @media (max-width: 768px) {
        flex-direction: column;
        padding:0;
    }
`

// Left side of the contact page
export const Socials = styled.div`
    background: ${({ theme }) => theme.colors.primary};
    height: auto;
    width: 40%;
    color: ${({ theme }) => theme.colors.textBlack};

    @media (max-width: 768px) {
        width: 100%;
        height: auto;
        padding: 40px 0;
    }
`

export const SocialsContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
`

export const SocialsText = styled.div`
    max-width: 350px;
    line-height: 1.2;
    font-size: 2.5rem;
    font-weight: bold;
    color: ${({ theme }) => theme.colors.textWhite};
    text-align: center; 
    
    .highlight {
        display: inline;
        max-width: 800px;
        color: ${({ theme }) => theme.colors.secondary};
    }
`

export const SocialsIcons = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 20px;
    gap: 20px;
`

export const Icon = styled.a`
    display: flex;
    color: ${({ iconColor, theme }) => iconColor || theme.colors.secondary};
    }
`


// Right side of the contact page
export const ContactContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    max-width: 890px;
    width: 100%;

    @media (max-width: 768px) {
        align-items: center;
        padding: 20px;
    }
`

export const Title = styled.h1`
    font-size: 4.8rem;
    font-weight: bold;
    text-align: left;
    max-width: 90%;
    font-family: ${({ theme }) => theme.fonts.PopPins};
    color: ${({ theme }) => theme.colors.secondary};

    @media (max-width: 768px) {
        font-size: 3rem;
        text-align: center;
        max-width: 100%;
    }
`

export const Form = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 500px;
    width: 100%;
    margin-top: 52px;

    label {
        font-size: 20px;
        font-weight: bold;
    }

    span {
        color: ${({ theme }) => theme.colors.secondary};
    }

    input {
        padding: 8px;
        font-size: 1rem;
        margin-bottom: 10px;
    }

    textarea {
        height: 250px;
        padding: 10px;
        font-family: Roboto;
        font-size: 1rem;
        resize: none; 
    }
`


export const Button = styled.button`
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.textWhite};
    margin-top: 20px;
    padding: 12px;
    width: 100%;
    max-width: 160px;
    border: none;
    border-radius: 16px;
    font-size: 1rem;
    font-weight: bold;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    align-self: flex-end;

    &:hover {
        background-color: ${({ theme }) => theme.colors.hooverButton};
    }
`
