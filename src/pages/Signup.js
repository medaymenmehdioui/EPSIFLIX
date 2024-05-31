import React, { useState } from 'react';
import '../styles/App.css';

const Signup = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Logique d'inscription ici
    };

    return (
        <main>
            <section className="form-container">
                <h2>Inscription</h2>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="name">Nom :</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
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
                    <button type="submit">Inscription</button>
                </form>
                <p>Déjà un compte ? <a href="/login">Connectez-vous</a></p>
            </section>
        </main>
    );
};

export default Signup;
