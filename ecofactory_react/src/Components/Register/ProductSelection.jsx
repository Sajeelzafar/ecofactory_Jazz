import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import PaymentGateway from "./ProductSelectionCards/PaymentGateway";
import CorporateCollection from "./ProductSelectionCards/CorporateCollection";
import CorporateDisbursement from "./ProductSelectionCards/CorporateDisbursement";

const ProductSelection = () => {
  return (
    <div style={{ backgroundColor: "rgb(243, 243, 243)" }}>
      <Box py={5} mx={25}>
        <Typography variant="h4">Products to make your life easier</Typography>
        <Typography variant="body2">
          Please select the products you would like to purchase
        </Typography>
        <br />
        <br />
        <br />
        <Grid container spacing={12}>
          <Grid item xs={6}>
            <PaymentGateway />
          </Grid>
          <Grid item xs={6}>
            <CorporateCollection />
          </Grid>
          <Grid item xs={6}>
            <CorporateDisbursement />
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default ProductSelection;
