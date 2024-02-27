import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "../../api/axios";

const GET_COMPLAINTS = "/api/getAllComplaints";
const GET_COMPLAINT = "/api/getComplaint"
const UPDATE_COMPLAINT = "/api/updateComplaint"

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

export const fetchComplaint = createAsyncThunk(
  "fetchComplaint",
  async (id, thunkAPI) => {
    const response = await axios.get(`${GET_COMPLAINT}/${id}`);
    return response.data;
  }
);

export const updateComplaint = createAsyncThunk(
  "updateComplaint",
  async ({ id, answer } , thunkAPI) => {
    console.log(id, answer);
    const response = await axios.post(`${UPDATE_COMPLAINT}/${id}`, JSON.stringify({ answer }));
    console.log("response.data for update user is:", response.data);
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
      return { ...state, [dataChange.name]: dataChange.value };
    },
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(fetchAllComplaints.fulfilled, (state, action) => {
      return action.payload;
    });
    builder.addCase(fetchComplaint.fulfilled, (state, action) => {
      console.log(action.payload);
      return action.payload;
    });
    builder.addCase(updateComplaint.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export const { resetComplaintsForm, handleComplaintsFormChange } =
  complaints.actions;

export default complaints.reducer;
