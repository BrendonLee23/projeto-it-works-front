import { IoCheckmarkSharp } from "react-icons/io5";
import { useEffect, useState } from "react";
import PropTypes from 'prop-types'; 
import { CardService, Description, HeaderCard, Text } from "./ServiceCard-Syles";

ServiceCard.propTypes = {
    service: PropTypes.shape({
        Descricao: PropTypes.string.isRequired, 
        subModulos: PropTypes.arrayOf(
            PropTypes.shape({
                Descricao: PropTypes.string.isRequired,
            })
        ).isRequired,
    }).isRequired,
    onClick: PropTypes.func.isRequired, // Adicionando onClick como uma propriedade requerida
};

export default function ServiceCard({ service, onClick }) {
    const [itens, setItens] = useState([]);

    useEffect(() => {
        setItens(service.subModulos);
    }, [service.subModulos]);

    return (
        <CardService onClick={onClick}> 
            <HeaderCard>
                <h1>{service.Descricao}</h1>
            </HeaderCard>
            <Description>
                {itens.map((item, index) => (
                    <Text key={index}>
                        <IoCheckmarkSharp style={{ color: "#42a621" }} />
                        <p>{item.Descricao}</p>
                    </Text>
                ))}
            </Description>
        </CardService>
    );
}
