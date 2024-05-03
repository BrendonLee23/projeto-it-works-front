import styled from 'styled-components';

export const ModalOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const ModalContent = styled.div`
    background-color: #cccaca;
    padding: 0px 0px 20px 0px;
    border-radius: 5px;
    width: 600px;
    height: 400px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

export const CloseButton = styled.button`
    right: 10px;
    background-color: transparent;
    border: none;
    cursor: pointer;
    font-size: 30px;
    color: #1c2329;
`;


export const HeaderModal = styled.div`
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
export const Infos = styled.div`
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
export const FooterModal = styled.div`
    display: flex;
    padding-left: 20px;
    padding-right: 20px;
    align-items: center;
    justify-content: end;
    border-top: 1px solid #3d4039;
    height: 40px;
    a {
        text-decoration: none; 
        color: inherit; 
        &:hover {
            color: inherit; 
        }
    }
`
export const SiteButton = styled.div`
    display: flex;
    justify-content:center;
    align-items: center;
    background-color: #35a912;
    border-radius: 10px;    
    width: 100px;
    height: 40px;
    margin-top: 15px;
    cursor: pointer;
    &:hover {
        transform: scale(1.05); 
    }
    h1{
        font-family: "Roboto", "Helvetica", "Arial", sans-serif;
        color: #ffffff;
        font-weight: bold;
    }
`