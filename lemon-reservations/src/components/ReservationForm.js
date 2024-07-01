import React, { useState } from 'react';

const ReservationForm = ({ availableTimes = [], dispatch, submitForm }) => {
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [guests, setGuests] = useState(1);
    const [occasion, setOccasion] = useState('');

    const handleDateChange = (e) => {
        setDate(e.target.value);
        dispatch({ type: 'UPDATE_TIMES', payload: e.target.value });
    };

    const handleTimeChange = (e) => setTime(e.target.value);
    const handleGuestsChange = (e) => setGuests(e.target.value);
    const handleOccasionChange = (e) => setOccasion(e.target.value);

    const handleSubmit = (e) => {
        e.preventDefault();
        submitForm({ date, time, guests, occasion });
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="res-date">Choose date</label>
                <input
                    type="date"
                    id="res-date"
                    value={date}
                    onChange={handleDateChange}
                />
                <label htmlFor="res-time">Choose time</label>
                <select
                    id="res-time"
                    value={time}
                    onChange={handleTimeChange}
                >
                    {availableTimes.map((timeOption) => (
                        <option key={timeOption} value={timeOption}>
                            {timeOption}
                        </option>
                    ))}
                </select>
                <label htmlFor="guests">Number of guests</label>
                <input
                    type="number"
                    placeholder="1"
                    min="1"
                    max="10"
                    id="guests"
                    value={guests}
                    onChange={handleGuestsChange}
                />
                <label htmlFor="occasion">Occasion</label>
                <select
                    id="occasion"
                    value={occasion}
                    onChange={handleOccasionChange}
                >
                    <option value="N/A">None</option>
                    <option value="Birthday">Birthday</option>
                    <option value="Anniversary">Anniversary</option>
                </select>
                <input type="submit" value="Make Your reservation"/>
            </form>
        </div>
    );
};

export default ReservationForm;
