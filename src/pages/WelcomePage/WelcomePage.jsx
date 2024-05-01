import axios from "axios";
import { useEffect, useState } from "react"
import LogoMarca from "../../assets/images/logomarca.png"
import { Container, LogoImage } from "./WelcomePage-Styles";
import { Link } from "react-router-dom";

export default function WelcomePage() {

    const [data, setData] = useState([]);
    console.log(data);

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
    }, []);

    return (
        <>
            <Container>
                <Link to="">
                    <LogoImage src={LogoMarca} alt="Logo Marca" />
                </Link>
            </Container>
        </>
    )
}

