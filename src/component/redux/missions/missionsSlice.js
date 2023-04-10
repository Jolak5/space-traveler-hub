import { createSlice } from '@reduxjs/toolkit';

export const missionsSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
  },
  reducers: { },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = missionsSlice.actions;

export default missionsSlice.reducer;
