import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  businessName: "",
  mobileNumber: "",
  username: "",
  email: "",
  password: "",
  confirmPassword: "",
  company_type: 0,
};

const registration = createSlice({
  name: "registration",
  initialState,
  reducers: {
    handleRegisterFormChange(state, action) {
      const dataChange = action.payload;
      return { ...state, [dataChange.name]: dataChange.value };
    },
  },
});

export const { handleRegisterFormChange } = registration.actions;

export default registration.reducer;
