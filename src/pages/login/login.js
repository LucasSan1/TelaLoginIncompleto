import React, { useState, useContext } from "react";
import { AuthContext } from "../contexts/auth";
import './style.css';

const LoginPage = () => {
    const { authenticated, login } = useContext(AuthContext);

    const [usuario, setUsuario] = useState("");
    const [senha, setSenha] = useState("");

    const enviar = (e) => {
        // e.preventDefaut();
        console.log('Enviado', {usuario, senha})
        login(usuario, senha); // integração com o meu contexto / api
    }

    return (
        <div className="login">
        <h1>Login</h1>
        <p>{String(authenticated)}</p>
        <form className="form" onSubmit={enviar}>
            <div className="componente">
                <label htmlFor="usuario">Usúario</label>
                <input type="email" id="usuario" value={usuario} onChange={(e) => setUsuario(e.target.value)}/>
            </div>
            <div className="componente">
                <label htmlFor="senha">Senha</label>
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