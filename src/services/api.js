import axios from "axios";

export const api = axios.create({
    baseURL: 'http://localhost:3000' // Mudar para url da api
});

export const createSession = async(usuario, senha) => {
    return api.post('http://localhost:3000/usuario', { usuario, senha}) // Mudar para url da api
}