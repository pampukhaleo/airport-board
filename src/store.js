import { configureStore } from '@reduxjs/toolkit';
import manageFlightsState from './features/flights/flightsSlice';

export default configureStore({
  reducer: {
    flights: manageFlightsState,
  },
});
