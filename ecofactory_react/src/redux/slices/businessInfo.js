import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  address: "",
  phone: null,
  faxNumber: null,
  email: "",
  businessNature: "",
  ntnIssueAuthority: "",
  ntnNumber: null,
  issueDate: null,
  registerDate: null,
  employeesNo: null,
  monthlyTurnover: null,
  averageSalaryAmount: null,
  frequencyOfSalaryDisbursement: "",
};

const businessInfo = createSlice({
  name: "businessInfo",
  initialState,
  reducers: {
    handleBusinessInfoFormChange(state, action) {
      const dataChange = action.payload;
      return { ...state, [dataChange.name]: dataChange.value };
    },
  },
});

export const { handleBusinessInfoFormChange } = businessInfo.actions;

export default businessInfo.reducer;
