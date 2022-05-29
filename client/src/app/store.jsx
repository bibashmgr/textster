import { configureStore } from '@reduxjs/toolkit';

// reducers
import userReducer from '../features/userSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
  },
});
