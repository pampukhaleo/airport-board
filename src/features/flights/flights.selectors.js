import { createSelector } from 'reselect';

export const flightSelector = state => state.flights;

export const departureFlightsList = createSelector([flightSelector], flights =>
  flights.filter(flight => flight.type === 'DEPARTURE'),
);

export const arrivalFlightsList = createSelector([flightSelector], flights =>
  flights.filter(flight => flight.type === 'ARRIVAL'),
);
