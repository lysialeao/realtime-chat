import { styled } from 'styled-components'

export const Message = styled.div`
    height: auto;
    width: auto;
    min-width: 100px;
    padding: 10px;
    gap: 10px;
    display: flex;

    align-items: center;

    border-radius: 26px;
    color: white;
    img {
        width: 35px;
        height: 35px;
        border-radius: 50%;
    }

`

export const SendMessage = styled(Message)`
    background-color:#ed6949;
    align-self: flex-end;
    flex-direction: row-reverse;
    
`

export const ReceivedMessage = styled(Message)`
    background-color: #e6e6e6;
    color: #232332;
    align-self: flex-start;

`