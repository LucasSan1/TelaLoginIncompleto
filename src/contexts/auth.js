import React, { useState, createContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const Navigate = useNavigate();
    const [user, setUser] = useState(null);
    const [carregando, setCarregando] = useState(true);

    const login = (usuario, senha) => {
        console.log("login", {usuario, senha})
        // API para salvar o usuario e criar uma session

        const userLogado = {
            id: "123",
            usuario,
        };

        localStorage.setItem('user', JSON.stringify(userLogado))

        if(senha === "1234") {
            setUser({ userLogado })
            Navigate("/")
        }
        
    };

    const logout = () => {
        console.log("logout")
        localStorage.removeItem("user")
        setUser(null)
        Navigate("/login")
    };
    
    useEffect(() => {
        const usuarioRecuperado = localStorage.getItem("user");

        if(usuarioRecuperado) {
            setUser(JSON.parse(usuarioRecuperado));
        }

        setCarregando(false);
    }, []);

    return(
       < AuthContext.Provider value={{authenticated: !!user, user, carregando, login, logout}}>
        {children}
       </AuthContext.Provider>
    );
}
