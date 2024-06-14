import React from 'react'
import styled from "styled-components";

export const StyledHeader = styled.header`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom: 2px solid black;
    padding: 20px 10px;
`;

export const Title = styled.h1`
    font-size: 24px;
`;

export const LoginForm = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 40px;
`;

export const Input = styled.input`
    margin: 10px 0px;
    padding: 10px;
    width: 200px;
    border: 2px solid black;
    border-radius: 5px;
`;

export const Button = styled.button`
    margin-top: 20px;
    padding: 10px;
    width: 220px;
    background-color: black;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;

    &:hover {
        background-color: gray;
    }
`;

const StyledComponent = () => {
    return (
        <div>StyledComponent</div>
    )
}

export default StyledComponent;