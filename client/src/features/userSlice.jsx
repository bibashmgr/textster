import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  logger: null,
};

export const counterSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setLogger: (state, action) => {
      state.logger = action.payload;
    },
  },
});

export const { setLogger } = counterSlice.actions;

export default counterSlice.reducer;
