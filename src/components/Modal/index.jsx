
import CloseIcon from '@mui/icons-material/Close'

import { ModalWrapper, ModalContent, WrapperRow } from "./styles"

export const Modal = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null
    return (
        <ModalWrapper>
            <ModalContent>
                <WrapperRow>
                    <CloseIcon onClick={onClose} /> 
                </WrapperRow>
                {children}
            </ModalContent>
        </ModalWrapper>
    )
}