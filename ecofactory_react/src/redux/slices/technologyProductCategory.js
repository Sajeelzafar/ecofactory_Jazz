import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  email: "",
  contactNumber: null,
  productCategory: "",
  productSubCategory: ""
};

const technologyProductCategoryInfo = createSlice({
  name: "technologyProductCategoryInfo",
  initialState,
  reducers: {
    handletechnologyProductCategoryInfoFormChange(state, action) {
      const dataChange = action.payload;
      return { ...state, [dataChange.name]: dataChange.value };
    },
  },
});

export const { handletechnologyProductCategoryInfoFormChange } = technologyProductCategoryInfo.actions;

export default technologyProductCategoryInfo.reducer;
