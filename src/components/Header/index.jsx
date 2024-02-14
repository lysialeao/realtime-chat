import { SignOut } from "../SignOut"
import { Container, Logo } from "./styles"

import  logo  from '../../assets/logo.png'

export const Header = () => {
    return (
        <Container>
            <Logo src={logo} />
            <SignOut />
        </Container>
    )
}