import styled from "styled-components";

export const ListContainer = styled.section`
    padding: 20px;
    max-width: 1280px;
    width: 100%;
    margin: 0 auto;
    margin-top: 52px;
    margin-bottom: 52px;

    @media (max-width: 768px) {
    padding: 40px 20px;
    }
`

export const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    grid-auto-rows: 1fr;
    gap: 24px;
    margin-top:32px;

    @media (max-width: 768px){
        align-items: center;
    }
`