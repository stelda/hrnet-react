import React from 'react';
import '../css/error404.css';

function Error404Page() {
    return (
        <main className='main-content'>
            <div className="error404">
                <h1>404</h1>
                <p>Oups! La page que vous demandez n'existe pas.</p>
                <a href="/">Retourner sur la page d'accueil</a>
            </div>
        </main>
    );
}

export default Error404Page;