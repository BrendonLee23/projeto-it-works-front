import LogoMarca from "../../assets/images/logomarca.png"
import { Container, LogoImage } from "./WelcomePage-Styles";
import { Link } from "react-router-dom";

export default function WelcomePage() {

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
