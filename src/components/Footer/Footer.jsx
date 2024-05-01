import { FaFacebookSquare } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { TbBrandYoutube } from "react-icons/tb";
import { FooterContainer } from "./Footer-Styles";

export default function Footer() {
    return (
        <>
            <FooterContainer>
                <a href="https://www.facebook.com/itworksfiscal/" target="_blank" rel="noopener noreferrer">
                    <FaFacebookSquare style={{ color: "#4db32b", fontSize: "30px" }} />
                </a>
                <a href="https://www.instagram.com/itworksoficial/" target="_blank" rel="noopener noreferrer">
                    <BsInstagram style={{ color: "#4db32b", fontSize: "30px" }} />
                </a>
                <a href="https://www.youtube.com/@itworksoficial" target="_blank" rel="noopener noreferrer">
                    <TbBrandYoutube style={{ color: "#4db32b", fontSize: "30px" }} />
                </a>
            </FooterContainer>
        </>
    )
}

