import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  bankName: "",
  bankAccountNumber: "",
  accountHolderName: "",
  accountHolderMobileNumber: "",
  accountHolderEmail: "",
};

const settlementDetails = createSlice({
  name: "settlementDetails",
  initialState,
  reducers: {
    handleSettlementDetailsFormChange(state, action) {
      const dataChange = action.payload;
      return { ...state, [dataChange.name]: dataChange.value };
    },
  },
});

export const { handleSettlementDetailsFormChange } = settlementDetails.actions;

export default settlementDetails.reducer;
