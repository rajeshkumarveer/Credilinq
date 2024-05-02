import { Grid, TextField } from "@mui/material";
import React, { useState } from "react";

const CompanyInfo = ({ data, setdata, enable }) => {
  const [validation, setvalidation] = useState({
    isEnableValidationCompanyUEN: false,
    CompanyUENErrorDesc: "",
    isEnableValidationCompanyName: false,
    CompanyNameErrorDesc: "",
  });

  const checkValidation = (type, value) => {
    let temp = { ...validation };
    if (type == "UEN") {
      if (!validation.isEnableValidationCompanyUEN) {
        temp.isEnableValidationCompanyUEN = true;
      }
      if (value == "") {
        temp.CompanyUENErrorDesc = "Company UEN is required";
      } else if (!/^\d{8}[A-Za-z]$/.test(value)) {
        temp.CompanyUENErrorDesc = "Invalid Company UEN";
      } else {
        temp.CompanyUENErrorDesc = "";
      }
    } else {
      if (!validation.isEnableValidationCompanyName) {
        temp.isEnableValidationCompanyName = true;
      }
      if (value == "") {
        temp.CompanyNameErrorDesc = "Company Name is required";
      } else if (!(value.length > 1)) {
        temp.CompanyNameErrorDesc = "Minimum 2 characters required";
      } else {
        temp.CompanyNameErrorDesc = "";
      }
    }
    setvalidation({ ...temp });
  };

  return (
    <>
      <Grid container>
        <Grid item md={5.75} xs={12} pt={1}>
          <TextField
            fullWidth
            size="medium"
            type="text"
            id="Company-UEN"
            label="Company UEN"
            variant="outlined"
            placeholder="Enter your Company UEN"
            value={data.CompanyInfo.companyUEN}
            onChange={(e) => {
              if (validation.isEnableValidationCompanyUEN)
                checkValidation("UEN", e.target.value);
              setdata({
                ...data,
                CompanyInfo: {
                  ...data.CompanyInfo,
                  companyUEN: e.target.value,
                },
              });
            }}
            onBlur={() => {
              !validation.isEnableValidationCompanyUEN &&
                checkValidation("UEN", data.CompanyInfo.companyUEN);
            }}
            error={
              validation.isEnableValidationCompanyUEN &&
              !/^\d{8}[A-Za-z]$/.test(data.CompanyInfo.companyUEN)
            }
            helperText={
              validation.isEnableValidationCompanyUEN &&
              validation.CompanyUENErrorDesc
            }
          />
        </Grid>
        <Grid item md={0.5} xs={0} pt={1}></Grid>
        <Grid item md={5.75} xs={12} pt={1}>
          <TextField
            fullWidth
            size="large"
            type="text"
            id="Company-Name"
            label="Company Name"
            variant="outlined"
            placeholder="Enter your Company Name"
            value={data.CompanyInfo.companyName}
            onChange={(e) => {
              if (validation.isEnableValidationCompanyName)
                checkValidation("Name", e.target.value);
              setdata({
                ...data,
                CompanyInfo: {
                  ...data.CompanyInfo,
                  companyName: e.target.value,
                },
              });
            }}
            onBlur={() => {
              !validation.isEnableValidationCompanyName &&
                checkValidation("Name", data.CompanyInfo.companyName);
            }}
            error={
              validation.isEnableValidationCompanyName &&
              !(data.CompanyInfo.companyName.length > 1)
            }
            helperText={
              validation.isEnableValidationCompanyName &&
              validation.CompanyNameErrorDesc
            }
          />
        </Grid>
      </Grid>
    </>
  );
};

export default CompanyInfo;
