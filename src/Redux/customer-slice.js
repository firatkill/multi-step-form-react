import { createSlice } from "@reduxjs/toolkit";

const customerSlice = createSlice({
  name: "customer",
  initialState: {
    name: "",
    email: "",
    phone: "",
    billingPlan: { planName: "Arcade", period: "Monthly", price: "$9/mo" },
    addOns: {
      onlineService: false,
      largerStorage: false,
      customizableProfile: false,
    },
  },
  reducers: {
    assignUser(state, action) {
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.phone = action.payload.phone;
    },
    assignBillingPlan(state, action) {
      state.billingPlan = action.payload;
    },
    changeAddOns(state, action) {
      state.addOns = { ...state.addOns, ...action.payload };
    },
  },
});

export const customerActions = customerSlice.actions;
export default customerSlice;
