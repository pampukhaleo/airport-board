import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  {
    id: Math.round(Math.random() * 10000),
    name: `Flight # `,
  },
  {
    id: Math.round(Math.random() * 10000),
    name: `Flight # `,
  },
];

const flightsSlice = createSlice({
  name: 'flights',
  initialState,
  reducers: {
    createFlight: state => {
      const newFlight = {
        id: Math.round(Math.random() * 10000),
        name: `Flight # `,
      };
      state.push(newFlight);
    },
  },
});

export const { createFlight } = flightsSlice.actions;

export default flightsSlice.reducer;
