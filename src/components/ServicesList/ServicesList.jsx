import { useContext, useState } from "react";
import DataContext from "../../contexts/DataContext";
import ServiceCard from "./ServiceCard/ServiceCard";
import { Modules } from "./ServicesList-Styles";
import Modal from "../ModalService/ModalService";


export default function ServicesList() {
    const { data } = useContext(DataContext);
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedService, setSelectedService] = useState(null);



    function activeDetailsModal(service) {
        setSelectedService(service);
        setModalOpen(true);
    }


    return (
        <>
            <Modules>
                {data.map((service, index) => (
                    <ServiceCard
                        key={index}
                        service={service}
                        onClick={() => activeDetailsModal(service)} />
                ))}
            </Modules>
            {modalOpen && selectedService && (
                <Modal
                    service={selectedService}
                    activeDetailsModal={() => setModalOpen(false)} /> 
            )}
        </>
    );
}
