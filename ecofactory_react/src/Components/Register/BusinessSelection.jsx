import { Box, Card, Stack, Typography } from "@mui/material";
import React from "react";

const BusinessSelection = () => {
  return (
    <div>
      <Box
        sx={{
          flex: "1 1 auto",
          alignItems: "center",
          display: "flex",
          justifyContent: "center",
          py: "25px",
        }}
      ></Box>
      <Stack spacing={1} sx={{ mb: 3 }}>
        <Typography variant="h4">
          <strong>Let&apos;s create your account</strong>
        </Typography>
        <Typography variant="text.secondary" sx={{ color: "rgb(130, 117, 125)" }}>
          Signing up for JazzCash business is fast and free
        </Typography>
        <br />
        <hr />
        <Typography variant="text.secondary" sx={{ color: "rgb(130, 117, 125)" }}>
          To begin this journey please tell us what type of account you’d be
          opening.
        </Typography>
      </Stack>
      <Stack>
        
      </Stack>
    </div>
  );
};

export default BusinessSelection;
