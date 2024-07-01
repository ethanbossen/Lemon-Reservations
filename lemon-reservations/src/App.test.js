// src/App.test.js
import { initializeTimes, updateTimes } from "./components/Main"; // Import initializeTimes and updateTimes from Main.js
import { fetchAPI } from "./api"; // Import fetchAPI specifically for mocking

// Mock fetchAPI
jest.mock('../src/api', () => ({
  fetchAPI: jest.fn(),
}));

describe('initializeTimes', () => {
  it('should return the correct initial times', () => {
    const expectedTimes = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
    fetchAPI.mockReturnValue(expectedTimes); // Mock the return value of fetchAPI
    const result = initializeTimes();
    expect(result).toEqual(expectedTimes); // Assert that initializeTimes returns expectedTimes
  });
});

describe('updateTimes', () => {
  it('should return the same state if action type is not recognized', () => {
    const initialState = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
    const action = { type: 'UNKNOWN_ACTION' };
    const result = updateTimes(initialState, action);
    expect(result).toEqual(initialState); // Assert that updateTimes returns initialState when action type is unrecognized
  });

  it('should return the updated times if action type is UPDATE_TIMES', () => {
    const initialState = [];
    const action = { type: 'UPDATE_TIMES', payload: '2022-09-30' };
    const expectedTimes = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
    fetchAPI.mockReturnValue(expectedTimes); // Mock the return value of fetchAPI
    const result = updateTimes(initialState, action);
    expect(result).toEqual(expectedTimes); // Assert that updateTimes returns expectedTimes when action type is UPDATE_TIMES
  });
});
