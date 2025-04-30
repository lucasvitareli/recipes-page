import styled from 'styled-components';

export const SearchBarContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    flex-wrap: wrap;
    padding: 0 20px;
    margin: 0 120px

    @media (max-width: 768px) {
        width: 100%;
    }


`

export const Label = styled.label`
    font-family: ${({ theme }) => theme.fonts.base};
    font-size: 1.8rem;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.secondary};

    @media (max-width: 768px) {
        font-size: 1.2rem;
    }
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

    @media (max-width: 768px) {
    height: 30px;    
    padding: 0 10px;
    font-size: 1rem;
    width: 100%;
    text-align: center;
    }
`

