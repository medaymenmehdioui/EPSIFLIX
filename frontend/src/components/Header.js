import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/App.css';

const Header = () => {

    const [connected, setConnected] = useState(false)

    setInterval(() =>{
    const user = localStorage.getItem("user")
    user && setConnected(true)

    } ,100)
  


    const logout = () =>{
        localStorage.removeItem("user")
        window.location.reload()
    }

    return (
        <header>
            <div className="logo">EPSIFLIX</div>
            <nav>
                <ul>
                    <li><Link to="/">Accueil</Link></li>
                    <li><Link to="/login">S'identifier</Link></li>
                    <li><Link to="/profile">Profil</Link></li>

                    {
                        connected && <li><button onClick={logout}>Logout</button></li>
                    }
                    


                </ul>
            </nav>
        </header>
    );
};

export default Header;
