import { Button, Stack, TextField, Typography } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { handleBusinessInfoFormChange } from "../../../../redux/slices/businessInfo";

const BusinessInformation = () => {
  const dispatch = useDispatch();
  const businessInfo = useSelector((state) => state.businessInfo);

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch(handleBusinessInfoFormChange({ name, value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Call a function with registerData here
    console.log("Business data:", businessInfo);
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
          <strong>Business Name</strong>
        </Typography>
        <TextField
          fullWidth
          size="small"
          label="Business Name"
          name="name"
          value={businessInfo.name}
          onChange={handleChange}
          sx={{ backgroundColor: "white" }}
        />
        <Typography variant="body1">
          <strong>Business Mailing Address</strong>
        </Typography>
        <TextField
          fullWidth
          size="small"
          label="Business Mailing Address"
          name="address"
          value={businessInfo.address}
          onChange={handleChange}
          sx={{ backgroundColor: "white" }}
        />
        <Typography variant="body1">
          <strong>Phone</strong>
        </Typography>
        <TextField
          fullWidth
          size="small"
          label="Mobile Number"
          name="phone"
          value={businessInfo.phone}
          onChange={handleChange}
          sx={{ backgroundColor: "white" }}
        />
        <Typography variant="body1">
          <strong>Fax Number (optional)</strong>
        </Typography>
        <TextField
          fullWidth
          size="small"
          label="Fax Number"
          name="faxNumber"
          value={businessInfo.faxNumber}
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
          value={businessInfo.email}
          onChange={handleChange}
          sx={{ backgroundColor: "white" }}
        />
        <Typography variant="body1">
          <strong>Nature of Business</strong>
        </Typography>
        <TextField
          fullWidth
          size="small"
          label="Nature of Business"
          name="businessNature"
          type="string"
          value={businessInfo.businessNature}
          onChange={handleChange}
          sx={{ backgroundColor: "white" }}
        />
        <Typography variant="body1">
          <strong>NTN Issuing Authority</strong>
        </Typography>
        <TextField
          fullWidth
          size="small"
          label="NTN Issue Authority"
          name="ntnIssueAuthority"
          value={businessInfo.ntnIssueAuthority}
          onChange={handleChange}
          sx={{ backgroundColor: "white" }}
        />
        <Typography variant="body1">
          <strong>NTN Number</strong>
        </Typography>
        <TextField
          fullWidth
          size="small"
          label="ntnNumber"
          name="ntnNumber"
          value={businessInfo.ntnNumber}
          onChange={handleChange}
          sx={{ backgroundColor: "white" }}
        />
        <Typography variant="body1">
          <strong>NTN Date of Issue</strong>
        </Typography>
        <TextField
          fullWidth
          size="small"
          name="issueDate"
          type="date"
          value={businessInfo.issueDate}
          onChange={handleChange}
          sx={{ backgroundColor: "white" }}
        />
        <Typography variant="body1">
          <strong>Registration Date</strong>
        </Typography>
        <TextField
          fullWidth
          size="small"
          name="registerDate"
          type="date"
          value={businessInfo.registerDate}
          onChange={handleChange}
          sx={{ backgroundColor: "white" }}
        />
        <Typography variant="body1">
          <strong>Number of employees</strong>
        </Typography>
        <TextField
          fullWidth
          size="small"
          label="No of employees"
          name="employeesNo"
          value={businessInfo.employeesNo}
          onChange={handleChange}
          sx={{ backgroundColor: "white" }}
        />
        <Typography variant="body1">
          <strong>Monthly Turnover</strong>
        </Typography>
        <TextField
          fullWidth
          size="small"
          label="Monthly Turnover"
          name="monthlyTurnover"
          value={businessInfo.monthlyTurnover}
          onChange={handleChange}
          sx={{ backgroundColor: "white" }}
        />
        <Typography variant="body1">
          <strong>Average Salary Amount</strong>
        </Typography>
        <TextField
          fullWidth
          size="small"
          label="Average Salary Amount"
          name="averageSalaryAmount"
          value={businessInfo.averageSalaryAmount}
          onChange={handleChange}
          sx={{ backgroundColor: "white" }}
        />
        <Typography variant="body1">
          <strong>Frequency of Salary Disbursement</strong>
        </Typography>
        <TextField
          fullWidth
          size="small"
          label="Frequency of Salary Disbursement"
          name="frequencyOfSalaryDisbursement"
          value={businessInfo.frequencyOfSalaryDisbursement}
          onChange={handleChange}
          sx={{ backgroundColor: "white" }}
        />
      </Stack>
    </form>
  );
};

export default BusinessInformation;
