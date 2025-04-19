import styled from "styled-components";

export const Container = styled.section`
    padding: 20px 0px;
    max-width: 80%;
    margin: 0 auto;
    margin-top: 52px;
    margin-bottom: 52px;
`

export const Content = styled.div`
    background-color: #F1EAEA;
    display: flex;
    width: 100%;
    padding: 0 20px;
    
`

// Left side of the contact page
export const Socials = styled.div`
    background: ${({ theme }) => theme.colors.primary};
    height: 655px;
    width: 40%;
    color: ${({ theme }) => theme.colors.textBlack};
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
    align-items: end;
    max-width: 890px;
    width: 100%;
`

export const Title = styled.h1`
    font-size: 4.8rem;
    font-weight: bold;
    text-align: left;
    max-width: 40%;
    font-family: ${({ theme }) => theme.fonts.PopPins};
    color: ${({ theme }) => theme.colors.secondary};
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
    }
`


export const Button = styled.button`
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.textWhite};
    margin-top: 20px;
    padding: 8px;
    width: 20%;
    border: none;
    border-radius: 16px;
    font-size: 0.8rem;
    font-weight: 400;
    cursor: pointer;
    transition: all 0.3s ease-in-out;

    &:hover {
        background-color: ${({ theme }) => theme.colors.secondary};
        color: ${({ theme }) => theme.colors.primary};
    }
    `

