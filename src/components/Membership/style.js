import styled from "styled-components";


export const Container = styled.section`
    display: flex;
    max-width: 1280px;
    width: 100%;
    height: 100vh;
    margin: 0 auto;
    margin-top: 52px;
    margin-bottom: 52px;
    background-color: ${({ theme }) => theme.colors.secondary};
    @media (max-width: 768px) {
        flex-direction: column;
        height: auto;
        margin-top: 20px;
        margin-bottom: 20px;
    }
`

export const Content = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100%;
    width: 100%;
    @media (max-width: 768px) {
        flex-direction: column;
        align-items: center;
    }
`

export const LeftSide = styled.div`
    flex: 1;
    max-width: 620px;
    align-self: end;
    @media (max-width: 768px) {
        display: flex;
        justify-content: center;
    }
`

export const Image = styled.img`
    display: flex;
    max-width: 700px;
    position: relative;
    @media (max-width: 768px) {
        max-width: 80%;
        padding: 0 20px;
        align-items: center;
    }
`

export const RightSide = styled.div`
    flex: 2;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 24px;
    background-color: ${({ theme }) => theme.colors.primary};
    height: 100%;
    width: 100%;
    padding: 20px;
    @media (max-width: 768px) {
        gap: 16px;
        padding: 10px;
    }
`


export const Title = styled.h1`
    font-size: 6rem;
    font-weight: 800;
    color: #fff;
    text-align: center;
    font-family: "Antonio", sans-serif;
    @media (max-width: 768px) {
        font-size: 4rem;
    }
`

export const CardsContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 40px;
    width: 100%;
    text-align: center;
    margin-top: 20px;
    margin-bottom: 20px;
    @media (max-width: 768px) {
        grid-template-columns: 1fr;
        gap: 20px;
    }
`

export const BenefitCard = styled.div`
    border: 1px solid ${({ theme }) => theme.colors.textWhite};
    color: ${({ theme }) => theme.colors.textWhite};
    padding: 20px;
    border-radius: 8px;
    @media (max-width: 768px) {
        padding: 16px;
    }
`;

export const BenefitIcon = styled.div`
`;

export const BenefitTitle = styled.h4`
    font-size: 1rem;
    margin-bottom: 8px;
`;

export const BenefitText = styled.p`
    font-size: 0.9rem;
`;

export const PriceText = styled.p`
    max-width: 300px;
    text-align: center;
    color: ${({ theme }) => theme.colors.textWhite};
`

export const CTAButton = styled.button`
    background-color: ${({ theme }) => theme.colors.secondary};
    color: ${({ theme }) => theme.colors.textWhite};
    padding: 8px 22px;
    font-family: "Antonio", sans-serif;
    font-size: 2.2rem;
    font-weight: bold;
    border: none;
    border-radius: 32px;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    &:hover {
        background-color: ${({ theme }) => theme.colors.textWhite};
        color: ${({ theme }) => theme.colors.primary};
        transform: translateY(-2px);
    }
    @media (max-width: 768px) {
        font-size: 1.5rem;
        padding: 6px 18px;
    }
`