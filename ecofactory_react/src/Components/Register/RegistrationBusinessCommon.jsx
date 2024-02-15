import { Box, Button, Grid, Stack, TextField, Typography } from "@mui/material";
import React from "react";
import Registration from "./Registration";
import registrationImage from "../../assets/register/registrationImage.svg";
import BusinessSelection from "./BusinessSelection";

const RegistrationBusinessCommon = ({ registerWindow }) => {
  return (
    <>
      <Grid
        container
        direction="row"
        sx={{
          backgroundColor: "rgb(243, 243, 243)",
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
              <strong>Business Account</strong>
            </Typography>
            <br />
            <Typography align="left" variant="text.secondary" sx={{ mb: 3 }}>
              As a business account you&apos;ll get
              <ul
                style={{
                  listStyleType: "none",
                  paddingLeft: "1rem",
                  lineHeight: "2rem",
                }}
              >
                <li>&#x2714; Account in your business&apos; name</li>
                <li>&#x2714; Unlimited company cards for employees</li>
                <li>&#x2714; Unlimited users and permissions</li>
              </ul>
            </Typography>
            <br />
            <Typography align="left" variant="text.secondary" sx={{ mb: 3 }}>
              In the next steps, we&apos;ll ask for information about your
              company, like business name, address, registration, leadership and
              ownership. payouts.
            </Typography>
          </div>
        </Grid>
        {/* Right half with the form */}
        <Grid item xs={12} md={6} sx={{ paddingRight: "5rem" }}>
          {registerWindow === "Registration" ? (
            <Registration />
          ) : (
            <BusinessSelection />
          )}
        </Grid>
      </Grid>
    </>
  );
};

export default RegistrationBusinessCommon;
