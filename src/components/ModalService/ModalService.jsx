import PropTypes from 'prop-types';
import { CloseButton, ModalContent, ModalOverlay } from './ModalService-Styles';
import styled from 'styled-components';
import { GoDotFill } from "react-icons/go";

Modal.propTypes = {
    service: PropTypes.shape({
        Descricao: PropTypes.string.isRequired,
        subModulos: PropTypes.arrayOf(
            PropTypes.shape({
                Descricao: PropTypes.string.isRequired,
            })
        ).isRequired,
    }).isRequired,
    activeDetailsModal: PropTypes.func.isRequired,
};

export default function Modal({ service, activeDetailsModal }) { // Adicione activeDetailsModal como um parâmetro
    if (!service) {
        return null;
    }

    return (
        <ModalOverlay>
            <ModalContent>
                <HeaderModal>
                    <h2>Detalhes do Serviço</h2>
                    <CloseButton onClick={activeDetailsModal}>X</CloseButton>
                </HeaderModal>
                <Infos>
                    <p>Nome: {service.Descricao}</p>
                    <h3>Benefícios:</h3>
                    <ul>
                        {service.subModulos.map((submodule, index) => (
                            <li key={index}>
                                <GoDotFill color='#2aab25' />
                                {submodule.Descricao}</li>
                        ))}
                    </ul>
                </Infos>
                <FooterModal>
                    <a href="https://www.itworks.com.br/solucoes" target="_blank" rel="noopener noreferrer">
                        <SiteButton>
                            Saiba Mais
                        </SiteButton>
                    </a>
                </FooterModal>
            </ModalContent>
        </ModalOverlay>
    );
}

const HeaderModal = styled.div`
    width: 100%;
    height: 60px;
    display: flex;
    padding-left: 20px;
    padding-right: 20px;
    align-items: center;
    justify-content: space-between;
    border-top-right-radius:8px;
    border-top-left-radius:8px;
    border-bottom: 1px solid #3d4039;
    h2{
        font-family: "Roboto", "Helvetica", "Arial", sans-serif;
        font-size: 20px;
        letter-spacing: 0.09cap;
        color: #3d4039;
        font-weight:bold;
    }
`
const Infos = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: start;
    padding: 0px 20px 0px 20px;
    height: 250px;
    gap:20px;
    p{
        font-family: "Roboto", "Helvetica", "Arial", sans-serif;
    }
    h3{
        font-family: "Roboto", "Helvetica", "Arial", sans-serif;
    }

    li{
        font-family: "Roboto", "Helvetica", "Arial", sans-serif;
        margin-bottom: 10px;
    }
`
const FooterModal = styled.div`
    display: flex;
    padding-left: 20px;
    padding-right: 20px;
    align-items: center;
    justify-content: end;
    border-top: 1px solid #3d4039;
    height: 40px;
    a {
        text-decoration: none; /* Remove sublinhado */
        color: inherit; /* Herda a cor do texto do pai */
        &:hover {
            color: inherit; /* Mantém a cor do texto ao passar o mouse */
        }
    }
`
const SiteButton = styled.div`
    display: flex;
    justify-content:center;
    align-items: center;
    background-color: #44b323;
    border-radius: 10px;    
    width: 100px;
    height: 40px;
    margin-top: 15px;
    font-family: "Roboto", "Helvetica", "Arial", sans-serif;
    cursor: pointer;
    &:hover {
        transform: scale(1.05); /* Aumenta em 5% quando o mouse passa por cima */
    }
`