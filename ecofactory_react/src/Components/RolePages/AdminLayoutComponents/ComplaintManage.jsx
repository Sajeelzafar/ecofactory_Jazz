import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllComplaints } from "../../../redux/slices/complaints";
import {
  Table,
  TableContainer,
  Paper,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Select,
  MenuItem,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

// import { fetchComplaints } from "../../../redux/slices/complaints";

const ComplaintManage = () => {
  const allComplaints = useSelector((state) => state.complaints);
  const dispatch = useDispatch();
  const [selectedValues, setSelectedValues] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchAllComplaints());
    console.log("All Complaints:", allComplaints);
  }, []);

  const handleActionSelect = (complaintId, value) => {
    setSelectedValues((prev) => ({ ...prev, [complaintId]: value }));
    if (value === "option1") {
      navigate(`/manage-complaints/${complaintId}`);
    }
    else if (value === "option2") {
      navigate(`/answer-complaints/${complaintId}`);
    }
    else if (value === "option3") {
      navigate(`/answer-complaints/${complaintId}`);
    }
  };

  return (
    <TableContainer
      style={{
        padding: "1rem",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Table sx={{ width: "90%", minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>
              <strong>Company Name</strong>
            </TableCell>
            <TableCell align="right">
              <strong>Customer Name</strong>
            </TableCell>
            <TableCell align="right">
              <strong>Complaint Type</strong>
            </TableCell>
            <TableCell align="right">
              <strong>Date</strong>
            </TableCell>
            <TableCell align="right">
              <strong>Priority</strong>
            </TableCell>
            <TableCell align="right">
              <strong>Actions</strong>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {allComplaints.length > 0 &&
            allComplaints?.map((complaint) => (
              <TableRow
                key={complaint.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {complaint.companyName}
                </TableCell>
                <TableCell align="right">{complaint.fullName}</TableCell>
                <TableCell align="right">{complaint.complaintType}</TableCell>
                <TableCell align="right">{complaint.createdAt}</TableCell>
                <TableCell align="right">{complaint.priority}</TableCell>
                <TableCell align="right">
                  <Select
                    value={selectedValues[complaint.id] || ""}
                    onChange={(e) =>
                      handleActionSelect(complaint.id, e.target.value)
                    }
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value="option1">Status</MenuItem>
                    {complaint.status === "Unanswered" ? (
                      <MenuItem value="option2">Answer</MenuItem>
                    ) : (
                      <MenuItem value="option3">Edit</MenuItem>
                    )}
                  </Select>
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ComplaintManage;
