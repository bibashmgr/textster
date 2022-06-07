import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  logger: null,
  userContacts: null,
  userConversations: null,
};

export const counterSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setLogger: (state, action) => {
      state.logger = action.payload;
    },
    setUserContacts: (state, action) => {
      state.userContacts = action.payload;
    },
    setUserConversations: (state, action) => {
      state.userConversations = action.payload;
    },
  },
});

export const { setLogger, setUserContacts, setUserConversations } =
  counterSlice.actions;

export default counterSlice.reducer;
