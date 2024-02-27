import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "../../api/axios";

const GET_USERS = "/api/getAllUsers";
const GET_USER = "/api/getUser";
const UPDATE_USER = "/api/updateUser";

const initialState = {
  fullName: "",
  businessName: "",
  mobileNumber: "",
  username: "",
  email: "",
  password: "",
  confirmPassword: "",
  role: "accountOpener",
  company_type: 0,
};

export const fetchAllUsers = createAsyncThunk(
  "fetchAllUsers",
  async (userId, thunkAPI) => {
    const response = await axios.get(GET_USERS);
    return response.data;
  }
);

export const fetchUser = createAsyncThunk("fetchUser", async (id, thunkAPI) => {
  const response = await axios.get(`${GET_USER}/${id}`);
  return response.data;
});

export const updateUser = createAsyncThunk(
  "updateUser",
  async (data, thunkAPI) => {
    console.log(data);
    const response = await axios.post(
      `${UPDATE_USER}/${data.id}`,
      JSON.stringify({ data })
    );
    console.log("response.data for update user is:", response.data);
    return response.data;
  }
);

const adminRegisteration = createSlice({
  name: "adminRegisteration",
  initialState,
  reducers: {
    resetAdminRegisterForm(state) {
      return initialState;
    },
    handleAdminRegisterFormChange(state, action) {
      const dataChange = action.payload;
      return { ...state, [dataChange.name]: dataChange.value };
    },
    // editAdminFormState(state, action) {
    //   const dataToBeEdited = action.payload;
    //   return dataToBeEdited;
    // },
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(fetchAllUsers.fulfilled, (state, action) => {
      return action.payload;
    });
    builder.addCase(fetchUser.fulfilled, (state, action) => {
      console.log(action.payload);
      return action.payload;
    });
    builder.addCase(updateUser.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export const { resetAdminRegisterForm, handleAdminRegisterFormChange } =
  adminRegisteration.actions;

export default adminRegisteration.reducer;
