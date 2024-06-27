import React, { useReducer } from 'react';
import HeroLanding from './HeroLanding';
import Home from './Home';
import CustomersSay from './CustomersSay';
import About from './About';

const Main = () => {

    const initializeTimes = () => {
        return ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
    };

    const updateTimes = (state, action) => {
        switch (action.type) {
            case 'UPDATE_TIMES':
                return initializeTimes();
            default:
                return state;
        }
    };


    const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());


    return (
        <div>
            <HeroLanding availableTimes={availableTimes} dispatch={dispatch} />
            <Home />
            <CustomersSay />
            <About />
        </div>
    );
};

export default Main;
