import { auth } from "../../services/firebase"

import {
    SendMessage,
    ReceivedMessage
} from './styles'

export const Message = ({ message }) => {
    const { text, photoURL, uid } = message || ''

    const Component = uid === auth.currentUser.uid ? SendMessage : ReceivedMessage

    return (
        <Component>
            <img src={photoURL} />
            <p>{text}</p>
        </Component>
    )

}