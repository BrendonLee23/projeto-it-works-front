import { useContext } from "react";
import DataContext from "../../contexts/DataContext";
import ServiceCard from "./ServiceCard/ServiceCard";
import { Modules } from "./ServicesList-Styles";

export default function ServicesList() {
    const { data } = useContext(DataContext);

    return (
        <>
            <Modules>
                {data.map((item, index) => (
                    <ServiceCard key={index} service={item} />
                ))}
            </Modules>
        </>
    );
}

