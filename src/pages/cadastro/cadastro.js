import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import './styleRe.css';

const CadastrarPage = () => {
    const Navigate = useNavigate();
    const [usuario, setEmail] = useState("");
    const [senha, setSenha] = useState("");

     //Expressão para validar o formato do usuario
     const emailValidation = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    const enviar = () => {
        if (usuario.trim() === "" || senha.trim() === "") {
            alert("Por favor, preencha todos os campos.");
        } else if (!emailValidation.test(usuario)) {
            alert("Por favor, insira um usuario válido.");
        } else {
            axios.post('http://localhost:3000/cadastro',{
                email:usuario,
                senha:senha
            });  
            alert("Cadastro realizado com sucesso!");
            Navigate('/login');
        }
    }

    return (
        <div className="login">
            <h1>Cadastrar-se</h1>
            <form className="form">
                <div className="componente">
                    <label htmlFor="usuario">Usúario:</label>
                    <input name="usuario" type="usuario" id="usuario" required value={usuario} onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <div className="componente">
                    <label htmlFor="senha">Senha:</label>
                    <input name="senha" type="password" id="senha" required value={senha} onChange={(e) => setSenha(e.target.value)}/>
                </div>
                <div className="acao">
                    <button type="button" onClick={enviar}>Cadastrar-se</button>
                    <Link to="/login">Logar</Link>
                </div>
            </form>
        </div>
    );
}

export default CadastrarPage;
