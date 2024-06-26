import React, { useState } from 'react';
import Reservations from './Reservations'; // Ensure this path is correct

const HeroLanding = () => {
    const [showReservations, setShowReservations] = useState(false);

    const toggleReservations = () => {
        setShowReservations(!showReservations);
    };

    return (
        <div className="heroLandingContainer">
            <div className="heroLandingHeading">
                <h2>Little Lemon</h2>
                <h4>Chicago</h4>
            </div>
            <div>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur blanditiis dignissimos,
                    distinctio eos error et eveniet impedit laborum minima mollitia nam omnis placeat provident quam,
                    quod reiciendis rerum saepe totam.
                </p>
                <button onClick={toggleReservations}>Reserve Table</button>
            </div>
            <div>
                <img className="heroLandingImg" src="/icons_assets/bruchetta.svg" alt="Little Lemon Bruchetta"/>
            </div>
            <div className={`reservations-wrapper ${showReservations ? 'show' : ''}`}>
                <Reservations />
            </div>
        </div>
    );
};

export default HeroLanding;
