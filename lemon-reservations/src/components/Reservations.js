import React from 'react';
import ReservationForm from './ReservationForm';

const Reservations = ({ availableTimes, dispatch }) => {
    return (
        <div className="reservations">
            <h3>Make a Reservation</h3>
            <ReservationForm availableTimes={availableTimes} dispatch={dispatch} />
        </div>
    );
};

export default Reservations;
