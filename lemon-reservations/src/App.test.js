import { render, screen } from '@testing-library/react';
import Reservation from './App';
import ReservationForm from "./components/ReservationForm";
import { initializeTimes, updateTimes } from "./components/Main"


test('renders learn react link', () => {
  render(<ReservationForm />);
  const linkElement = screen.getByText("Choose time");
  expect(linkElement).toBeInTheDocument();
});

// timeFunctions.test.js


