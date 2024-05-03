import PropTypes from 'prop-types';
import { CloseButton, FooterModal, HeaderModal, Infos, ModalContent, ModalOverlay, SiteButton } from './ModalService-Styles';
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

export default function Modal({ service, activeDetailsModal }) { 
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
                            <h1>
                                Saiba Mais
                            </h1>
                        </SiteButton>
                    </a>
                </FooterModal>
            </ModalContent>
        </ModalOverlay>
    );
}
