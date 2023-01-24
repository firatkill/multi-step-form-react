import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: { activeStep: 1 },
  reducers: {
    nextStep(state) {
      state.activeStep++;
    },
    previousStep(state) {
      state.activeStep--;
    },
  },
});

export const uiActions = uiSlice.actions;

export default uiSlice;
