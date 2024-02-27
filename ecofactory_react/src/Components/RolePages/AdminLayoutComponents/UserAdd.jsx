import React from "react";
import {
  DialogContent,
  DialogContentText,
  DialogTitle,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { handleAdminRegisterFormChange } from "../../../redux/slices/adminRegisteration.js";

const UserAdd = ({ edit }) => {
  const dispatch = useDispatch();
  const registerData = useSelector((state) => state.adminRegisteration);

  React.useEffect(() => {
    console.log("DSAJIDIS", registerData);
  }, [registerData]);

  const productCategories = {
    accountOpener: "Account Opener",
    bankAccount: "Bank Account",
    higherManagement: "Higher Management",
    admin: "Admin",
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch(handleAdminRegisterFormChange({ name, value }));
  };

  const handleCategoryChange = (event) => {
    dispatch(
      handleAdminRegisterFormChange({
        name: "role",
        value: event.target.value,
      })
    );
  };

  return (
    <>
      <DialogTitle>
        <strong>Let&apos;s create your account</strong>
      </DialogTitle>
      <DialogContent>
        <DialogContentText>
          To subscribe to this website, please enter your email address here. We
          will send updates occasionally.
        </DialogContentText>
        <form noValidate>
          <Stack spacing={1}>
            <Typography variant="body1">
              <strong>Full Name</strong>
            </Typography>
            <TextField
              fullWidth
              size="small"
              label="Name"
              name="fullName"
              value={registerData.fullName}
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
            {!edit && (
              <>
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
              </>
            )}
            {registerData.role !== "merchant" && (
              <>
                <Typography variant="body1">
                  <strong>Role</strong>
                </Typography>
                <Select
                  labelId="category-label"
                  id="category-select"
                  value={registerData.role || ''}
                  onChange={handleCategoryChange}
                  style={{ height: "2.5rem" }}
                >
                  {Object.entries(productCategories).map(([key, value]) => (
                    <MenuItem key={key} value={key}>
                      {value}
                    </MenuItem>
                  ))}
                </Select>
              </>
            )}
          </Stack>
        </form>
      </DialogContent>
    </>
  );
};

export default UserAdd;
