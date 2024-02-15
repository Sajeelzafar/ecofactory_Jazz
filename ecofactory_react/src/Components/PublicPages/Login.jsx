import React, { useEffect, useRef, useState } from "react";
import { Button, Grid, Stack, TextField, Typography } from "@mui/material";
import registrationImage from "../../assets/register/registrationImage.svg";
import loginLogo from "../../assets/login/loginUserIcon.png";
import Header from "../Header/Header";
import axios from "../../api/axios";
import "./login.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { SettingsBackupRestoreSharp } from "@mui/icons-material";
import useAuth from "../../hooks/useAuth";

const Login = () => {
  const { setAuth } = useAuth();
  const [username, setUsername] = useState("");
  const [pwd, setPwd] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);
  const [responseData, setResponseData] = useState({});

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const userRef = useRef();
  const errRef = useRef();

  const LOGIN_URL = "/api/auth";

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [username, pwd]);

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        LOGIN_URL,
        JSON.stringify({ username, pwd })
      );
      setResponseData(response?.data);
      setAuth(response?.data.merchantDetails);
      setSuccess(true);
      navigate(from, { replace: true });
      console.log(response?.data.merchantDetails);
    } catch (err) {
      if (!err?.response) {
        setErrMsg("No Server Response");
      } else if (err.response?.status === 400) {
        setErrMsg("Missing Username or Password");
      } else if (err.response?.status === 401) {
        setErrMsg("Unauthorized");
      } else {
        setErrMsg("Login Failed");
      }

      errRef.current.focus();
    }
  };

  return (
    <>
      <Header />
      <Grid
        container
        direction="row"
        sx={{
          height: "100%",
        }}
      >
        {/* Left half with background picture and text */}
        <Grid
          item
          xs={12}
          md={6}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            paddingRight: "5rem",
            paddingLeft: "5rem",
            height: "100% !important",
          }}
        >
          <img src={registrationImage} alt="Register" />
          <div style={{ width: "70%" }}>
            <br />
            <Typography align="left" variant="h4">
              <strong>Customers</strong>
            </Typography>
            <br />
            <Typography align="left" variant="text.secondary" sx={{ mb: 3 }}>
              As a Merchant account you&apos;ll get
              <ul
                style={{
                  listStyleType: "none",
                  paddingLeft: "1rem",
                  lineHeight: "2rem",
                }}
              >
                <li>&#x2714; An account in your own name</li>
                <li>&#x2714; Two personal cards in your name</li>
                <li>&#x2714; Access for your accountant</li>
              </ul>
            </Typography>
            <br />
            <Typography align="left" variant="text.secondary" sx={{ mb: 3 }}>
              We bring together everything that&apos;s required to build
              websites and apps that accept payments and send payouts.
            </Typography>
          </div>
        </Grid>
        {/* Right side of login */}
        <Grid
          item
          xs={12}
          md={6}
          sx={{ padding: "5rem 4rem", backgroundColor: "rgb(243, 243, 243)" }}
        >
          <p
            ref={errRef}
            className={errMsg ? "errmsg" : "offscreen"}
            aria-live="assertive"
          >
            {errMsg}
          </p>
          <Stack direction="row" spacing={2}>
            <img src={loginLogo} alt="Login Logo" style={{ width: "2rem" }} />
            <Typography variant="h6">
              Welcome back to the JazzCash Portal
            </Typography>
          </Stack>
          <br />
          <Typography
            align="left"
            variant="text.secondary"
            sx={{ fontSize: "0.9rem" }}
          >
            Test your applications before going live and enable access to
            JazzCash customers
          </Typography>
          <Stack
            spacing={1}
            sx={{
              padding: "8rem 0",
            }}
          >
            <Typography variant="body1">
              <strong>Username</strong>
            </Typography>
            <TextField
              fullWidth
              ref={userRef}
              size="small"
              label="Username"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              sx={{ backgroundColor: "white" }}
            />
            <Typography variant="body1">
              <strong>Password</strong>
            </Typography>
            <TextField
              fullWidth
              size="small"
              label="Password"
              name="pwd"
              type="password"
              value={pwd}
              onChange={(e) => setPwd(e.target.value)}
              sx={{ backgroundColor: "white" }}
            />
            <Button
              variant="contained"
              style={{ marginTop: "3rem" }}
              onClick={handleLogin}
            >
              Login
            </Button>
          </Stack>
          <Stack direction="row" spacing={10}>
            <Typography variant="body2">
              Don&apos;t have an account?{" "}
              <Link to="/register">
                <strong>Sign Up</strong>
              </Link>
            </Typography>
            <Typography variant="body2">
              Forgot Password? <strong>Reset Password</strong>
            </Typography>
          </Stack>
        </Grid>
      </Grid>
    </>
  );
};

export default Login;
