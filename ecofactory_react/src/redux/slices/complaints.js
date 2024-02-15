import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "../../api/axios";

const GET_COMPLAINTS = "/api/getAllComplaints";

const initialState = {
  fullName: "",
  companyName: "",
  complaintType: "",
  phoneNumber: "",
  priority: "N/A",
  message: "",
};

export const fetchAllComplaints = createAsyncThunk(
  "fetchAllComplaints",
  async (userId, thunkAPI) => {
    const response = await axios.get(GET_COMPLAINTS);
    return response.data;
  }
);

const complaints = createSlice({
  name: "complaints",
  initialState,
  reducers: {
    resetComplaintsForm(state) {
      return initialState;
    },
    handleComplaintsFormChange(state, action) {
      const dataChange = action.payload;
      console.log(dataChange);
      return { ...state, [dataChange.name]: dataChange.value };
    },
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(fetchAllComplaints.fulfilled, (state, action) => {
      return { ...state, ...action.payload };
    });
  },
});

export const { resetComplaintsForm, handleComplaintsFormChange } =
  complaints.actions;

export default complaints.reducer;
