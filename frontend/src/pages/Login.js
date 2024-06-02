import React, { useState } from 'react';
import '../styles/App.css';
import { useNavigate } from "react-router-dom";


const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();


    const handleSubmit = async (e) => {
        e.preventDefault();

        const response = await fetch("http://localhost:7000/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email: email.toLowerCase(), password }),
          })
          switch (response.status) {
            case 200:
              const {name} = await response.json()  
              localStorage.setItem("user",name)
              navigate("/")
              break
            case 409:
              alert("Erreur authentification")
              break
              case 500:
                alert("Erreur serveur")
                break

          }
    };

    return (
        <main>
            <section className="form-container">
                <h2>Connexion</h2>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="email">Email :</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <label htmlFor="password">Mot de passe :</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <button type="submit">Connexion</button>
                </form>
                <p>Pas encore de compte ? <a href="/signup" style={{color: '#6a5acd'}}>Inscrivez-vous</a></p>
            </section>
        </main>
    );
};

export default Login;
