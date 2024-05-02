import styled from "styled-components";

export const Description = styled.div`
    width: 100%;
    height: calc(100% - 50px); 
    flex-direction: column;
    padding: 15px 0px 10px 10px;
`;

export const Text = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 10px;
    width: 230px;
    p {
        font-family: "Roboto", "Helvetica", "Arial", sans-serif;
        font-weight: bold;
        font-size: 11px;
        letter-spacing: 0.09cap;
        color: #ccd8c4;
        text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5); 
        text-align: start;
        margin-left: 10px;
    }
    svg {
        font-size: 23px;
        margin-right: -10px;
    }
`;

export const CardService = styled.div`
    width: 260px;
    height: ${props => props.showMore ? '400px' : '300px'};
    border-radius: 8px;
    margin-bottom: 20px;
    background-color: #6e6a6a;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
    cursor: pointer;
    transition: transform 0.3s ease; 
    &:hover {
        transform: scale(1.04); 
    }
`;

export const HeaderCard = styled.div`
    width: 260px;
    height: 50px;
    background-color: #2f302e;
    border-top-right-radius: 7px;
    border-top-left-radius: 7px;
    display: flex;
    align-items: center;
    justify-content: center;
    h1 {
        font-family: "Roboto", "Helvetica", "Arial", sans-serif;
        font-weight: 450;
        font-size: 18px;
        letter-spacing: 0.09cap;
        color: #5ea329;
        text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5); 
    }
`;
