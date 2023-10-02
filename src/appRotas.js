import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from './pages/login/login';
import Home from "./pages/home/home";
import { AuthContext } from "./pages/contexts/auth";

export const appRotas = () => {
    const [usuario, setUsuario] = useState();

    return (
        <BrowserRouter>
            <AuthContext.Provider value={{ authenticated: usuario, use }}>
                <Routes>
                    <Route exact path="/login" element={<Login />} />
                    <Route exact path="/" element={<Home />} />
                </Routes>
            </AuthContext.Provider>
        </BrowserRouter>
    );
};
