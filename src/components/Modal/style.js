import styled from "styled-components";

export const Overlay = styled.div`
    position: fixed;
    top: 0; left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.6);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
`;

export const ModalBox = styled.div`
    background-color: ${({ theme }) => theme.colors.background};
    padding: 40px;
    border-radius: 16px;
    text-align: center;
    max-width: 400px;
    width: 90%;
    box-shadow: 0 8px 16px rgba(0,0,0,0.3);
`;

export const Title = styled.h2`
    margin-bottom: 20px;
    color: ${({ theme }) => theme.colors.secondary};
    font-family: ${({ theme }) => theme.fonts.title};
`;

export const Text = styled.p`
    margin-bottom: 24px;
    font-size: 1rem;
    color: ${({ theme }) => theme.colors.text};
`;

export const CloseButton = styled.button`
    padding: 10px 20px;
    background-color: ${({ theme }) => theme.colors.secondary};
    color: ${({ theme }) => theme.colors.textWhite};
    border: none;
    border-radius: 8px;
    font-size: 0.9rem;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
    background-color: ${({ theme }) => theme.colors.hooverButton};
    }
`;
