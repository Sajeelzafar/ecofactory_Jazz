import React, { useState } from "react";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { handletechnologyProductCategoryInfoFormChange } from "../../../../redux/slices/technologyProductCategory";

const ProductCategory = () => {
  const dispatch = useDispatch();
  const selectedCategory = useSelector(
    (state) => state.technologyProductCategoryInfo.productCategory
  );
  const selectedSubCategory = useSelector(
    (state) => state.technologyProductCategoryInfo.productSubCategory
  );

  const productCategories = {
    travel: "Travel & Food",
    entertainment: "Entertainment & Online Purchases",
    education: "Education",
    banking: "Banking & Finance",
    housing: "Housing Payments",
    other: "Other Payments & Services",
  };

  const subcategories = {
    education: [
      "Schools",
      "Universities",
      "Colleges",
      "Coaching Centers",
      "Entry Test",
    ],
    banking: ["Credit card payment", "Mutual funds"],
    other: [
      "Loan repayments",
      "Coorporate payments",
      "Insurance payments",
      "Others",
    ],
  };

  const handleCategoryChange = (event) => {
    dispatch(
      handletechnologyProductCategoryInfoFormChange({
        name: "productCategory",
        value: event.target.value,
      })
    );
    // setSelectedCategory(event.target.value);
    // setSelectedSubcategory(""); // Reset subcategory when category changes
  };

  const handleSubcategoryChange = (event) => {
    dispatch(
      handletechnologyProductCategoryInfoFormChange({
        name: "productSubCategory",
        value: event.target.value,
      })
    );
    // setSelectedSubcategory(event.target.value);
  };

  return (
    <div
      style={{
        padding: "1rem",
        backgroundColor: "white",
        border: "1px solid darkgrey",
        textAlign: "center",
      }}
    >
      <Typography variant="body1">
        <strong>Product category</strong>
      </Typography>
      <hr />
      <FormControl
        variant="outlined"
        style={{ width: "40%", marginRight: "2rem", marginTop: "2rem" }}
      >
        <InputLabel id="category-label">Product Category</InputLabel>
        <Select
          labelId="category-label"
          id="category-select"
          value={selectedCategory}
          onChange={handleCategoryChange}
          style={{ height: "2.5rem" }}
        >
          {Object.entries(productCategories).map(([key, value]) => (
            <MenuItem key={key} value={key}>
              {value}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      {selectedCategory && subcategories[selectedCategory]?.length > 0 && (
        <FormControl
          variant="outlined"
          style={{ width: "40%", marginTop: "2rem" }}
        >
          <InputLabel id="subcategory-label">Subcategory</InputLabel>
          <Select
            labelId="subcategory-label"
            id="subcategory-select"
            value={selectedSubCategory}
            onChange={handleSubcategoryChange}
            style={{ height: "2.5rem" }}
          >
            {subcategories[selectedCategory]?.map((subcategory) => (
              <MenuItem key={subcategory} value={subcategory}>
                {subcategory}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      )}
    </div>
  );
};

export default ProductCategory;
