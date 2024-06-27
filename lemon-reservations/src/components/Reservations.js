import React from 'react';
import ReservationForm from './ReservationForm';

const Reservations = ({ availableTimes }) => {
    return (
        <div className="reservations">
            <h3>Make a Reservation</h3>
            <ReservationForm availableTimes={availableTimes} />
        </div>
    );
};

export default Reservations;
