import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { handleRegisterFormChange, resetRegisterForm } from "../../redux/slices/registration";

const Registration = () => {
  const dispatch = useDispatch();
  const registerData = useSelector(
    (state) => state.registration
  );
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch(handleRegisterFormChange({ name, value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(resetRegisterForm())
    // Call a function with registerData here
    console.log("Register data:", registerData);
  };
  return (
    <>
      <div>
        <Box
          sx={{
            flex: "1 1 auto",
            alignItems: "center",
            display: "flex",
            justifyContent: "center",
            py: "25px",
          }}
        ></Box>
        <Stack spacing={1} sx={{ mb: 3 }}>
          <Typography variant="h4">
            <strong>Let&apos;s create your account</strong>
          </Typography>
        </Stack>
        <form onSubmit={handleSubmit} noValidate>
          <Stack spacing={1} alignItems="center">
            <Typography color="text.primary" variant="body2">
              Please enter the details below to complete your signup process
            </Typography>
            <Typography variant="body1">
              <strong>Full Name</strong>
            </Typography>
            <TextField
              fullWidth
              size="small"
              label="Name"
              name="name"
              value={registerData.name}
              onChange={handleChange}
              sx={{ backgroundColor: "white" }}
            />
            <Typography variant="body1">
              <strong>Name of Business Company</strong>
            </Typography>
            <TextField
              fullWidth
              size="small"
              label="Business Company"
              name="businessName"
              value={registerData.businessName}
              onChange={handleChange}
              sx={{ backgroundColor: "white" }}
            />
            <Typography variant="body1">
              <strong>Mobile Number</strong>
            </Typography>
            <TextField
              fullWidth
              size="small"
              label="Mobile Number"
              name="mobileNumber"
              value={registerData.mobileNumber}
              onChange={handleChange}
              sx={{ backgroundColor: "white" }}
            />
            <Typography variant="body1">
              <strong>Username</strong>
            </Typography>
            <TextField
              fullWidth
              size="small"
              label="Username"
              name="username"
              value={registerData.username}
              onChange={handleChange}
              sx={{ backgroundColor: "white" }}
            />
            <Typography variant="body1">
              <strong>Email Address</strong>
            </Typography>
            <TextField
              fullWidth
              size="small"
              label="Email Address"
              name="email"
              type="email"
              value={registerData.email}
              onChange={handleChange}
              sx={{ backgroundColor: "white" }}
            />
            <Typography variant="body1">
              <strong>Password</strong>
            </Typography>
            <TextField
              fullWidth
              size="small"
              label="Password"
              name="password"
              type="password"
              value={registerData.password}
              onChange={handleChange}
              sx={{ backgroundColor: "white" }}
            />
            <Typography variant="body1">
              <strong>Confirm Password</strong>
            </Typography>
            <TextField
              fullWidth
              size="small"
              label="Confirm Password"
              name="confirmPassword"
              type="password"
              value={registerData.confirmPassword}
              onChange={handleChange}
              sx={{ backgroundColor: "white" }}
            />
            <Button
              fullWidth
              size="large"
              type="submit"
              variant="contained"
              style={{ marginTop: "3rem" }}
            >
              Continue
            </Button>
          </Stack>
        </form>
      </div>
    </>
  );
};

export default Registration;
