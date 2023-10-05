import React, { useContext } from "react";

import { AuthContext } from "../../contexts/auth";

const Home = () => {
    const { logout } = useContext(AuthContext);

    const deslogar = () => {
        logout();
    };

    return (
        <div>
            <h1>Home</h1>
            <button onClick={deslogar}>logout</button>
        </div>
    );
}

export default Home;