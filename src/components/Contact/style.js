import styled from "styled-components";

export const Container = styled.section`
    padding: 0px;
    max-width: 80%;
    margin: 0 auto;
    margin-bottom: 52px;
`

export const Content = styled.div`
    background-color: #F1EAEA;
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 20px 20px;
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
    max-width: 30%;
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
    

export const Socials = styled.div`

`

export const Icons = styled.div`

`