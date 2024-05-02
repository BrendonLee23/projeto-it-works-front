import styled from "styled-components";

export const HeaderContainer = styled.div`
    background-color: #161616;
    width: 100%;
    height: 90px;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1); 
    display: flex;
    align-items: center;
    justify-content: center;
    img {
    width: 270px;
    height: 80px;
    transition: transform 0.2s ease; 
    }
    img:hover {
        transform: scale(1.02); 
    }
`