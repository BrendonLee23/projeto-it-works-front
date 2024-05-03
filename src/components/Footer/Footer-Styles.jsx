import styled from "styled-components";

export const FooterContainer = styled.div`
    background-color: #161618;
    width: 100%;
    height: 60px;
    position: fixed; 
    bottom: 0;
    box-shadow: 0px -2px 4px rgba(0, 0, 0, 0.1);
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 40px;
    @media (max-width: 450px) {
        display: flex;
        flex-direction: column;
        height: 90px;
    }
    @media (max-width: 700px) {
        display: flex;
        flex-direction: column;
        height: 90px; 
    }
    a:hover svg {
        filter: brightness(1.9); 
    }
    a:hover {
        transform: scale(1.1); 
    }
    div{
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 40px;
        position: relative;
        padding-left: 370px;
    @media (max-width: 450px) {
        width: 300px;
        padding-left: 0px;
        position: absolute;
        margin-bottom: 30px;
    }
    @media (max-width: 700px) {
        width: 300px;
        padding-left: 0px;
        position: absolute;
        margin-bottom: 30px;
    }
    }
    h1 {
        width: 500px;
        font-family: "Roboto", "Helvetica", "Arial", sans-serif;
        font-size: 15px;
        letter-spacing: 0.09cap;
        color: #7c8176;
        text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5); 
        margin-left: 40px;
        margin-right: 0px;
        @media (max-width: 450px) {
        width: 300px;
        align-items: center;
        margin-right:-20px;
        margin-left: 10px;
        margin-top: 40px;
    }
    @media (max-width: 700px) {
        width: 300px;
        padding-left: 0px;
        margin-bottom: 30px;
        margin-top: 70px;
    }
}
`