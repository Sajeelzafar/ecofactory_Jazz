import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { handleSettlementDetailsFormChange } from "../../../../redux/slices/settlementDetails";

const SettlementDetails = () => {
  const dispatch = useDispatch();
  const settlementDetailsInfo = useSelector((state) => state.settlementDetails);

  const bankNames = [
    "Allied Bank",
    "Askari Bank",
    "Bank Alfalah",
    "Bank AlHabib",
    "Bank Islami",
    "Faysal Bank",
    "Habib Bank Limited",
    "HBL",
    "MCB",
    "Meezan Bank",
    "Soneri Bank",
    "Standard Chartered",
    "UBL",
  ];

  const handleBankNameChange = (event) => {
    dispatch(
      handleSettlementDetailsFormChange({
        name: "bankName",
        value: event.target.value,
      })
    );
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch(handleSettlementDetailsFormChange({ name, value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Call a function with registerData here
    console.log("Business data:", settlementDetailsInfo);
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
          <strong>Select Bank</strong>
        </Typography>
        <FormControl variant="outlined" style={{ width: "40%" }}>
          <InputLabel id="category-label">Select a value</InputLabel>
          <Select
            labelId="category-label"
            id="category-select"
            value={settlementDetailsInfo.bankName}
            onChange={handleBankNameChange}
            style={{ height: "2.5rem" }}
          >
            {bankNames.map((bank) => (
              <MenuItem key={bank} value={bank}>
                {bank}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <Typography variant="body1">
          <strong>Bank Account Number</strong>
        </Typography>
        <TextField
          fullWidth
          size="small"
          label="Bank Account Number"
          name="bankAccountNumber"
          value={settlementDetailsInfo.bankAccountNumber}
          onChange={handleChange}
          sx={{ backgroundColor: "white" }}
        />
        <Typography variant="body1">
          <strong>Account Holder Name</strong>
        </Typography>
        <TextField
          fullWidth
          size="small"
          label="Account Holder Name"
          name="accountHolderName"
          value={settlementDetailsInfo.accountHolderName}
          onChange={handleChange}
          sx={{ backgroundColor: "white" }}
        />
        <Typography variant="body1">
          <strong>Account Holder Mobile Number</strong>
        </Typography>
        <TextField
          fullWidth
          size="small"
          label="Account Holder Mobile Number"
          name="accountHolderMobileNumber"
          value={settlementDetailsInfo.accountHolderMobileNumber}
          onChange={handleChange}
          sx={{ backgroundColor: "white" }}
        />
        <Typography variant="body1">
          <strong>Account Holder Email</strong>
        </Typography>
        <TextField
          fullWidth
          size="small"
          label="Account Holder Email"
          name="accountHolderEmail"
          type="email"
          value={settlementDetailsInfo.accountHolderEmail}
          onChange={handleChange}
          sx={{ backgroundColor: "white" }}
        />
      </Stack>
    </form>
  );
};

export default SettlementDetails;
