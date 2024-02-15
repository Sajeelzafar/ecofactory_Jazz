import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import InfoRoundedIcon from "@mui/icons-material/InfoOutlined";
import paymentGatewayImg from "../../../assets/productSelection/paymentGateway.png";
import { Box, Checkbox, Divider, FormControlLabel } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { onlinePaymentAction } from "../../../redux/slices/productSelection";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function PaymentGateway() {
  const dispatch = useDispatch();
  const selectedOptions = useSelector(
    (state) => state.productSelection.onlinePaymentGateway
  );
  const [expanded, setExpanded] = useState(false);
  const productGatewayChoices = [
    "Mobile Wallet",
    "Cards",
    "Bank Accounts",
    "Vouchers",
  ];
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const handleCheckboxPaymentGatewayChange = (option) => {
    dispatch(onlinePaymentAction(option));
  };

  return (
    <Card>
      <CardHeader
        title="Online Payment Gateway"
        action={
          <IconButton aria-label="settings">
            <InfoRoundedIcon fontSize="large" fill="none" />
          </IconButton>
        }
        titleTypographyProps={{ variant: "h6", style: { fontSize: "1rem" } }}
      />
      <CardMedia
        component="img"
        image={paymentGatewayImg}
        alt="Payment Gateway"
      />
      <CardActions style={{ padding: "1rem" }} disableSpacing>
        <Box
          onClick={handleExpandClick}
          sx={{
            width: "50%",
            margin: "auto",
            border: "1px solid",
            borderRadius: "2rem",
            padding: "0 3rem",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            cursor: "pointer",
          }}
        >
          <Typography variant="body1" component="span">
            Select this
          </Typography>
          <ExpandMore
            expand={expanded}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore>
        </Box>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography variant="h6">Payment Gateways</Typography>
          <Divider sx={{ width: "100%", marginBottom: "1rem" }} />
          {productGatewayChoices.map((option) => (
            <FormControlLabel
              key={option}
              control={
                <Checkbox
                  checked={selectedOptions.includes(option)}
                  onChange={() => handleCheckboxPaymentGatewayChange(option)}
                  size="small"
                />
              }
              label={
                <Typography sx={{ fontSize: "0.9rem" }}>{option}</Typography>
              }
              sx={{ height: "2rem" }}
            />
          ))}
        </CardContent>
      </Collapse>
    </Card>
  );
}
