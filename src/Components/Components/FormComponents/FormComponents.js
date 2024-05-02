import React, { useEffect, useState } from "react";
import Header from "../ReusableComponents/Header";
import Footer from "../ReusableComponents/Footer";
import {
  Box,
  Button,
  Card,
  CardContent,
  Checkbox,
  Chip,
  Container,
  FormControlLabel,
  Grid,
  IconButton,
  InputAdornment,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  Paper,
  Step,
  StepContent,
  StepLabel,
  Stepper,
  Typography,
  useMediaQuery,
  TextField,
  Switch,
} from "@mui/material";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import DoneIcon from "@mui/icons-material/Done";
import { useDropzone } from "react-dropzone";
import Image from "next/image";

import Link from "next/link";
import CompanyInfo from "./SubFormComponents/CompanyInfo";
import ApplicantInfo from "./SubFormComponents/ApplicantInfo";
import Upload from "./SubFormComponents/Upload";
import Terms from "./SubFormComponents/Terms";

function FormComponents({onFormSubmit}) {
  const [data, setdata] = useState({
    CompanyInfo: {
      companyUEN: "",
      companyName: "",
    },
    ApplicantInfo: {
      fullName: "",
      postition: "",
      emailId: "",
      reEmailId: "",
      mobileNo: "+65",
    },
    Upload: {
      file: [],
    },
    Terms: {
      Agree: false,
    },
  });
  useEffect(() => {
    //validate and change active step
    //company info validation
    if (
      !(
        /^\d{8}[A-Za-z]$/.test(data.CompanyInfo.companyUEN) &&
        data.CompanyInfo.companyName.length > 1
      )
    ) {
      setActiveStep(0);
    }
    //Applicant  info validation
    else if (
      !(
        data.ApplicantInfo.fullName.match("^[A-Za-z]{1,}.+") &&
        data.ApplicantInfo.emailId.match(
          "[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,}$"
        ) &&
        /^[1234567689]\d{7}$/.test(
          data.ApplicantInfo.mobileNo.replace("+65", "")
        ) &&
        data.ApplicantInfo.postition.match("^[A-Za-z]{1,}.+") &&
        data.ApplicantInfo.reEmailId.match(
          "[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,}$"
        ) &&
        data.ApplicantInfo.reEmailId === data.ApplicantInfo.emailId
      )
    ) {
      setActiveStep(1);
    }else if(!data.Upload.file.length>0){
      setActiveStep(2);
    }else if(!data.Terms.Agree ){
      setActiveStep(3);
    }
    else setActiveStep(4);
  }, [data]);
  const [activeStep, setActiveStep] = React.useState(0);
  const lgUp = useMediaQuery((theme) => theme.breakpoints.up("md"));
  const stepsLabel = [
    "Company Information",
    "Applicant Information",
    "Upload Documents",
    "Terms & Conditions",
  ];
  const stepContent = [
    <CompanyInfo data={data} setdata={setdata} enable={true} />,
    <ApplicantInfo data={data} setdata={setdata} enable={activeStep >= 1} />,
    <Upload data={data} setdata={setdata} enable={activeStep >= 2} />,
    <Terms data={data} setdata={setdata} enable={activeStep >= 3} />,
  ];
  const onSubmit =  ()=>{
    onFormSubmit({
      ...data.ApplicantInfo,
      ...data.CompanyInfo,
      ...data.Terms,
      ...data.Upload
    })
  }
  return (
    <>
      <Header content={"SME HealthCheck - Get Started"} />
      <Container
        maxWidth={"lg"}
        style={{ padding: !lgUp ? "0px !important" : "" }}
      >
        <Card sx={{ m: 0 }}>
          <CardContent>
            <Box sx={{ py: 1 }} data-aos="zoom-in" data-aos-duration="500">
              <Stepper
                activeStep={activeStep}
                orientation="vertical"
                className="my-stepper"
              >
                {stepsLabel.map((label, index) => (
                  <Step key={index} expanded={true}>
                    <StepLabel sx={{ mb: 1 }}>
                      <Box
                        sx={{
                          background: "rgb(96, 26, 121)",
                          p: 1,
                          px: 2,
                          borderRadius: "5px",
                        }}
                      >
                        <Typography variant="h4" color={"white"}>
                          {label}
                        </Typography>
                      </Box>
                    </StepLabel>
                    <StepContent>{stepContent[index]}</StepContent>
                  </Step>
                ))}
              </Stepper>
              <Box
                sx={{ my: 2 }}
                display={"flex"}
                justifyContent={"end"}
                alignItems={"end"}
              >
                <Button color="success" variant="contained" disabled={activeStep!=4} onClick={onSubmit}>
                  SUBMIT
                </Button>
              </Box>
            </Box>
          </CardContent>
        </Card>
      </Container>
      <Footer />
    </>
  );
}

export default FormComponents;
