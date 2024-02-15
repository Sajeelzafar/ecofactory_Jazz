import React from "react";
import Header from "../Header/Header";
import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
  InputLabel,
  MenuItem,
  Radio,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import {
  handleComplaintsFormChange,
  resetComplaintsForm,
} from "../../redux/slices/complaints";
import axios from "../../api/axios";

const Complaints = () => {
  const dispatch = useDispatch();
  const complaintsData = useSelector((state) => state.complaints);

  const REGISTER_COMPLAINTS = "/api/registercomplaints";

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch(handleComplaintsFormChange({ name, value }));
  };

  const handleComplaintTypeChange = (event) => {
    dispatch(
      handleComplaintsFormChange({
        name: "complaintType",
        value: event.target.value,
      })
    );
  };

  const handlePriorityChange = (value) => {
    dispatch(
      handleComplaintsFormChange({
        name: "priority",
        value: value,
      })
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const complaintRegister = await axios.post(
        REGISTER_COMPLAINTS,
        JSON.stringify({ complaintsData })
      );
      console.log(complaintRegister.data.msg);
      dispatch(resetComplaintsForm());
    } catch (error) {
      console.log("Error registering complaint:", error);
    }
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Header />
      <div
        style={{
          width: "50%",
        }}
      >
        <Box
          sx={{
            flex: "1 1 auto",
            alignItems: "center",
            display: "flex",
            justifyContent: "center",
            py: "25px",
          }}
        ></Box>
        <Stack spacing={3} sx={{ mb: 3, textAlign: "center" }}>
          <Typography variant="h4">
            <strong>Write Us</strong>
          </Typography>
        </Stack>
        {/* onSubmit={handleSubmit} */}
        <form noValidate onSubmit={handleSubmit}>
          <Stack spacing={3} alignItems="center">
            <Stack sx={{ width: "100%" }}>
              <Typography variant="body1">
                <strong>Full Name</strong>
              </Typography>
              <TextField
                fullWidth
                size="small"
                label="Full Name"
                name="fullName"
                value={complaintsData.fullName}
                onChange={handleChange}
                sx={{ backgroundColor: "white" }}
              />
            </Stack>
            <Stack sx={{ width: "100%" }}>
              <Typography variant="body1">
                <strong>Company Name</strong>
              </Typography>
              <TextField
                fullWidth
                size="small"
                label="Company Name"
                name="companyName"
                value={complaintsData.companyName}
                onChange={handleChange}
                sx={{ backgroundColor: "white" }}
              />
            </Stack>
            <Stack
              direction="row"
              spacing={4}
              alignItems="flex-start"
              sx={{ width: "100%" }}
            >
              <Stack sx={{ width: "50%" }}>
                {/*  */}
                <Typography variant="body1">
                  <strong>Complaint Type</strong>
                </Typography>
                <FormControl variant="outlined">
                  <InputLabel id="category-label">Complaint Type</InputLabel>
                  <Select
                    labelId="category-label"
                    id="category-select"
                    value={complaintsData.complaintType}
                    onChange={handleComplaintTypeChange}
                    style={{ height: "2.5rem" }}
                  >
                    {["Finance", "Technical"].map((value) => (
                      <MenuItem key={value} value={value}>
                        {value}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
                {/*  */}
              </Stack>
              <Stack sx={{ width: "50%" }}>
                <Typography variant="body1">
                  <strong>Phone Number</strong>
                </Typography>
                <TextField
                  size="small"
                  label="Phone Number"
                  name="phoneNumber"
                  value={complaintsData.phoneNumber}
                  onChange={handleChange}
                  sx={{ backgroundColor: "white" }}
                />
              </Stack>
            </Stack>

            <Stack sx={{ width: "100%" }}>
              <Typography variant="body1">
                <strong>Priority</strong>
              </Typography>
              <FormControlLabel
                control={<Radio size="small" />}
                label="N/A"
                checked={complaintsData.priority === "N/A"}
                onChange={() => handlePriorityChange("N/A")}
              />
              <FormControlLabel
                control={<Radio size="small" />}
                label="Low"
                checked={complaintsData.priority === "Low"}
                onChange={() => handlePriorityChange("Low")}
              />
              <FormControlLabel
                control={<Radio size="small" />}
                label="Normal"
                checked={complaintsData.priority === "Normal"}
                onChange={() => handlePriorityChange("Normal")}
              />
              <FormControlLabel
                control={<Radio size="small" />}
                label="High"
                checked={complaintsData.priority === "High"}
                onChange={() => handlePriorityChange("High")}
              />
            </Stack>

            <Stack sx={{ width: "100%" }}>
              <Typography variant="body1">
                <strong>Type your message</strong>
              </Typography>
              <TextField
                fullWidth
                multiline
                minRows={4}
                size="large"
                label="Message"
                name="message"
                value={complaintsData.message}
                onChange={handleChange}
                sx={{ backgroundColor: "white" }}
              />
            </Stack>
            <Button
              fullWidth
              size="large"
              type="submit"
              variant="contained"
              style={{ margin: "3rem 0" }}
            >
              Submit
            </Button>
          </Stack>
        </form>
      </div>
    </div>
  );
};

export default Complaints;
