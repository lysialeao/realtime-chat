import { useSignInWithGoogle } from 'react-firebase-hooks/auth'
import Button from '@mui/material/Button'
import GoogleIcon from '@mui/icons-material/Google'

import banner from '../../assets/undraw_coffee_with_friends.svg'
import { auth } from '../../services/firebase'

import { TEXTS } from '../../constants'

import { 
    Container, 
    Content,
    Banner
} from './styles'

export const SignIn = () => {

    const [signInWithGoogle] = useSignInWithGoogle(auth)

    return (
        <Container>
                <Banner src={banner}/>
            <Content>
                <h1>{TEXTS.READY_TO_CONNECT}</h1>
                <h2>{TEXTS.CREATE_ROOMS}</h2>
                <Button 
                    variant="contained" 
                    onClick={() => signInWithGoogle()}
                    style={{backgroundColor: '#E84A27'}}
                    startIcon={<GoogleIcon />}
                >
                    {TEXTS.LOGIN_WITH_GOOGLE}
                </Button>
                </Content>
        </Container>
    )
}