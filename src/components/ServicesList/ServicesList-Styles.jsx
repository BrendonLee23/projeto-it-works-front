import styled from "styled-components";

export const Modules = styled.div`
    width: 100%;
    height: 600px;
    position: relative;
    padding: 40px 20px 60px 20px;
    display: flex;
    justify-content: flex-start; 
    flex-wrap: wrap; 
    gap: 15px;
    overflow-x: auto; 
    scrollbar-width: none; 
    -ms-overflow-style: none; 
    &::-webkit-scrollbar {
        display: none; 
    }
    scroll-snap-type: x mandatory;
    -webkit-overflow-scrolling: touch;
    
    @media (max-width: 700px) {
        justify-content:center;
        height: 100vh;
        align-items: center
    }
`;
