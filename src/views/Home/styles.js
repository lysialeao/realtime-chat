import { styled } from 'styled-components'

export const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
`

export const Content = styled.div`
    width: 100%;
    height: 100%;

    display: grid;
    grid-template-columns: 1fr 2fr;

    padding: 6px;
    gap: 6px;
    background-color: #f2f1f1;

    margin-left: 72px;


`

export const Wrapper = styled.div`
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
    gap: 6px;
`

export const NewChat = styled.div`
    width: 100%;
    height: 100%;
    
    display: flex;

    flex-direction: row;
    border-radius: 10px;
    
    align-items: center;
    justify-content: space-between;
`

export const Button = styled.button`
     border: none;
     background-color: transparent;

     color: #e74428;
     font-size: medium;
     font-weight: bold;
     cursor: pointer;

`

export const Icon = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 20px;
`
export const TopContainer = styled.div`
    width: 100%;
    height: 80px;

    display: flex;
    flex-direction: column;
    background-color: #f6f6f6;
    border-radius: 20px;

    padding: 20px;
`

export const BottomContainer = styled.div`
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
    background-color: #f6f6f6;
    padding: 20px;
    gap: 6px;
   
    border-radius: 20px;
`

export const Room = styled.div`
    width: 100%;
    height: auto;
    background-color: #f6f6f6;

    display: flex;
    flex-direction: row;

    align-items: center;
    border-bottom: 1px solid #a1a1a1;

    padding: 8px;
    gap: 8px;

    cursor: pointer;

`
export const Form = styled.form`
    display: flex;
    flex-direction: column;

    margin-top: 16px;
    gap: 8px;

    button {
        width: auto;
    }


`

export const WrapperRow = styled.div`
    display: flex;
    padding: 8px;
    gap: 8px;
    /* justify-content: ${({ justify }) => justify ?? 'flex-end'}; */
`