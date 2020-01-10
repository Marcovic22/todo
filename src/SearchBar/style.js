import styled from 'styled-components'

export const Input = styled.input`
    font-family: serif;
    font-weight: ${props => props.theme.fonts.header.weight};
    flex: 1;
    height: 20px;
    height: 20 px;
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
    background: lightblue;
    border: none;
    border-radius: 3px;
    cursor: pointer;
    transition: all 0.224s;

    &:hover {
        background: blue;
        color: white;
        width: 150px;
    }
`
