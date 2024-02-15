import Button from '@mui/material/Button'
import ExitToAppIcon from '@mui/icons-material/ExitToApp'

import { auth } from "../../services/firebase"

import { TEXTS } from '../../constants'
        
export const SignOut = () => {
    return (
        auth.currentUser && (
            <Button 
                variant="text" 
                onClick={() => auth.signOut()}
                style={{ color: '#e84a27'}}
                endIcon={<ExitToAppIcon />}
            >
                {TEXTS.LOGOUT}
            </Button>
        )
    )
}