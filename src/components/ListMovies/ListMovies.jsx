import React, { useState, useEffect } from 'react';
// import axios from 'axios';
import './ListMovies.css';

export const Films = ({ id, url }) => {
    const [film, setFilm] = useState([]);
    const IMG_SRC = `https://starwars-visualguide.com/assets/img/films/${id}.jpg`;

    useEffect(() => {
        // axios(url).then(({ data }) => {
        //     setFilm(data);
        // });
        fetch(url)
            .then((data) => data.json())
            .then((data) => setFilm(data));
    }, [url]);

    return (
        <div key={film.title}>
            <div className="film-card" style={{ backgroundImage: `url(${IMG_SRC})` }}>
                <div className="title-box">
                    <h3>{film.title}</h3>
                </div>
                <div className="info">
                    <p>
                        <b>Episode</b>: {film.episode_id}
                    </p>
                    <p>
                        <b>Director</b>: {film.director}
                    </p>
                    <p>
                        <b>Release date</b>: {film.release_date}
                    </p>
                </div>
                <div className="color-overlay"></div>
            </div>
            <div className="opening-crawl">{film.opening_crawl}</div>
        </div>
    );
};