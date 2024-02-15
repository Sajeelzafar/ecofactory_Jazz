import { createSlice, current, nanoid } from "@reduxjs/toolkit";
const initialValues = {
  name: "",
  email: "",
  contactNumber: "",
  title: "",
};
const initialState = [{ ...initialValues, id: nanoid() }];

const authorisePersonnel = createSlice({
  name: "authorisePersonnelInfo",
  initialState,
  reducers: {
    handleAuthorisePersonnelAdd(state, action) {
      state.push({
        ...initialValues,
        id: nanoid(), // <-- generate id when creating object
      });
    },
    handleAuthorisePersonnelRemove(state, action) {
      return state.filter((_, index) => index !== action.payload.index);
    },
    handleAuthorisePersonnelFormChange(state, action) {
      const { index, name, value } = action.payload;
      return state.map((authorisePerson, idx) => {
        if (idx === index) {
          return {
            ...authorisePerson,
            [name]: value,
          };
        } else {
          return authorisePerson;
        }
      });
    },
  },
});

export const {
  handleAuthorisePersonnelAdd,
  handleAuthorisePersonnelRemove,
  handleAuthorisePersonnelFormChange,
} = authorisePersonnel.actions;

export default authorisePersonnel.reducer;
