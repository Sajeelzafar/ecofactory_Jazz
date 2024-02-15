import React, { useState } from "react";
import { Button, Stack, styled, Paper } from "@mui/material";
import { useSelector } from "react-redux";
// import { ToastContainer, toast } from "react-toastify";
import RegistrationBusinessCommon from "../Register/RegistrationBusinessCommon";
import Header from "../Header/Header";
import ProductSelection from "../Register/ProductSelection";
import axios from "../../api/axios";
import BusinessInformation from "../Register/BusinessInformation";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [registerWindow, setRegisterWindow] = useState("Business Selection");
  const registrationBeforeRole = useSelector((state) => state.registration);
  const productSelection = useSelector((state) => state.productSelection);
  const businessInfos = useSelector((state) => state.businessInfo);
  const directorInfos = useSelector((state) => state.directorInfo);
  const authorisepersonnelinfos = useSelector(
    (state) => state.authorisePersonnel
  );
  const settlementdetailsinfos = useSelector(
    (state) => state.settlementDetails
  );
  const technologyproductcategoryinfos = useSelector(
    (state) => state.technologyProductCategoryInfo
  );
  const navigate = useNavigate();

  const REGISTER_URL = "/api/register";

  const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: "black",
    border: "1px solid black",
    borderRadius: "0.75rem",
    cursor: "pointer",
  }));

  const handleRegisterMenuSelect = (e) => {
    setRegisterWindow(e.target.textContent);
  };

  const handleTestingSubmit = async (e) => {
    const registration = {
      ...registrationBeforeRole,
      role: 'merchant'
    }
    const result = await axios.post(
      REGISTER_URL,
      JSON.stringify({
        registration,
        productSelection,
        businessInfos,
        directorInfos,
        authorisepersonnelinfos,
        settlementdetailsinfos,
        technologyproductcategoryinfos,
      })
    );
    navigate("/login", { state: { fromRegister: true, register: true }});
    console.log("Result is:", result);
  };

  return (
    <div>
      <Header />
      <div style={{ margin: "1rem 0" }}>
        <Stack justifyContent="center" direction="row" spacing={2}>
          <Item onClick={handleRegisterMenuSelect}>Business Selection</Item>
          <Item onClick={handleRegisterMenuSelect}>Registration</Item>
          <Item onClick={handleRegisterMenuSelect}>Product Selection</Item>
          <Item onClick={handleRegisterMenuSelect}>Business Information</Item>
          <Item onClick={handleRegisterMenuSelect}>Business Documents</Item>
        </Stack>
      </div>
      {(registerWindow === "Business Selection" ||
        registerWindow === "Registration") && (
        <RegistrationBusinessCommon registerWindow={registerWindow} />
      )}
      {registerWindow === "Product Selection" && <ProductSelection />}
      {registerWindow === "Business Information" && <BusinessInformation />}

      {/* <RegisterMainBar /> */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "rgb(243, 243, 243)",
        }}
      >
        <Button
          variant="primary"
          style={{
            backgroundColor: "green",
            color: "white",
            width: "70%",
            marginTop: "3rem",
          }}
          onClick={handleTestingSubmit}
        >
          <strong>Next</strong>
        </Button>
      </div>
    </div>
  );
};

export default Register;
