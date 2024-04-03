import { createSelector } from 'reselect';
import moment from 'moment';

export const SEARCH_TYPES = {
  DEPARTURE: 'DEPARTURE',
  ARRIVAL: 'ARRIVAL',
};

export const flightSelector = state => state.flights;

export const departureFlightsListSelector = createSelector([flightSelector], flights =>
  flights.filter(flight => flight.type === SEARCH_TYPES.DEPARTURE),
);

export const arrivalFlightsListSelector = createSelector([flightSelector], flights =>
  flights.filter(flight => flight.type === SEARCH_TYPES.ARRIVAL),
);

export const searchByInputTextSelector = searchText =>
  createSelector([flightSelector], flights =>
    flights.filter(flight => flight.codeShare && flight.codeShare.includes(searchText)),
  );

export const searchByDateSelector = searchDate =>
  createSelector([flightSelector], flights => {
    const formatDate = moment(searchDate).valueOf();
    return flights.filter(flight => flight.date === formatDate);
  });

// const filteredFlights = searchDate
//   ? flights.filter(flight => flight.date === searchDate)
//   : flights;
