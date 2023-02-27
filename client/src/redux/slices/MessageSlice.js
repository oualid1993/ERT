import { createSlice } from "@reduxjs/toolkit";

const messageSlice = createSlice({
  name: "message",
  initialState: { message: [] },
  reducers: {
    setMessage(state, action) {
      state.message = action.payload;
    },
  },
});

const messageReducer = messageSlice.reducer;
const messageActions = messageSlice.actions;
export { messageActions, messageReducer };
