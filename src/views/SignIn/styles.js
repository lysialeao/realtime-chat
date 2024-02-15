import { styled } from 'styled-components'

export const Container = styled.div`
    width: 100%;
    height: 100%;

    display: grid;
    grid-template-columns: 2fr 1fr;
    flex-direction: row;

    
    @media (max-width: 768px) {
        grid-template-columns: 1fr;
    }
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

    background-color:#e6e6e6;
     

    h1 {
        color: #e74428;
    } 

    h2 {
       color: #3f3d56;
    }


`

export const Banner = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover

`