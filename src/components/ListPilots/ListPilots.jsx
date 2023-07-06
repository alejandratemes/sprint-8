import React, { useEffect, useState } from 'react';
// import axios from 'axios';
import  './ListPilots.css';

export const Pilots = ({ id }) => {
    const API_URL = `https://swapi.dev/api/people/${id}`;
    const IMG_SRC = `https://starwars-visualguide.com/assets/img/characters/${id}.jpg`;
    const [pilot, setPilot] = useState([]);

    useEffect(() => {
        fetch(API_URL)
            .then((data) => data.json())
            .then((data) => {
                setPilot(data);
            });
    }, [API_URL, setPilot]);

    return (
        <div key={pilot.name} className="pilot-card" style={{ backgroundImage: `url(${IMG_SRC})` }}>
            <div className="title-box">
                <h3>{pilot.name}</h3>
            </div>
            <div className="info">
                <p>
                    <b>Height</b>: {pilot.height} cm
                </p>
                <p>
                    <b>Weight</b>: {pilot.mass} kg
                </p>
                <p>
                    <b>Birth Year</b>: {pilot.birth_year}
                </p>
                <p>
                    <b>Gender</b>: {pilot.gender}
                </p>
            </div>
            <div className="color-overlay"></div>
        </div>
    );
};