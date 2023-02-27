import { createSlice, AsyncThunkAction } from "@reduxjs/toolkit";

const invoiceSlice = createSlice({
  name: "invoice",
  initialState: { invoice: [] },
  reducers: {
    setInvoice(state, action) {
      state.invoice = action.payload;
    },
  },
});

const invoiceReducer = invoiceSlice.reducer;
const invoiceActions = invoiceSlice.actions;
export { invoiceActions, invoiceReducer };
