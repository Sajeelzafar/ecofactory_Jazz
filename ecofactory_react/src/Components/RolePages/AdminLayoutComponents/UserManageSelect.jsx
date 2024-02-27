import {
  CircularProgress,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchUser } from "../../../redux/slices/adminRegisteration";

const UserManageSelect = () => {
  const currentUser = useSelector((state) => state.adminRegisteration);
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUser(id));
  }, [dispatch, id]);

  if (!currentUser) {
    return <CircularProgress />;
  }

  return (
    <TableContainer
      style={{
        padding: "1rem",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Table sx={{ width: "50%", minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>
              <strong>Headings</strong>
            </TableCell>
            <TableCell align="right">Selected User</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>
              <strong>Full Name</strong>
            </TableCell>
            <TableCell align="right">{currentUser.fullName}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <strong>Business Name</strong>
            </TableCell>
            <TableCell align="right">{currentUser.businessName}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <strong>Mobile Number</strong>
            </TableCell>
            <TableCell align="right">{currentUser.mobileNumber}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <strong>Username</strong>
            </TableCell>
            <TableCell align="right">{currentUser.username}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <strong>Email</strong>
            </TableCell>
            <TableCell align="right">{currentUser.email}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <strong>Password</strong>
            </TableCell>
            <TableCell align="right">{currentUser.password}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <strong>Company Type</strong>
            </TableCell>
            <TableCell align="right">{currentUser.company_type}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <strong>Role</strong>
            </TableCell>
            <TableCell align="right">{currentUser.role}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default UserManageSelect;
