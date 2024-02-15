import { Button, Stack, TextField, Typography } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  handleDirectorAdd,
  handleDirectorInfoFormChange,
  handleDirectorRemove,
} from "../../../../redux/slices/directorInfo";

const DirectorsInformation = () => {
  const dispatch = useDispatch();
  const directorsInfo = useSelector((state) => state.directorInfo);

  const handleChange = (e, index) => {
    const { name, value } = e.target;
    dispatch(handleDirectorInfoFormChange({ name, value, index }));
  };

  const handleAdd = () => {
    dispatch(handleDirectorAdd());
  };

  const handleRemove = (e, index) => {
    dispatch(handleDirectorRemove({ index }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Call a function with registerData here
    console.log("Director data:", directorsInfo);
  };
  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      style={{
        padding: "1rem",
        backgroundColor: "white",
        border: "1px solid darkgrey",
        textAlign: "center",
      }}
    >
      <Typography variant="body1">
        <strong>Director&apos;s Information</strong>
      </Typography>
      <hr />
      {directorsInfo?.map((directorInfo, index) => (
        <div key={directorInfo.id}>
          <Stack
            spacing={1}
            alignItems="center"
            style={{
              padding: "1rem",
              backgroundColor: "rgb(227, 227, 227)",
            }}
          >
            <Typography variant="body1">Director&apos;s Information</Typography>
            <Button
              variant="contained"
              color="error"
              sx={{ textTransform: "none" }}
              onClick={(e) => handleRemove(e, index)}
            >
              Remove
            </Button>
            <Typography variant="body1">
              <strong>Full Name</strong>
            </Typography>
            <TextField
              fullWidth
              size="small"
              label="Full Name"
              name="name"
              value={directorInfo.name}
              onChange={(e) => handleChange(e, index)}
              sx={{ backgroundColor: "white" }}
            />
            <Typography variant="body1">
              <strong>Official Email</strong>
            </Typography>
            <TextField
              fullWidth
              size="small"
              label="Official Email"
              name="email"
              type="email"
              value={directorInfo.email}
              onChange={(e) => handleChange(e, index)}
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
              value={directorInfo.contactNumber}
              onChange={(e) => handleChange(e, index)}
              sx={{ backgroundColor: "white" }}
            />
            <Typography variant="body1">
              <strong>Title</strong>
            </Typography>
            <TextField
              fullWidth
              size="small"
              label="Tile"
              name="title"
              type="string"
              value={directorInfo.title}
              onChange={(e) => handleChange(e, index)}
              sx={{ backgroundColor: "white" }}
            />
          </Stack>
          <Button
            variant="contained"
            color="success"
            sx={{ textTransform: "none", margin: "2rem 0" }}
            onClick={handleAdd}
          >
            Add Directors Information
          </Button>
        </div>
      ))}
    </form>
  );
};

export default DirectorsInformation;
