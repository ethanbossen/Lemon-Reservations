import React, { useReducer } from 'react';
import HeroLanding from './HeroLanding';
import Home from './Home';
import CustomersSay from './CustomersSay';
import About from './About';

const initializeTimes = () => {
    return fetchAPI(new Date());
};

const updateTimes = (state, action) => {
    switch (action.type) {
        case 'UPDATE_TIMES':
            return fetchAPI(new Date(action.payload));
        default:
            return state;
    }
};

const Main = () => {
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
export { initializeTimes };
export { updateTimes };