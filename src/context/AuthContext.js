import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ chidren }) => {
    const [authToken, setAuthToken] = useState('');

    const setToken = (token) => {
        setAuthToken(token);
    };

    return (
        <AuthContext.Provider value={{authToken, setToken}}>
            {chidren}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);