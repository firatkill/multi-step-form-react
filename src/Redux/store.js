import { configureStore } from "@reduxjs/toolkit";
import uiSlice from "./ui-slice";
import customerSlice from "./customer-slice";
const store = configureStore({
  reducer: { ui: uiSlice.reducer, customer: customerSlice.reducer },
});
export default store;
