import { styled } from 'styled-components'

export const Container = styled.div`
    width: 100%;
    height: 100%;

    display: grid;
    grid-template-columns: 2fr 1fr;
    flex-direction: row;
`

export const Content = styled.div`
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;

    padding: 40px;
    gap: 20px;

    background-color:#dfdfdf;
     

    h1 {
        color: #e74428;
    } 


`

export const Banner = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover

`