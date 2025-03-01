import React, { useContext } from 'react'
import {  ModalContent, ModalOverlay , ImageModal} from './ModalStyle';
import GlobalContext from '../contexts/GlobalContext';


export default function Modal() { 

    const { openModal, setOpenModal, modalImageSrc } = useContext(GlobalContext)

    const onClose = () => setOpenModal(false)


    if (!openModal) {
        return null;
    }

    return (
        <ModalOverlay onClick={onClose} >
            <ModalContent >
                <ImageModal src={modalImageSrc} alt="Modal" />
            </ModalContent>
        </ModalOverlay>
    );

}
