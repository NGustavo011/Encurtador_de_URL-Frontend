import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 60vh;
`

export const FormURL = styled.form` 
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const InputURL = styled.input`
    width: 80rem;
    height: 4rem;
    padding: 25px;
    border-radius: 15px;
    font-size: 30px;
`

export const ButtonURL = styled.button`
    font-weight: bold;
    height: 7.5rem;
    width: 15rem;
    font-size: 35px;
    border-radius: 15px;
    margin-top: 40px;
    cursor: pointer;
    &:hover {
        background-color: #96C17F;
        transition: 1s ease-out;
      }
      transition: 1s ease-out;
      background-color: #B5F990;
`