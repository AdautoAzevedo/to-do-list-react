import React, { useState } from 'react'
import { userLogin } from './services/AuthServices';
import { useAuth } from './context/AuthContext';
import AuthForm from './components/AuthForm';
import { Link, useNavigate } from 'react-router-dom';

const LoginPage = ({ user, setUser }) => {
    const navigate = useNavigate();
    const {setToken} = useAuth();
    const [errorMessage, setErrorMessage] = useState('');

    const sendLoginRequest = async() => {
        try {
            const token = await userLogin(user);
            console.log("Token: "+token);
            setToken(token);
            //navigate("/home");
        } catch (error) {
            console.error(error);
            setErrorMessage('Invalid username or password');
        }
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Logging in...");
        sendLoginRequest();
    }

    return (
        <main className='login-page'>
            <h2>Login page</h2>
            <AuthForm user={user} setUser={setUser} handleSubmit={handleSubmit}/>
            {errorMessage && <p>{errorMessage}</p>}
            <Link to={"/home"}>Home</Link>
        </main>
    )
}

export default LoginPage