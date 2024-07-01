import React from 'react';
import ReservationForm from './ReservationForm';

const Reservations = ({ submitForm, availableTimes, dispatch }) => {
    return (
        <div className="reservations">
            <h3>Make a Reservation</h3>
            <ReservationForm submitForm={submitForm} availableTimes={availableTimes} dispatch={dispatch} />
        </div>
    );
};

export default Reservations;
