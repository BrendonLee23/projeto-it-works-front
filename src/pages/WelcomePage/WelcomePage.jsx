import axios from "axios";
import { useContext, useEffect } from "react"
import LogoMarca from "../../assets/images/logomarca.png"
import { Container, LogoImage } from "./WelcomePage-Styles";
import { Link } from "react-router-dom";
import DataContext from "../../contexts/DataContext";

export default function WelcomePage() {

    const {setData} = useContext(DataContext);

    useEffect(() => {
        const fetchData = () => {
            axios.get('https://j71yi4eoc6.execute-api.sa-east-1.amazonaws.com/dev/impostograma/desafio/listarModulos', {
                headers: {
                    Authorization: 'RRwPrJsGdiwdWZ1CZj9srRtCdQ99LPeg'
                }
            })
                .then(response => {
                    setData(response.data);
                })
                .catch(error => {
                    console.error('Erro:', error);
                });
        };

        fetchData();
    }, [setData]);

    return (
        <>
            <Container>
                <Link to="/home">
                    <LogoImage src={LogoMarca} alt="Logo Marca" />
                </Link>
            </Container>
        </>
    )
}

