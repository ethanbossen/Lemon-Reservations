import React, { useReducer } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import HeroLanding from './HeroLanding';
import Home from './Home';
import CustomersSay from './CustomersSay';
import About from './About';
import BookingConfirmation from "./BookingConfirmation";
import { fetchAPI } from '../api'

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
    const navigate = useNavigate();

    const submitForm = (formData) => {
        if (window.submitAPI(formData)) {
            navigate('/reservations', { state: formData });
        }
    };

    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/reservations" element={<BookingConfirmation />} />
            </Routes>
            <HeroLanding submitForm={submitForm} availableTimes={availableTimes} dispatch={dispatch} />
            <CustomersSay />
            <About />
        </div>
    );
};

export default Main;
export { initializeTimes };
export { updateTimes };
