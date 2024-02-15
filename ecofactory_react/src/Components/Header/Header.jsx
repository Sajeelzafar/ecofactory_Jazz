import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import { v4 as uuidv4 } from "uuid";
import MenuItem from "@mui/material/MenuItem";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import jazzcashlogo from "../../assets/jazzcashLogo.png";
import { Link } from "react-router-dom";

const paymentsDropDown = [
  {
    id: "1",
    name: "Online Payments",
    link: "/online-payment",
  },
  {
    id: "2",
    name: "Payment Collections",
    link: "/payment-collections",
  },
  {
    id: "3",
    name: "Payrolls",
    link: "/payrolls",
  },
  {
    id: "4",
    name: "QR Payments",
    link: "/qr-payments",
  },
];

const helpDropDown = [
  {
    id: "1",
    name: "How Can We Help You ?",
    link: "/help-articles",
  },
  {
    id: "2",
    name: "Jazz Community",
    link: "/jazz-community",
  },
  {
    id: "3",
    name: "Blogs",
    link: "/blogs",
  },
  {
    id: "4",
    name: "Complaint",
    link: "/complaints",
  },
];

function Header() {
  const [anchorElProducts, setAnchorProducts] = useState(null);
  const [anchorElHelp, setAnchorHelp] = useState(null);
  const handleOpenHelpMenu = (event) => {
    setAnchorHelp(event.currentTarget);
  };

  const handleCloseHelpMenu = () => {
    setAnchorHelp(null);
  };

  const handleMouseHelpLeave = () => {
    setAnchorHelp(null);
  };

  const handleOpenProductsMenu = (event) => {
    setAnchorProducts(event.currentTarget);
  };

  const handleCloseProductsMenu = () => {
    setAnchorProducts(null);
  };

  const handleMouseProductsLeave = () => {
    setAnchorProducts(null);
  };

  return (
    <AppBar
      position="static"
      style={{ backgroundColor: "white", color: "black" }}
    >
      <div style={{ width: "75%", margin: "auto" }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <div style={{ height: "5rem", overflow: "hidden" }}>
              <img
                src={jazzcashlogo}
                alt="Jazzcash Logo"
                style={{ width: "100%", height: "100%", objectFit: "contain" }}
              />
            </div>
            <Box sx={{ flexGrow: 1, display: { sm: "flex", md: "flex" } }}>
              <Button sx={{ my: 2, mx: 2, color: "black" }}>
                <strong>Home</strong>
              </Button>
              <Button
                sx={{ my: 2, mx: 2, color: "black" }}
                endIcon={<KeyboardArrowDownIcon />}
                onMouseEnter={handleOpenProductsMenu}
              >
                <strong>Payment</strong>
              </Button>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElProducts}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElProducts)}
                onClose={handleCloseProductsMenu}
                onMouseLeave={handleMouseProductsLeave}
              >
                {paymentsDropDown.map((paymentDropDown) => (
                  <MenuItem
                    key={uuidv4()}
                    onClick={handleCloseProductsMenu}
                    style={{ width: "20rem" }}
                  >
                    <Typography
                      textAlign="center"
                      style={{ lineHeight: "3rem" }}
                    >
                      <Link
                        to={paymentDropDown.link}
                        style={{ textDecoration: "none", color: "black" }}
                      >
                        {paymentDropDown.name}
                      </Link>
                    </Typography>
                  </MenuItem>
                ))}
              </Menu>
              <Button
                sx={{ my: 2, mx: 2, color: "black" }}
                endIcon={<KeyboardArrowDownIcon />}
                onMouseEnter={handleOpenHelpMenu}
              >
                <strong>Help & Support</strong>
              </Button>
              <Menu
                sx={{
                  mt: "45px",
                }}
                id="help-appbar"
                anchorEl={anchorElHelp}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElHelp)}
                onClose={handleCloseHelpMenu}
                onMouseLeave={handleMouseHelpLeave}
              >
                {helpDropDown.map((helpDropDown) => (
                  <MenuItem
                    key={uuidv4()}
                    onClick={handleCloseHelpMenu}
                    style={{ width: "20rem" }}
                  >
                    <Typography
                      textAlign="center"
                      style={{ lineHeight: "3rem" }}
                    >
                      <Link
                        to={helpDropDown.link}
                        style={{ textDecoration: "none", color: "black" }}
                      >
                        {helpDropDown.name}
                      </Link>
                    </Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>

            <Box sx={{ flexGrow: 0 }}>
              <div
                style={{
                  backgroundColor: "rgb(55, 56, 61)",
                  color: "white",
                  borderRadius: "2rem",
                }}
              >
                <Button variant="primary">
                  <Link
                    to="/login"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    <strong>Log In</strong>
                  </Link>
                </Button>
              </div>
            </Box>
          </Toolbar>
        </Container>
      </div>
    </AppBar>
  );
}
export default Header;
