import React, { useState } from "react";
import { v4 } from "uuid";
import PropTypes from "prop-types";
import {
  Button,
  Container,
  Grid,
  IconButton,
  InputAdornment,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import Header from "../Header/Header";
// import { withStyles } from '@material-ui/core/styles';
// import Typography from '@material-ui/core/Typography';
// import Grid from '@material-ui/core/Grid';
// import Button from '@material-ui/core/Button';

const HelpAndSupport = (props) => {
  // const { classes, theme } = props;
  const [searchTerm, setSearchTerm] = useState("");
  // const {
  //     custom: {
  //         landingPage:
  //         {
  //             exploreProducts: { content: exploreProductsImgs },
  //         },
  //         helpAndSupport: { content: listByHelpContent, searchIconsrc: searchIcon },
  //     },
  // } = theme;
  const handleSearch = () => {
    // const filteredList = listByHelpContent.filter((element) => element.title.toLowerCase().includes(searchTerm.toLowerCase())
    // || element.content.toLowerCase().includes(searchTerm.toLowerCase()));
    // return filteredList;
  };

  return (
    <>
      <Header />
      <Stack sx={{ mt: "5rem" }} style={{ alignItems: "center" }}>
        <Typography variant="h2" align="center" gutterBottom>
          How can we help?
        </Typography>
        <TextField
          fullWidth
          label="Search"
          variant="outlined"
          sx={{ width: "60%" }}
          placeholder="Enter your search query..."
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton>
                  <SearchIcon />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </Stack>
    </>
  );
};

export default HelpAndSupport;
