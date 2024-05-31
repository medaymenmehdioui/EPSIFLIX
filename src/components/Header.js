import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/App.css';

const Header = () => {
    return (
        <header>
            <div className="logo">EPSIFLIX</div>
            <nav>
                <ul>
                    <li><Link to="/">Accueil</Link></li>
                    <li><Link to="/login">Connexion</Link></li>
                    <li><Link to="/signup">Inscription</Link></li>
                    <li><Link to="/profile">Profil</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
