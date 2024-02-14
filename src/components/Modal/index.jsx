
import Button from '@mui/material/Button'

import { TEXTS } from '../../constants'

import { ModalWrapper, ModalContent, WrapperRow } from "./styles"

export const Modal = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null
    return (
        <ModalWrapper>
            <ModalContent>
                {children}
                <WrapperRow>
                    <Button 
                        variant="contained" 
                        onClick={onClose}
                        color="inherit"
                    >
                        {TEXTS.CLOSE}
                    </Button>
                </WrapperRow>
            </ModalContent>
        </ModalWrapper>
    )
}