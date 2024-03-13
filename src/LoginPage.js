import React, { useState } from 'react'
import { userLogin } from './services/AuthServices';
import { useAuth } from './context/AuthContext';
import AuthForm from './components/AuthForm';
import { Link, useNavigate } from 'react-router-dom';

const LoginPage = ({ user, setUser }) => {
    const navigate = useNavigate();
    const {setToken} = useAuth();

    const sendLoginRequest = async() => {
        try {
            const token = await userLogin(user);
            setToken(token);
            console.log("Token: "+token);
            //navigate("/home");
        } catch (error) {
            console.error(error);
        }
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Logging in...");
        sendLoginRequest();
    }

    return (
        <main>
            <h2>Login page</h2>
            <AuthForm user={user} setUser={setUser} handleSubmit={handleSubmit}/>
            <Link to={"/home"}>Home</Link>
        </main>
    )
}

export default LoginPage