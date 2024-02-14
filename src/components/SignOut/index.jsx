import Button from '@mui/material/Button'

import { auth } from "../../services/firebase"

import { TEXTS } from '../../constants'
        
export const SignOut = () => {
    return (
        auth.currentUser && (
            <Button 
                variant="contained" 
                onClick={() => auth.signOut()}
                color="error"
            >
                {TEXTS.LOGOUT}
            </Button>
        )
    )
}