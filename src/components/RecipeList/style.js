import styled from "styled-components";

export const ListContainer = styled.section`
    padding: 60px 20px;
    max-width: 80%;
    margin: 0 auto;

    @media (max-width: 768px) {
    padding: 40px 20px;
    }
`

export const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 24px;
    margin-top:32px;

    @media (max-width: 768px){
        align-items: center;
    }
`