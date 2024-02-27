import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import UserAdd from "./UserAdd";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchAllUsers,
  fetchUser,
  resetAdminRegisterForm,
} from "../../../redux/slices/adminRegisteration";
import axios from "../../../api/axios";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

const UserManage = () => {
  const userData = useSelector((state) => state.adminRegisteration);
  const REGISTER_URL = "/api/registerRole";
  const [open, setOpen] = React.useState(false);
  const [edit, setEdit] = React.useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  React.useEffect(() => {
    dispatch(fetchAllUsers());
  }, []);

  const handleClickOpen = async (e, id) => {
    if (e.target.textContent === "Edit") {
      setEdit(true);
      await dispatch(fetchUser(id));
    }
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setEdit(false);
    dispatch(resetAdminRegisterForm());
    dispatch(fetchAllUsers());
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await axios.post(REGISTER_URL, JSON.stringify({ userData }));
    await dispatch(resetAdminRegisterForm());
    await dispatch(fetchAllUsers());
    setEdit(false);
    handleClose();
  };

  return (
    <React.Fragment>
      <Button
        variant="contained"
        style={{ marginLeft: "5rem" }}
        onClick={handleClickOpen}
      >
        Create new Personal Member
      </Button>
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
                <strong>Customer Name</strong>
              </TableCell>
              <TableCell align="right">
                <strong>Company Name</strong>
              </TableCell>
              <TableCell align="right">
                <strong>Roles</strong>
              </TableCell>
              <TableCell align="right">
                <strong>Created At</strong>
              </TableCell>
              <TableCell align="right">
                <strong>Status</strong>
              </TableCell>
              <TableCell align="right">
                <strong>Actions</strong>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {userData.length > 0 &&
              userData?.map((user) => (
                <TableRow
                  key={user.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    <Link
                      to={`/manage-users/${user.id}`}
                      style={{ textDecoration: "none", color: "inherit" }}
                    >
                      {user.fullName}
                    </Link>
                  </TableCell>
                  <TableCell align="right">{user.businessName}</TableCell>
                  <TableCell align="right">{user.role}</TableCell>
                  <TableCell align="right">{user.createdAt}</TableCell>
                  <TableCell align="right">Active</TableCell>
                  <TableCell align="right">
                    {user.role !== "merchant" && (
                      <Button onClick={(e) => handleClickOpen(e, user.id)} variant="contained">
                        Edit
                      </Button>
                    )}
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Dialog open={open} onClose={handleClose}>
        <UserAdd edit={edit} />
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSubmit}>Submit</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
};

export default UserManage;
