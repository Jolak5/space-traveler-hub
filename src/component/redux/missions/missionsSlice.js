import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const url = 'https://api.spacexdata.com/v3/missions';

export const getMissions = createAsyncThunk(
  'missions/getMissions',
  async () => {
    try {
      const resp = await axios.get(url);
      return resp.data;
    } catch (error) {
      return error.message;
    }
  },
);

export const missionsSlice = createSlice({
  name: 'mission',
  initialState: {
    missions: [],
    isLoading: true,
    join: false,
  },
  reducers: {
    joinMission: (state, action) => ({
      ...state,
      state: [action.payload, { ...action.payload, reserved: true }],
    }),
  },
  extraReducers: {
    [getMissions.pending]: (state) => ({
      ...state,
      isLoading: false,
    }),
    [getMissions.fulfilled]: (state, action) => ({
      ...state,
      isLoading: false,
      missions: action.payload,
    }),
    [getMissions.rejected]: (state) => ({
      ...state,
      isLoading: false,
    }),
  },
});

// Action creators are generated for each case reducer function
export const { joinMission } = missionsSlice.actions;

export default missionsSlice.reducer;
