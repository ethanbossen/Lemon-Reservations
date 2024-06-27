import React, { useState } from 'react';
import HeroLanding from './HeroLanding';
import Home from './Home';
import CustomersSay from './CustomersSay';
import About from './About';

const Main = () => {
    const [availableTimes, setAvailableTimes] = useState([
        '17:00', '18:00', '19:00', '20:00', '21:00', '22:00'
    ]);

    return (
        <div>
            <HeroLanding availableTimes={availableTimes} setAvailableTimes={setAvailableTimes} />
            <Home />
            <CustomersSay />
            <About />
        </div>
    );
};

export default Main;
