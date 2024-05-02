import styled from "styled-components";

export const HomeContainer = styled.div`
    background: linear-gradient(to bottom, #222222, #000000);
    width: 100%;
    height: calc(100vh - 150px); 
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    padding-bottom: 40px;
    padding-top: 50px;
    gap:10px;
    @media (max-width: 450px) {
        gap:20px;
    }
`
export const Title = styled.div`
/*     background-color: blue; */
    width: 100%;
    height: 40px;
    display: flex;
    justify-content: center;
    h1 {
        font-family: "Roboto", "Helvetica", "Arial", sans-serif;
        font-weight: bold;
        font-size: 30px;
        letter-spacing: 0.09cap;
        color: #afadad;
    }
    span {
        font-family: "Roboto", "Helvetica", "Arial", sans-serif;
        font-weight: 400;
        font-size: 30px;
        letter-spacing: 0.09cap;
        color: #5eb823;
    }
`;

export const LoadingSpinnerWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 400px; 
    `