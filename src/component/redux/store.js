import { configureStore } from '@reduxjs/toolkit';
import missionsReducer from './missions/missionsSlice';

export default configureStore({
  reducer: {
    counter: missionsReducer,
  },
});
