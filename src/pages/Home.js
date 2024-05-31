import React from 'react';
import '../styles/App.css';

const Home = () => {
    return (
        <main>
            <section className="banner">
                <h1>Featured Content</h1>
                <p>Watch the latest and greatest movies and TV shows.</p>
            </section>
            <section className="categories">
                <h2>Categories</h2>
                <div className="category-list">
                    <div className="category-item">Primés</div>
                    <div className="category-item">Salué par la critique</div>
                    <div className="category-item">Succès au box-office</div>
                    <div className="category-item">Succès en Streaming</div>
                    <div className="category-item">Coups de cœur de l’équipe</div>
                </div>
            </section>
        </main>
    );
};

export default Home;
