import styled from "styled-components";

// eslint-disable-next-line react/prop-types
export default function ServiceCard({ service }) {

    return (
        <CardService>
            <HeaderCard>
                {/* eslint-disable-next-line react/prop-types */} 
                <h1>{service.Descricao}</h1>
            </HeaderCard>
        </CardService>
    );
}
const CardService = styled.div`
    width: 250px;
    height: 300px;
    border-radius: 8px;
    margin-bottom:20px;
    background-color: #6e6a6a;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
    cursor: pointer;
    transition: transform 0.3s ease; 
    &:hover {
        transform: scale(1.04); 
    }
`;
const HeaderCard = styled.div`
    width: 250px;
    height: 50px;
    background-color: #2f302e;
    border-top-right-radius: 7px;
    border-top-left-radius: 7px;
    display: flex;
    align-items: center;
    justify-content: center;
    h1{
        font-family: "Roboto", "Helvetica", "Arial", sans-serif;
        font-weight: 450;
        font-size: 18px;
        letter-spacing: 0.09cap;
        color: #5ea329;
        text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5); 
    }
`