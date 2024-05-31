import React, { useState } from 'react';
import '../styles/App.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Logique de connexion ici
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
                <p>Pas encore de compte ? <a href="/signup">Inscrivez-vous</a></p>
            </section>
        </main>
    );
};

export default Login;
