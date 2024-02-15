import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  FormControlLabel,
  Grid,
  Radio,
  Stack,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import CompanyType from "./BusinessInformationCard/CompanyType";
import BusinessInfoMain from "./BusinessInformationCard/BusinessInfoMain";

const BusinessInformation = () => {
  
  return (
    <div style={{ backgroundColor: "rgb(243, 243, 243)" }}>
      <Box py={5} mx={15}>
        <Typography variant="h4">Select the Type of Company</Typography>
        <Typography variant="body2">
          Click on the card to select your company type
        </Typography>
        <br />
        <br />
        <br />
        <CompanyType />
        <br />
        <br />
        <Typography variant="h4">Enter Details of your Company</Typography>
        <br />
        <br />
        <BusinessInfoMain />
      </Box>
    </div>
  );
};

export default BusinessInformation;
