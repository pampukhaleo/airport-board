import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchFlightsGateway } from './flights.gateway';

const initialState = [];

// Async thunk
export const loadFlights = createAsyncThunk('flights/load', async () => {
  try {
    return await fetchFlightsGateway();
  } catch (error) {
    console.error(`Request failed with error: ${error.message}`);
    throw new Error(error);
  }
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
