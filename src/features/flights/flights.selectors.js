import { createSelector } from 'reselect';

export const flightSelector = state => state.flights;

export const departureFlightsListSelector = createSelector([flightSelector], flights =>
  flights.filter(flight => flight.type === 'DEPARTURE'),
);

export const arrivalFlightsListSelector = createSelector([flightSelector], flights =>
  flights.filter(flight => flight.type === 'ARRIVAL'),
);

export const searchFlightsListSelector = searchText =>
  createSelector([flightSelector], flights =>
    flights.filter(flight => flight.codeShare && flight.codeShare.includes(searchText)),
  );
