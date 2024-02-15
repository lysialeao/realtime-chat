import { styled } from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  gap: 40px;

  align-items: center;
  justify-content: flex-end;

  overflow: hidden;
`

export const Form = styled.form`
  width: 100%;
  height: 50px;
  background-color: #f2f1f1;

  display: flex;
  flex-direction: row;
  justify-content: space-between;


  gap: 6px;



  border-radius: 20px;

  input {
    line-height: 1.5;
    width: 100%;
    font-size: 1rem;
    background-color: #f6f6f6;
    color: black;
    outline: none;
    border: solid 1px #a1a1a1;;
    padding:6px;
    border-radius: 6px;

  }

`