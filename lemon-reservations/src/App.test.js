import { render, screen } from '@testing-library/react';
import Reservation from './App';
import ReservationForm from "./components/ReservationForm";
import { initializeTimes, updateTimes } from "./components/Main"


test('renders learn react link', () => {
  render(<ReservationForm />);
  const linkElement = screen.getByText("Choose time");
  expect(linkElement).toBeInTheDocument();
});



describe('initializeTimes', () => {
  it('should return the correct initial times', () => {
    const expectedTimes = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
    const result = initializeTimes();
    expect(result).toEqual(expectedTimes);
  });
});

describe('updateTimes', () => {
  it('should return the same state if action type is not recognized', () => {
    const initialState = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
    const action = { type: 'UNKNOWN_ACTION' };
    const result = updateTimes(initialState, action);
    expect(result).toEqual(initialState);
  });

  it('should return the initial times if action type is UPDATE_TIMES', () => {
    const initialState = [];
    const action = { type: 'UPDATE_TIMES' };
    const result = updateTimes(initialState, action);
    const expectedTimes = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
    expect(result).toEqual(expectedTimes);
  });
});

