import styled from 'styled-components';

const Btn = styled.button`
    background-color: #7100a5;
    color: #fff;
    border: none;
    border-radius: 4px;
    padding: 10px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    transition-duration: .4s;
    cursor:  pointer;
`

const Inp = styled.input`
width: 20%;
padding: 12px 20px;
margin: 4px;
border: 1px solid rgb(204,204,204);
border-radius: 4px;
box-sizing: border-box;
`

export const Button = {
    Btn,
    Inp
}