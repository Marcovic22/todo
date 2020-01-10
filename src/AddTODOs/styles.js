import styled from 'styled-components'

export const Input = styled.input`
    font-family: serif;
    font-weight: 40px;
    width: 150px;
    flex: 1;
    height: 70px;
    background-color: lightgoldenrodyellow;
    border: none;
    margin-right: 10px;
    border-radius: 3px;
`

export const Container = styled.div`
    width: 360px;
    display: flex;
    align-items: center;
`

export const Button = styled.button`
    width: 100px;
    height: 20px;
    background: lightgoldenrodyellow;
    border: none;
    border-radius: 3px;
    cursor: pointer;
    transition: all 0.300s;

    &:hover {
        background: blue;
        color: white;
        width: 150px;
    }
`
export const Form = styled.div`
    flex-wrap:wrap;
    display: flex;
    width: 100vh;
    height: 400px;
    align-items: center;
    justify-items: center;
    justify-content:center;
    top: 100px;
    left: 200px;
`
export const Form2 = styled.div`
    flex-wrap:wrap;
    display: flex;
    width: 300px;
    height: 300px;
    align-items: center;
    justify-items: center;
    top: 100px;
    left: 200px;
`
