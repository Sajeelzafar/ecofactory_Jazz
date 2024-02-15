import { Button, Stack, TextField, Typography } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { handleAuthorisePersonnelAdd, handleAuthorisePersonnelFormChange, handleAuthorisePersonnelRemove } from "../../../../redux/slices/authorisePersonnel";

const AuthorisePersonnelDetails = () => {
  const dispatch = useDispatch();
  const authorisePersonnelsInfo = useSelector((state) => state.authorisePersonnel);

  const handleChange = (e, index) => {
    const { name, value } = e.target;
    dispatch(handleAuthorisePersonnelFormChange({ name, value, index }));
  };

  const handleAdd = () => {
    dispatch(handleAuthorisePersonnelAdd());
  };

  const handleRemove = (e, index) => {
    dispatch(handleAuthorisePersonnelRemove({ index }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Call a function with registerData here
    console.log("Authorise Personnel data:", authorisePersonnelsInfo);
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
        <strong>Authorize Personnel Details</strong>
      </Typography>
      <hr />
      {authorisePersonnelsInfo?.map((authorisePersonnel, index) => (
        <div key={authorisePersonnel.id}>
          <Stack
            spacing={1}
            alignItems="center"
            style={{
              padding: "1rem",
              backgroundColor: "rgb(227, 227, 227)",
            }}
          >
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
              value={authorisePersonnel.name}
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
              value={authorisePersonnel.email}
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
              value={authorisePersonnel.contactNumber}
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
              value={authorisePersonnel.title}
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

export default AuthorisePersonnelDetails;
