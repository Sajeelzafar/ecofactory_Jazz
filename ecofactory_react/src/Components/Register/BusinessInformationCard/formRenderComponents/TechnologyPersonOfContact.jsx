import { Button, Stack, TextField, Typography } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { handletechnologyProductCategoryInfoFormChange } from "../../../../redux/slices/technologyProductCategory";

const TechnologyPersonOfContact = () => {
  const dispatch = useDispatch();
  const technologyPersonInfo = useSelector((state) => state.technologyProductCategoryInfo);

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch(handletechnologyProductCategoryInfoFormChange({ name, value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Call a function with registerData here
    console.log("Technology Person Info data:", technologyPersonInfo);
  };
  return (
    <form onSubmit={handleSubmit} noValidate>
      <Stack
        spacing={1}
        alignItems="center"
        sx={{
          padding: "1rem",
          backgroundColor: "white",
          border: "1px solid darkgrey",
        }}
      >
        <Typography variant="body1">
          <strong>Name</strong>
        </Typography>
        <TextField
          fullWidth
          size="small"
          label="Name"
          name="name"
          value={technologyPersonInfo.name}
          onChange={handleChange}
          sx={{ backgroundColor: "white" }}
        />
        <Typography variant="body1">
          <strong>Official Email</strong>
        </Typography>
        <TextField
          fullWidth
          size="small"
          label="Business Mailing Address"
          name="email"
          type="email"
          value={technologyPersonInfo.email}
          onChange={handleChange}
          sx={{ backgroundColor: "white" }}
        />
        <Typography variant="body1">
          <strong>Contact Number</strong>
        </Typography>
        <TextField
          fullWidth
          size="small"
          label="Contact Number"
          name="contactNumber"
          value={technologyPersonInfo.contactNumber}
          onChange={handleChange}
          sx={{ backgroundColor: "white" }}
        />
      </Stack>
    </form>
  );
};

export default TechnologyPersonOfContact;
