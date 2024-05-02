import styled from "styled-components";

export const Container = styled.div`
    background: linear-gradient(to bottom, #222222, #000000);
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const LogoImage = styled.img`
    width: 700px;
    height: 200px;
    cursor: pointer;
    transition: transform 0.9s ease; 
    
    @media (max-width: 425px) {
        width: 100%; 
        height: auto; 
    }
    @media (max-width: 700px) {
        width: 100%; 
        height: auto; 
    }

    &:hover {
        transform: scale(1.1); 
    }
`;