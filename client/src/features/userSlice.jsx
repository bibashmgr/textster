import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  logger: null,
  isLogin: false,
  isLoading: true,
};

export const counterSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setLogger: (state, action) => {
      state.logger = action.payload;
    },
    setIsLogin: (state, action) => {
      state.isLogin = action.payload;
    },
    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
  },
});

export const { setLogger, setIsLogin, setIsLoading } = counterSlice.actions;

export default counterSlice.reducer;
