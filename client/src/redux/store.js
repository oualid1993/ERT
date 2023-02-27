import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./slices/authSlice";
import { invoiceReducer } from "./slices/invoiceSlice";
import { messageReducer } from "./slices/MessageSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    invoice: invoiceReducer,
    message: messageReducer,
  },
});

export default store;
