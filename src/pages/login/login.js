import React, { useState, useContext } from "react";
import { AuthContext } from "../../contexts/auth";
import './style.css';

const LoginPage = () => {

    //Armazena a variavel no contexto
    const { login } = useContext(AuthContext);

    // Armazena os valores digitados pelo usuario
    const [usuario, setUsuario] = useState("");
    const [senha, setSenha] = useState("");

    // Cria uma função (que recebe um evento) para enviar o usuario e a senha para a api/contexto
    const enviar = (e) => {
        e.preventDefault(); // Intercepta e interrompe a ação padrão do navegador
        login(usuario, senha); // Integração com o meu contexto/api
    }

    return (
        <div className="login">
        <h1>Login</h1>
        <form className="form" onSubmit={enviar}>
            <div className="componente">
                <label htmlFor="usuario">Usúario:</label>
                <input type="text" id="usuario" value={usuario} onChange={(e) => setUsuario(e.target.value)/*Pega o valor de usuario e seta na variavel de estado usuario */}/>
            </div>
            <div className="componente">
                <label htmlFor="senha">Senha:</label>
                <input type="password" id="senha" value={senha} onChange={(e) => setSenha(e.target.value)} />
            </div>
            <div className="acao">
                <button type="submit">Entrar</button>
            </div>
        </form>
        </div>
    );
}

export default LoginPage