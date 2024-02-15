import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  onlinePaymentGateway: [],
  corporateCollection: [],
  corporateDisbursement: [],
};

const productSelection = createSlice({
  name: "productSelection",
  initialState,
  reducers: {
    onlinePaymentAction(state, action) {
      const option = action.payload;
      const index = state.onlinePaymentGateway.indexOf(option);
      if (index !== -1) {
        state.onlinePaymentGateway.splice(index, 1);
      } else {
        state.onlinePaymentGateway.push(option);
      }
    },
    corporateCollection(state, action) {
      const option = action.payload;
      const index = state.corporateCollection.indexOf(option);
      if (index !== -1) {
        state.corporateCollection.splice(index, 1);
      } else {
        state.corporateCollection.push(option);
      }
    },
    corporateDisbursement(state, action) {
      const option = action.payload;
      const index = state.corporateDisbursement.indexOf(option);
      if (index !== -1) {
        state.corporateDisbursement.splice(index, 1);
      } else {
        state.corporateDisbursement.push(option);
      }
    },
  },
});

export const {
  onlinePaymentAction,
  corporateCollection,
  corporateDisbursement,
} = productSelection.actions;

export default productSelection.reducer;
