import styled from "styled-components"
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

export default function HomePage() {
    return (
        <>
        <Header />
            <HomeContainer>
                <Title>
                    <h1>Nossas <span>Soluções</span></h1>
                </Title>
            </HomeContainer>
        <Footer />
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
const Title = styled.div`
/*     background-color: blue; */
    width: 100%;
    height: 40px;
    top: 140px;
    position: absolute;
    display: flex;
    justify-content: center;
    h1{
        font-family: "Roboto", "Helvetica", "Arial", sans-serif;
        font-weight: 450;
        font-size: 30px;
        letter-spacing: 0.09cap;
        color: #afadad;
    }
    span{
        font-family: "Roboto", "Helvetica", "Arial", sans-serif;
        font-weight: 450;
        font-size: 30px;
        letter-spacing: 0.09cap;
        color: #5eb823;
    }
`

