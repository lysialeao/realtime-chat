import { Message } from "../../components/Message"
import { EmptyState } from "../../components/EmptyState"
import { TEXTS } from "../../constants"

import { useMessages } from "../../hooks/useMessages"

import { Container, Form } from "./styles"

export const ChatRoom = ({ room }) => {
    const {
        msg, 
        setMsg,
        messages,
        dummy,
        sendMessage
    } = useMessages({ room })

    const render = () => {
        if (messages && messages[0]?.length >= 1) return messages[0]?.map((message, index) => <Message key={index} message={message} /> )

        return <EmptyState message={TEXTS.EMPTY_ROOM}/>
    }
    
    return (
        <Container>
        {render()}
        <div ref={dummy}/>
        <Form onSubmit={sendMessage}>
            <input type='text' value={msg} onChange={(e) => setMsg(e.target.value)}/>
            <button type="submit">enviar</button>
        </Form>
        </Container>
    )
}