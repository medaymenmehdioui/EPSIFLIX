import React from 'react';
import '../styles/App.css';

const Home = () => {
    const videoUrls = [
        { id: 1, title: 'Vidéo 1', url: 'https://www.youtube.com/embed/XZ1tj2R-_LY', type: 'youtube' },
        { id: 2, title: 'Vidéo 2', url: 'https://www.youtube.com/embed/-pt2X1N_R-w', type: 'youtube' },
        { id: 3, title: 'Vidéo 3', url: 'https://www.youtube.com/embed/Nx5qptdA3b8', type: 'youtube' },
        { id: 4, title: 'Vidéo 4', url: 'https://www.youtube.com/embed/dzisu_BiAiE', type: 'youtube' },
        { id: 5, title: 'Vidéo 5', url: 'https://www.youtube.com/embed/3fVy4wiRDM0', type: 'youtube' },
        { id: 6, title: 'Vidéo 6', url: 'https://www.youtube.com/embed/4Q3z2N4cBAk', type: 'youtube' },
        { id: 7, title: 'Vidéo 7', url: 'https://www.youtube.com/embed/uZgeeOq0ToM', type: 'youtube' },
        { id: 8, title: 'Vidéo 8', url: 'https://www.youtube.com/embed/f2lNVCSMj8w', type: 'youtube' },
        { id: 9, title: 'Vidéo 9', url: 'https://www.youtube.com/embed/5i_OKqqQMJQ', type: 'youtube' },
        { id: 10, title: 'Vidéo 10', url: 'https://www.youtube.com/embed/RPfGtcGahqY', type: 'youtube' },
        { id: 11, title: 'Vidéo 11', url: 'https://www.youtube.com/embed/sJhzDW5ECSU', type: 'youtube' },
        { id: 12, title: 'Vidéo 12', url: 'https://www.youtube.com/embed/A1QfpEbE734', type: 'youtube' },
        // Ajoutez plus de vidéos ici
    ];

    const user = localStorage.getItem("user")

    return (
        <main>
           {user && <h2>Welcome: {user}</h2>}
            <section className="banner">
                <h1>Contenu en vedette</h1>
                <p>Regardez les derniers films et séries TV.</p>
            </section>
            <section className="video-grid">
                <h2>Vidéos</h2>
                <div className="grid-container">
                    {videoUrls.map(video => (
                        <div className="grid-item" key={video.id}>
                            {video.type === 'youtube' ? (
                                <iframe
                                    width="450"
                                    height="315"
                                    src={video.url}
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    title={video.title}
                                ></iframe>
                            ) : (
                                <video controls src={video.url} />
                            )}
                            <p>{video.title}</p>
                        </div>
                    ))}
                </div>
            </section>
        </main>
    );
};

export default Home;
