import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { useContext, useEffect, useState } from "react";
import DataContext from "../../contexts/DataContext";
import axios from "axios";
import ServicesList from "../../components/ServicesList/ServicesList";
import Swal from 'sweetalert2';
import { useNavigate } from "react-router-dom";
import { Oval } from 'react-loading-icons';
import {  HomeContainer, LoadingSpinnerWrapper, Title } from "./HomePage-Styles";

export default function HomePage() {

    const { setData } = useContext(DataContext);
    const { VITE_API_URL,/*  VITE_AUTH_TOKEN  */ } = import.meta.env;
    const URL = VITE_API_URL;
    /*     const authToken = VITE_AUTH_TOKEN */
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const bringData = () => {
            axios.get(URL
                /* ,{
                headers: {
                    Authorization: authToken,
                }
                } */
            )
                .then(response => {
                    setData(response.data);
                    console.log("Dados obtidos com sucesso!");
                })
                .catch(error => {
                    console.error('Erro:', error);
                    Swal.fire({
                        icon: 'error',
                        title: 'Ops! Algo deu errado ☹️',
                        text: 'Houve um problema ao carregar os dados. A aplicação será reiniciada.',
                        confirmButtonText: 'OK'
                    }).then((result) => {
                        if (result.isConfirmed) {
                            navigate('/');
                        }
                    });
                })
                .finally(() => {
                    setLoading(false);
                });
        };
        bringData();
    }, [URL,/*  authToken, */ navigate, setData]);

    return (
        <>
            <Header />
            <HomeContainer>
                <Title>
                    <h1>Nossas <span>Soluções</span></h1>
                </Title>
                {loading ? (
                    <LoadingSpinnerWrapper>
                        <Oval
                            visible={true}
                            height="80"
                            width="80"
                            color="#1dd91a"
                            ariaLabel="oval-loading"
                            wrapperStyle={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                minHeight: '400px',
                            }}
                        />
                    </LoadingSpinnerWrapper>
                ) : (
                    <ServicesList />
                )}

            </HomeContainer>
            <Footer />
        </>
    )
}

