import styled from "styled-components"
import Logo from "../../assets/images/logomarca.png"
import { FaFacebookSquare } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { TbBrandYoutube } from "react-icons/tb";
import { Link } from "react-router-dom";

export default function HomePage() {
    return (
        <>
            <Header>
                <Link to="/">
                    <img src={Logo} alt="Logo" />
                </Link>
            </Header>
            <HomeContainer>
                
            </HomeContainer>
            <Footer>
                <a href="https://www.facebook.com/itworksfiscal/" target="_blank" rel="noopener noreferrer">
                    <FaFacebookSquare style={{ color: "#4db32b", fontSize: "30px" }} />
                </a>
                <a href="https://www.instagram.com/itworksoficial/" target="_blank" rel="noopener noreferrer">
                    <BsInstagram style={{ color: "#4db32b", fontSize: "30px" }} />
                </a>
                <a href="https://www.youtube.com/@itworksoficial" target="_blank" rel="noopener noreferrer">
                    <TbBrandYoutube style={{ color: "#4db32b", fontSize: "30px" }} />
                </a>
            </Footer>
        </>
    )
}

export const HomeContainer = styled.div`
    background: linear-gradient(to bottom, #222222, #000000);
    width: 100%;
    height: calc(100vh - 150px); 
    display: flex;
    align-items: center;
    justify-content: center;
`

const Header = styled.div`
    background-color: #161616;
    width: 100%;
    height: 90px;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1); 
    display: flex;
    align-items: center;
    justify-content: center;
    img{
        width: 270px;
        height: 80px;
    }
`

const Footer = styled.div`
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
`