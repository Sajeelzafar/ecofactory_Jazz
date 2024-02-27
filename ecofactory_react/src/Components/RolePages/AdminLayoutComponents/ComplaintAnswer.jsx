import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  fetchComplaint,
  updateComplaint,
} from "../../../redux/slices/complaints";
import {
  Stack,
  Typography,
  CircularProgress,
  Button,
  TextField,
} from "@mui/material";

const ComplaintAnswer = () => {
  const currentComplaint = useSelector((state) => state.complaints);
  const { id } = useParams();
  const dispatch = useDispatch();
  const [editMode, setEditMode] = useState(false);
  const [editedAnswer, setEditedAnswer] = useState(
    currentComplaint[id-1]?.anwserToMessage
  );

  useEffect(() => {
    dispatch(fetchComplaint(id));
  }, [dispatch, id]);

  const handleEditClick = () => {
    setEditMode(true);
  };

  const handleCancelEdit = () => {
    setEditMode(false);
    setEditedAnswer(currentComplaint.anwserToMessage);
  };

  const handleSubmit = async () => {
    await dispatch(updateComplaint({ id, answer: editedAnswer }));
    await dispatch(fetchComplaint(id));
    setEditMode(false);
  };

  if (!currentComplaint) {
    return <CircularProgress />;
  }

  return (
    <Stack
      spacing={5}
      sx={{ padding: "1rem", backgroundColor: "#f0f0f0", textAlign: "center" }}
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
      <Typography variant="h2">Query: {currentComplaint.message}</Typography>
      {editMode ? (
        <TextField
          multiline
          rows={4}
          value={editedAnswer}
          onChange={(e) => setEditedAnswer(e.target.value)}
          fullWidth
          sx={{ marginBottom: "1rem" }}
        />
      ) : (
        <Typography variant="body1">
          Your solution: <br />
          {editedAnswer}
        </Typography>
      )}
      {editMode ? (
        <Stack direction="row" spacing={5} sx={{ marginBottom: "1rem" }}>
          <Button
            variant="contained"
            style={{ margin: "2rem" }}
            onClick={handleCancelEdit}
          >
            Cancel
          </Button>
          <Button
            variant="contained"
            style={{ margin: "2rem" }}
            onClick={handleSubmit}
          >
            Submit
          </Button>
        </Stack>
      ) : (
        <Button
          variant="contained"
          style={{ margin: "2rem 0" }}
          onClick={handleEditClick}
        >
          Edit
        </Button>
      )}
    </Stack>
  );
};

export default ComplaintAnswer;
