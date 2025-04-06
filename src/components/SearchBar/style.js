import styled from 'styled-components';

export const SearchBarContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    margin: 20px 0;
    flex-wrap: wrap;
    padding: 20px;
    margin: 0 120px
`

export const Label = styled.label`
    font-family: ${({ theme }) => theme.fonts.base};
    font-size: 1.8rem;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.secondary};
`

export const Input = styled.input`
    height: 50px;
    background: ${({ theme }) => theme.colors.background};
    font-family: ${({ theme }) => theme.fonts.base};
    font-size: 1.1rem;
    font-weight: 600;
    border: 1px solid #000;
    border-radius: 10px;
    padding: 0 20px;
    color: ${({ theme }) => theme.colors.text};
`

export const Button = styled.button`
    height: 50px;
    background: ${({ theme }) => theme.colors.secondary};
    font-family: ${({ theme }) => theme.fonts.base};
    font-size: 1.1rem;
    font-weight: 600;
    border: none;
    border-radius: 12px;
    padding: 0 20px;
    color: ${({ theme }) => theme.colors.textWhite};
    cursor: pointer;

    &:hover {
        background-color: ${({ theme }) => theme.colors.hooverButton};
        transition: all 0.3s ease-in-out;
    }
`