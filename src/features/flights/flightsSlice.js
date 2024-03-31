import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchFlights } from './flights.gateway';

const initialState = [];

const FLIGHT_LOAD_TYPE = 'flights/load';

// Async thunk
export const loadFlights = createAsyncThunk(FLIGHT_LOAD_TYPE, async () => {
  const response = await fetchFlights();
  return response;
});

// Slice
const flightsSlice = createSlice({
  name: 'flights',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(loadFlights.fulfilled, (state, action) => action.payload);
  },
});

export const flightsActions = flightsSlice.actions;
export default flightsSlice.reducer;
