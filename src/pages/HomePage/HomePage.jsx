import styled from "styled-components"
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { useContext, useEffect } from "react";
import DataContext from "../../contexts/DataContext";
import axios from "axios";
import ServicesList from "../../components/ServicesList/ServicesList";

export default function HomePage() {

    const {setData} = useContext(DataContext);

    useEffect(() => {
        const fetchData = () => {
            axios.get('https://j71yi4eoc6.execute-api.sa-east-1.amazonaws.com/dev/impostograma/desafio/listarModulos', {
                headers: {
                    Authorization: 'RRwPrJsGdiwdWZ1CZj9srRtCdQ99LPeg'
                }
            })
                .then(response => {
                    setData(response.data.body);
                    console.log("Dados obtidos com sucesso!");
                })
                .catch(error => {
                    console.error('Erro:', error);
                });
        };
        fetchData();
    }, [setData]);

    return (
        <>
        <Header />
            <HomeContainer>
                <Title>
                    <h1>Nossas <span>Soluções</span></h1>
                </Title>
            <ServicesList/>
            </HomeContainer>
        <Footer />
        </>
    )
}

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
const Title = styled.div`
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


