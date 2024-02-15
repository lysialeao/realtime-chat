import empty from '../../assets/undraw_not_found.svg'

import {
    Container, 
    Image
} from './styles'

export const EmptyState = ({ message }) => {
    return (
        <Container>
            <Image src={empty} />
            <h2>{message}</h2>
        </Container>
    )
}