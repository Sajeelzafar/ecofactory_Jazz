import {
  Card,
  CardContent,
  CardMedia,
  FormControlLabel,
  Radio,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import typeOfCompany from "../../../assets/register/typeOfCompany.png";
import { useDispatch, useSelector } from "react-redux";
import { handleRegisterFormChange } from "../../../redux/slices/registration";

const CompanyType = () => {
  const dispatch = useDispatch();
  const selectedCompany = useSelector((state) => state.registration.company_type);
//   const [selectedCompany, setSelectedCompany] = useState(null);

  const handleCompanySelect = (companyId) => {
    dispatch(handleRegisterFormChange({ name: "company_type", value: companyId }));
  };
  return (
    <Stack direction="row" spacing={5} justifyContent="center">
      <Card sx={{ maxWidth: 325 }}>
        <Stack direction="row" mx={4} mt={2} spacing={22}>
          <CardMedia
            component="img"
            image={typeOfCompany} // Assuming typeOfCompany is a variable holding the image URL
            alt="Company Logo"
            style={{ width: "4rem" }}
          />
          <FormControlLabel
            control={<Radio size="small" />}
            checked={selectedCompany === 0}
            onChange={() => handleCompanySelect(0)}
          />
        </Stack>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Partnerships
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <strong>
              The partners in a partnership may be individuals, businesses,
              interest-based organizations, schools, or governments.
            </strong>
          </Typography>
        </CardContent>
      </Card>

      <Card sx={{ maxWidth: 325 }}>
        <Stack direction="row" mx={4} mt={2} spacing={22}>
          <CardMedia
            component="img"
            image={typeOfCompany} // Assuming typeOfCompany is a variable holding the image URL
            alt="Company Logo"
            style={{ width: "4rem" }}
          />
          <FormControlLabel
            control={<Radio size="small" />}
            checked={selectedCompany === 1}
            onChange={() => handleCompanySelect(1)}
          />
        </Stack>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Sole Properitor
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <strong>
              Enterprise owned and run by one person and in which there is no
              legal distinction between the owner
            </strong>
          </Typography>
        </CardContent>
      </Card>
      <Card sx={{ maxWidth: 325 }}>
        <Stack direction="row" mx={4} mt={2} spacing={22}>
          <CardMedia
            component="img"
            image={typeOfCompany} // Assuming typeOfCompany is a variable holding the image URL
            alt="Company Logo"
            style={{ width: "4rem" }}
          />
          <FormControlLabel
            control={<Radio size="small" />}
            checked={selectedCompany === 2}
            onChange={() => handleCompanySelect(2)}
          />
        </Stack>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Private & Public Limited Companies
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <strong>
              Company that are registered in Security & Exchange Commission of
              Pakistan (SECP)
            </strong>
          </Typography>
        </CardContent>
      </Card>
    </Stack>
  );
};

export default CompanyType;
