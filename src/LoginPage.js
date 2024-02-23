import React, { useState } from 'react'
import { userLogin } from './services/AuthServices';
import { useAuth } from './context/AuthContext';
import AuthForm from './components/AuthForm';

const LoginPage = ({ user, setUser }) => {

    const {setToken} = useAuth();
    const sendLoginRequest = async() => {
        try {
            const token = await userLogin(user);
            setToken(token);
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
        </main>
    )
}

export default LoginPage