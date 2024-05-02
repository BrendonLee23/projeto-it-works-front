import { useContext } from "react";
import styled from "styled-components";
import DataContext from "../../contexts/DataContext";
import ServiceCard from "./ServiceCard/ServiceCard";

export default function ServicesList() {
    const { data } = useContext(DataContext);

    return (
        <>
            <Modules>
                {data.map((item, index) => (
                    <ServiceCard key={index} service={item} />
                ))}
            </Modules>
        </>
    );
}

const Modules = styled.div`
    width: 100%;
    height: 400px;
    position: relative;
    padding: 20px 20px 10px 20px;
    display: flex;
    justify-content: flex-start; 
    flex-wrap: nowrap; 
    gap: 20px;
    overflow-x: auto; 
    scrollbar-width: none; 
    -ms-overflow-style: none; 
    &::-webkit-scrollbar {
        display: none; 
    }
    scroll-snap-type: x mandatory;
    -webkit-overflow-scrolling: touch;
    
    @media (max-width: 450px) {
        flex-direction: column;
        height: 100vh;
        align-items: center
    }
`;
