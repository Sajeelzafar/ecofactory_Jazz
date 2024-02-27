import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchComplaint } from "../../../redux/slices/complaints";
import { Stack, Typography, CircularProgress } from "@mui/material";

const ComplaintDetails = () => {
  const currentComplaint = useSelector((state) => state.complaints);
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchComplaint(id));
  }, [dispatch, id]);

  if (!currentComplaint) {
    return <CircularProgress />;
  }

  return (
    <Stack
      sx={{
        padding: "1rem",
        backgroundColor: "#f0f0f0",
        textAlign: "center",
      }}
    >
      <Typography
        variant="h1"
        sx={{
          backgroundColor: "#ccc",
          padding: "0.5rem",
          marginBottom: "1rem",
        }}
      >
        Ticket: #{id}
      </Typography>
      <Stack sx={{ marginBottom: "1rem" }}>
        <Typography variant="h6">
          <strong>Complaint Received</strong>
        </Typography>
        <Typography variant="body1">We have received your order</Typography>
      </Stack>
      <Stack sx={{ marginBottom: "1rem" }}>
        <Typography variant="h6">
          <strong>Processing</strong>
        </Typography>
        <Typography variant="body1">
          Our team is evaluating your complaint
        </Typography>
      </Stack>
      {currentComplaint.status === "Unanswered" ? (
        <Stack sx={{ marginBottom: "1rem" }}>
          <Typography variant="body1">
            <strong>We'll get back to you soon</strong>
          </Typography>
        </Stack>
      ) : (
        <Stack sx={{ marginBottom: "1rem" }}>
          <Typography variant="h6">
            <strong>Answered</strong>
          </Typography>
          <Typography variant="body1">
            {currentComplaint.anwserToMessage}
          </Typography>
        </Stack>
      )}
    </Stack>
  );
};

export default ComplaintDetails;
