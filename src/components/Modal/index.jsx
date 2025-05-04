import React from "react";
import { Overlay, ModalBox, Title, Text, CloseButton } from "./style";

function Modal({ onClose }) {

    return (
        <Overlay>
            <ModalBox>
                <Title>Members Only</Title>
                <Text>This video is available for members only.</Text>
                <CloseButton onClick={onClose}>Close</CloseButton>
            </ModalBox>
        </Overlay>
    );
    
}

export default Modal;
