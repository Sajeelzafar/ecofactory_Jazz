import {
  FormControl,
  FormControlLabel,
  Grid,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import RenderedComponents from "./RenderedComponents";

const BusinessInfoMain = () => {
  const [selectedValue, setSelectedValue] = useState("businessInformation");

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };
  return (
    <Grid
      container
      spacing={12}
      direction="row"
      sx={{
        backgroundColor: "rgb(243, 243, 243)",
        height: "100%",
      }}
    >
      {/* Left half with background picture and text */}
      <Grid
        item
        xs={4}
        md={4}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          height: "100% !important",
        }}
      >
        <FormControl component="fieldset">
          <RadioGroup
            aria-label="options"
            name="options"
            value={selectedValue}
            onChange={handleChange}
          >
            <FormControlLabel
              value="businessInformation"
              control={<Radio sx={{ '&.Mui-checked': { color: 'rgba(255, 165, 0)' } }} />}
              label="Business Information"
              sx={{
                color:
                  selectedValue === 'businessInformation' ? 'rgba(255, 165, 0)' : 'inherit',
              }}
            />
            <FormControlLabel
              value="directorsInformation"
              control={<Radio sx={{ '&.Mui-checked': { color: 'rgba(255, 165, 0)' } }} />}
              label="Directors Information"
              sx={{
                color:
                  selectedValue === 'directorsInformation' ? 'rgba(255, 165, 0)' : 'inherit',
              }}
            />
            <FormControlLabel
              value="authorisePersonnelDetails"
              control={<Radio sx={{ '&.Mui-checked': { color: 'rgba(255, 165, 0)' } }}/>}
              label="Authorise Personnel Details"
              sx={{
                color:
                  selectedValue === 'authorisePersonnelDetails' ? 'rgba(255, 165, 0)' : 'inherit',
              }}
            />
            <FormControlLabel
              value="technologyPersonOfContact"
              control={<Radio sx={{ '&.Mui-checked': { color: 'rgba(255, 165, 0)' } }}/>}
              label="Technology Person of Contact"
              sx={{
                color:
                  selectedValue === 'technologyPersonOfContact' ? 'rgba(255, 165, 0)' : 'inherit',
              }}
            />
            <FormControlLabel
              value="productCategory"
              control={<Radio sx={{ '&.Mui-checked': { color: 'rgba(255, 165, 0)' } }}/>}
              label="Product Category"
              sx={{
                color:
                  selectedValue === 'productCategory' ? 'rgba(255, 165, 0)' : 'inherit',
              }}
            />
            <FormControlLabel
              value="settlementDetails"
              control={<Radio sx={{ '&.Mui-checked': { color: 'rgba(255, 165, 0)' } }}/>}
              label="Settlement Details"
              sx={{
                color:
                  selectedValue === 'settlementDetails' ? 'rgba(255, 165, 0)' : 'inherit',
              }}
            />
            <FormControlLabel
              value="accountOpeningTemplates"
              control={<Radio sx={{ '&.Mui-checked': { color: 'rgba(255, 165, 0)' } }}/>}
              label="Account Opening Templates"
              sx={{
                color:
                  selectedValue === 'accountOpeningTemplates' ? 'rgba(255, 165, 0)' : 'inherit',
              }}
            />
            <FormControlLabel
              value="termsAndConditions"
              control={<Radio sx={{ '&.Mui-checked': { color: 'rgba(255, 165, 0)' } }}/>}
              label="Terms and Conditions"
              sx={{
                color:
                  selectedValue === 'termsAndConditions' ? 'rgba(255, 165, 0)' : 'inherit',
              }}
            />
          </RadioGroup>
        </FormControl>
      </Grid>
      {/* Right half with the form */}
      <Grid item xs={8} md={8} sx={{  }}>
        <RenderedComponents selectedValue={selectedValue} />
      </Grid>
    </Grid>
  );
};

export default BusinessInfoMain;
