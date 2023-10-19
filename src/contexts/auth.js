import React, { useState, createContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { api, createSession } from '../services/api'

// Define o contexto
export const AuthContext = createContext();


// Define o contexto que faz a validação dos dados
export const AuthProvider = ({children}) => {
    const Navigate = useNavigate();
    const [user, setUser] = useState(null);
    const [carregando, setCarregando] = useState(true);

    // Função que recebe o usuario e a senha da página de login e salva esses dados 
    const login = async (usuario, senha) => {

        const response = await createSession(usuario, senha);   //Alterar o createSession conforme necessario
     
        const userLogado = response.data.user;
        const token = response.data.token;
        
        localStorage.setItem('user', JSON.stringify(userLogado));
        localStorage.setItem('token', token);

        api.defaults.headers.Authorization = `Bearer ${token}` //Alterar banco para o nome do banco/api

        setUser({ userLogado })
        Navigate("/")
    };

    // Função para logout do usuario e limpeza dos dados no localStorage
    const logout = () => {
        console.log("logout");
        localStorage.removeItem("user");
        localStorage.removeItem("token");
        api.defaults.headers.Authorization = null;
        setUser(null);
        Navigate("/login");
    };
    
    // Antes da página ser renderizada, verifica se o usúario ainda esta logado no localStorage  
    useEffect(() => {
        const usuarioRecuperado = localStorage.getItem("user");
        const tokenRecuperado = localStorage.getItem("token");

        if(usuarioRecuperado && tokenRecuperado) {
            setUser(JSON.parse(usuarioRecuperado));
            api.defaults.headers.Authorization = `Bearer ${tokenRecuperado}` //Alterar banco para o nome do banco/api
        }

        setCarregando(false);
    }, []);

    // Exporta os valores/variaveis para todo o sistema
    return(
       < AuthContext.Provider value={{authenticated: !!user, user, carregando, login, logout}}>
        {children}
       </AuthContext.Provider>
    );
}