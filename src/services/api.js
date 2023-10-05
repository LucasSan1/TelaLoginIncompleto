import axios from "axios";

export const api = axios.create({
    baseURL: 'http://localhost:3000' // Mudar para url do banco/api
});

export const createSession = async(usuario, senha) => {
    return api.post(/*Link api/banco */, { usuario, senha})
}