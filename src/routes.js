import React, { useContext } from "react"; 
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Login from './pages/login/login'
import Home from "./pages/home/home";
import { AuthProvider, AuthContext } from "./contexts/auth";

const AppRotas = () => {
    const Private = ({children}) => {
        const { authenticated, carregando } = useContext(AuthContext);

        if(carregando) {
            return(<div className="carregando"><h2>Carregando....</h2></div>);
        }
        if(!authenticated) {
            return(
                <Navigate to="/login" />
            );
        }
        return(children);
    };
   
    return(
        <BrowserRouter>
            <AuthProvider>
                <Routes>
                    <Route exact path="/login" element={<Login />} />
                    <Route exact path="/" element={<Private> <Home /> </Private>} />
                </Routes>
            </AuthProvider>
        </BrowserRouter>
    );
}

export default AppRotas;
