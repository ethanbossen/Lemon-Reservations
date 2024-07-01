import React, { useReducer } from 'react';
import HeroLanding from './HeroLanding';
import Home from './Home';
import CustomersSay from './CustomersSay';
import About from './About';
import {Route, Routes} from "react-router-dom";
import BookingConfirmation from "./BookingConfirmation";


const initializeTimes = () => {
    return window.fetchAPI(new Date());
};

const updateTimes = (state, action) => {
    switch (action.type) {
        case 'UPDATE_TIMES':
            return window.fetchAPI(new Date(action.payload));
        default:
            return state;
    }
};

const Main = () => {
    const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());

    return (
        <div>
            <Routes>
                <Route path="/"  />
                <Route path="/about" element={<About/>} />
                <Route path="/reservations" element={<BookingConfirmation/>} />
            </Routes>
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