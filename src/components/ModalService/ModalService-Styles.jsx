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