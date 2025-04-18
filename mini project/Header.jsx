import React from 'react';
import {useNavigate} from "react-router-dom"
import styled from "styled-components";
import logo from "../assets/login.jpg";
export default function Header({login}){
    const navigate = useNavigate();
    return (
        <Container className="flex a-centre j-between">
            <div className="logo" >
                <img src={login} alt="logo" />
            </div>
            <button onClick={() => navigate(login ? "/login" : "/signup")}>{login ? "Log In" : "Sign In"}</button>
        </Container>
    );
}
const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 4rem;  /* Added missing semicolon */
    background-color: #141414;
    color: white;
    height: 70px;

    .logo img {
        height: 5rem;
    }

    button {
        padding: 0.5rem 1rem;
        background-color: #e50914;
        border: none;
        cursor: pointer;
        color: white;
        border-radius: 0.2rem;
        font-weight: bold;
        font-size: 1.05rem;
        transition: background-color 0.3s;

        &:hover {
            background-color: #b00610;
        }
    }
`;