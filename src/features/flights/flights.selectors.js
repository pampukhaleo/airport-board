import { createSelector } from 'reselect';

export const SEARCH_TYPES = {
  DEPARTURE: 'DEPARTURE',
  ARRIVAL: 'ARRIVAL',
  SEARCHED: 'SEARCHED',
};

export const flightSelector = state => state.flights;

export const departureFlightsListSelector = createSelector([flightSelector], flights =>
  flights.filter(flight => flight.type === SEARCH_TYPES.DEPARTURE),
);

export const arrivalFlightsListSelector = createSelector([flightSelector], flights =>
  flights.filter(flight => flight.type === SEARCH_TYPES.ARRIVAL),
);

export const searchFlightsListSelector = searchText =>
  createSelector([flightSelector], flights =>
    flights.filter(flight => flight.codeShare && flight.codeShare.includes(searchText)),
  );
