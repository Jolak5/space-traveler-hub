import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const URL = 'https://api.spacexdata.com/v4/rockets';

export const getRockets = createAsyncThunk('rockets/getRockets', async () => {
  try {
    const res = await axios.get(URL);
    const newData = res.data.map((item) => ({
      id: item.id,
      flickrImages: item.flickr_images,
      name: item.name,
      type: item.type,
      description: item.description,
    }));
    return newData;
  } catch (error) {
    return (error.message);
  }
});

const initialState = {
  rockets: [],
  isLoading: true,
};

export const rocketsSlice = createSlice({
  name: 'rockets',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getRockets.pending, (state) => ({
      ...state,
      isLoading: true,
    })).addCase(getRockets.fulfilled, (state, action) => ({
      ...state,
      isLoading: false,
      rockets: action.payload,
    })).addCase(getRockets.rejected, (state) => ({
      ...state,
      isLoading: false,
    }));
  },
});

export default rocketsSlice.reducer;
