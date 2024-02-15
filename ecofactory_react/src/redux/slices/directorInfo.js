import { createSlice, current, nanoid } from "@reduxjs/toolkit";
const initialValues = {
  name: "",
  email: "",
  contactNumber: "",
  title: "",
};
const initialState = [{ ...initialValues, id: nanoid() }];

const directorInfo = createSlice({
  name: "directorInfo",
  initialState,
  reducers: {
    handleDirectorAdd(state, action) {
      state.push({
        ...initialValues,
        id: nanoid(), // <-- generate id when creating object
      });
    },
    handleDirectorRemove(state, action) {
      return state.filter((_, index) => index !== action.payload.index);
    },
    handleDirectorInfoFormChange(state, action) {
      const { index, name, value } = action.payload;
      return state.map((director, idx) => {
        if (idx === index) {
          return {
            ...director,
            [name]: value,
          };
        } else {
          return director;
        }
      });
    },
  },
});

export const {
  handleDirectorAdd,
  handleDirectorRemove,
  handleDirectorInfoFormChange,
} = directorInfo.actions;

export default directorInfo.reducer;
