import React from 'react';
import { useLocation } from 'react-router-dom';

const BookingConfirmation = () => {
    const location = useLocation();
    const formData = location.state || {};

    return (
        <div>
            <h1>Booking Confirmed!</h1>
            <p>Date: {formData.date}</p>
            <p>Time: {formData.time}</p>
            <p>Guests: {formData.guests}</p>
            <p>Occasion: {formData.occasion}</p>
        </div>
    );
};

export default BookingConfirmation;
