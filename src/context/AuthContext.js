import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [authToken, setAuthToken] = useState('');

    useEffect(() => {
        console.log("AuthToken updated: ", authToken);
    }, [authToken]);

    const setToken = (token) => {
        console.log("token no AuthContext: ", token);
        setAuthToken(token);
        console.log("authToken no AuthContext: ", authToken);
    };

    return (
        <AuthContext.Provider value={{authToken, setToken}}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);