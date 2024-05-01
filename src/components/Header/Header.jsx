import { Link } from "react-router-dom"
import Logo from "../../assets/images/logomarca.png"
import { HeaderContainer } from "./Header-Styles"

export default function Header(){
    return(
        <>
            <HeaderContainer>
                <Link to="/">
                    <img src={Logo} alt="Logo" />
                </Link>
            </HeaderContainer>
        </>
    )
}