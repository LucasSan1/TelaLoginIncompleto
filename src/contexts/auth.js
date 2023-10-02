import React, { useState, createContext } from "react";

export const AuthContext = createContext();

export const AuthProvicer = ({children}) => {
    const [user, setUser] = useState(null);

    const login = (usuario, senha) => {
        console.log("login", {usuario, senha})
        setUser({ id: "123", usuario})
    };

    const logout = () => {
        console.log("logout")
    };
    return(
       < AuthContext.Provider value={{authenticated: !!user, user, login, logout}}>
        {children}
       </AuthContext.Provider>
    );
}