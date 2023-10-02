import React from "react"; 
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from './pages/login/login'
import Home from "./pages/home/home";
import { AuthProvicer } from "./contexts/auth";

const AppRotas = () => {
   
    return(
        <BrowserRouter>
            <AuthProvicer>
                <Routes>
                    <Route exact path="/login" element={<Login />} />
                    <Route exact path="/" element={<Home />} />
                </Routes>
            </AuthProvicer>
        </BrowserRouter>
    );
}

export default AppRotas;
