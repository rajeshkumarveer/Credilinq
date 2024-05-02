import {
  Box,
  FormHelperText,
  Grid,
  IconButton,
  InputAdornment,
  Menu,
  MenuItem,
  TextField,
  Typography,
} from "@mui/material";
import Image from "next/image";
import React, { useState } from "react";
import Singapore from "../../../../../public/img/singapore.png";

const ApplicantInfo = ({ data, setdata, enable }) => {
  const [menu, setmenu] = useState(null);
  const menuOpen = (event) => {
    setmenu(event.currentTarget);
  };
  const menuClose = () => {
    setmenu(null);
  };
  const [validation, setvalidation] = useState({
    isEnableValidationFullName: false,
    FullNameErrorDesc: "",
    isEnableValidationPosition: false,
    PositionErrorDesc: "",
    isEnableValidationEmailID: false,
    EmailIdErrorDesc: "",
    isEnableValidationReEmailID: false,
    ReEmailIDErrorDesc: "",
    isEnableValidationMobileNo: false,
    MobileNoIdErrorDesc: "",
  });

  const checkValidation = (type, value) => {
    let temp = { ...validation };
    switch (type) {
      case "Name": {
        if (!validation.isEnableValidationFullName) {
          temp.isEnableValidationFullName = true;
        }
        if (value == "") {
          temp.FullNameErrorDesc = "Full Name is required";
        } else if (!(value.length > 1)) {
          temp.FullNameErrorDesc = "Minimum 2 characters required";
        } else if (!value.match("^[A-Za-z]{1,}.+")) {
          temp.FullNameErrorDesc = "Invalid Full Name";
        } else {
          temp.FullNameErrorDesc = "";
        }
        break;
      }
      case "Postition": {
        if (!validation.isEnableValidationPosition) {
          temp.isEnableValidationPosition = true;
        }
        if (value == "") {
          temp.PositionErrorDesc = "Position is required";
        } else if (!(value.length > 1)) {
          temp.PositionErrorDesc = "Minimum 2 characters required";
        } else if (!value.match("^[A-Za-z]{1,}.+")) {
          temp.PositionErrorDesc = "Invalid Position";
        } else {
          temp.PositionErrorDesc = "";
        }
        break;
      }
      case "Email": {
        if (!validation.isEnableValidationEmailID) {
          temp.isEnableValidationEmailID = true;
        }
        if (value == "") {
          temp.EmailIdErrorDesc = "Email is required";
        } else if (!value.match("[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,}$")) {
          temp.EmailIdErrorDesc = "Invalid Email";
        } else {
          temp.EmailIdErrorDesc = "";
        }
        //remail-validation
        if (
          validation.isEnableValidationReEmailID &&
          data.ApplicantInfo.reEmailId.match(
            "[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,}$"
          )
        ) {
          if (!(value === data.ApplicantInfo.reEmailId)) {
            temp.ReEmailIDErrorDesc = "Email does not match";
          } else {
            temp.ReEmailIDErrorDesc = "";
          }
        }
        break;
      }
      case "ReEmail": {
        if (!validation.isEnableValidationReEmailID) {
          temp.isEnableValidationReEmailID = true;
        }
        if (value == "") {
          temp.ReEmailIDErrorDesc = "Email is required";
        } else if (!value.match("[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,}$")) {
          temp.ReEmailIDErrorDesc = "Invalid Email";
        } else if (!(value === data.ApplicantInfo.emailId)) {
          temp.ReEmailIDErrorDesc = "Email does not match";
        } else {
          temp.ReEmailIDErrorDesc = "";
        }
        break;
      }
      case "Mobile": {
        if (!validation.isEnableValidationMobileNo) {
          temp.isEnableValidationMobileNo = true;
        }
        if (value.replace("+65", "") == "") {
          temp.MobileNoIdErrorDesc = "Mobile Number is required";
        } else if (!/^[123456789689]\d{7}$/.test(value.replace("+65", ""))) {
          temp.MobileNoIdErrorDesc = "Enter a 8-digit Mobile Number";
        } else {
          temp.MobileNoIdErrorDesc = "";
        }
        break;
      }
      default:
        break;
    }
    setvalidation({ ...temp });
  };
  return (
    <>
      <Grid container>
        <Grid item pt={1} md={5.75} xs={12}>
          <TextField
            margin="dense"
            fullWidth
            size="medium"
            type="text"
            id="Full-Name"
            label="Full Name"
            variant="outlined"
            placeholder="Enter your Full Name"
            disabled={!enable}
            value={data.ApplicantInfo.fullName}
            onChange={(e) => {
              if (validation.isEnableValidationFullName)
                checkValidation("Name", e.target.value);
              setdata({
                ...data,
                ApplicantInfo: {
                  ...data.ApplicantInfo,
                  fullName: e.target.value,
                },
              });
            }}
            onBlur={() => {
              !validation.isEnableValidationFullName &&
                checkValidation("Name", data.ApplicantInfo.fullName);
            }}
            error={
              validation.isEnableValidationFullName &&
              !data.ApplicantInfo.fullName.match("^[A-Za-z]{1,}.+")
            }
            helperText={
              validation.isEnableValidationFullName &&
              validation.FullNameErrorDesc
            }
          />
          <TextField
            fullWidth
            margin="dense"
            size="medium"
            type="email"
            id="Email-id"
            label="Email Address"
            variant="outlined"
            placeholder="Enter your Email Address"
            disabled={!enable}
            value={data.ApplicantInfo.emailId}
            onChange={(e) => {
              if (validation.isEnableValidationEmailID)
                checkValidation("Email", e.target.value);
              setdata({
                ...data,
                ApplicantInfo: {
                  ...data.ApplicantInfo,
                  emailId: e.target.value,
                },
              });
            }}
            onBlur={() => {
              !validation.isEnableValidationEmailID &&
                checkValidation("Email", data.ApplicantInfo.emailId);
            }}
            error={
              validation.isEnableValidationEmailID &&
              !data.ApplicantInfo.emailId.match(
                "[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,}$"
              )
            }
            helperText={
              validation.isEnableValidationEmailID &&
              validation.EmailIdErrorDesc
            }
          />
          <FormHelperText sx={{ color : "rgb(96, 26, 121)" , pb : 1}}>The report will be delivered on this email address</FormHelperText>
          <TextField
            margin="dense"
            fullWidth
            size="medium"
            type="text"
            id="Full-Name"
            label="Mobile Number"
            variant="outlined"
            placeholder="Mobile Number"
            defaultValue="+65"
            disabled={!enable}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <IconButton sx={{ p: 0 }} onClick={menuOpen}>
                    <Image
                      src={Singapore}
                      alt="Singapore"
                      style={{
                        width: "30px",
                        height: "auto",
                      }}
                    />
                  </IconButton>
                </InputAdornment>
              ),
            }}
            value={data.ApplicantInfo.mobileNo}
            onChange={(e) => {
              if (validation.isEnableValidationMobileNo)
                checkValidation("Mobile", e.target.value);
                if((""+e.target.value).includes("+65")){
                    setdata({
                      ...data,
                      ApplicantInfo: {
                        ...data.ApplicantInfo,
                        mobileNo: e.target.value,
                      },
                    });
                }
            }}
            onBlur={() => {
              !validation.isEnableValidationMobileNo &&
                checkValidation("Mobile", data.ApplicantInfo.mobileNo);
            }}
            error={
              validation.isEnableValidationMobileNo &&
              !/^[1234567689]\d{7}$/.test(
                data.ApplicantInfo.mobileNo.replace("+65", "")
              )
            }
            helperText={
              validation.isEnableValidationMobileNo &&
              validation.MobileNoIdErrorDesc
            }
          />
          <Menu
            id="profile-menu"
            anchorEl={menu}
            keepMounted
            open={Boolean(menu)}
            onClose={menuClose}
          >
            <MenuItem
              sx={{
                backgroundColor: "rgba(0, 0, 84, 0.08)",
                "&:hover": {
                  backgroundColor: "rgba(0, 0, 84, 0.12)",
                },
              }}
              onClick={menuClose}
            >
              <Box
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
              >
                <Image
                  src={Singapore}
                  alt="Singapore"
                  style={{
                    width: "16px",
                    height: "16px",
                  }}
                />
                <Typography variant="h5" sx={{ pl: 1 }}>
                  {" "}
                  Singapore+65
                </Typography>
              </Box>
            </MenuItem>
          </Menu>
        </Grid>
        <Grid
          item
          md={0.5}
          xs={0}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
          pt={1}
        ></Grid>
        <Grid item pt={1} md={5.75} xs={12}>
          <TextField
            margin="dense"
            fullWidth
            size="medium"
            type="text"
            id="Position"
            label="Position within company"
            variant="outlined"
            placeholder="Enter your Position"
            disabled={!enable}
            value={data.ApplicantInfo.postition}
            onChange={(e) => {
              if (validation.isEnableValidationPosition)
                checkValidation("Postition", e.target.value);
              setdata({
                ...data,
                ApplicantInfo: {
                  ...data.ApplicantInfo,
                  postition: e.target.value,
                },
              });
            }}
            onBlur={() => {
              !validation.isEnableValidationPosition &&
                checkValidation("Postition", data.ApplicantInfo.postition);
            }}
            error={
              validation.isEnableValidationPosition &&
              !data.ApplicantInfo.postition.match("^[A-Za-z]{1,}.+")
            }
            helperText={
              validation.isEnableValidationPosition &&
              validation.PositionErrorDesc
            }
          />
          <TextField
            margin="dense"
            fullWidth
            size="medium"
            type="email"
            id="Email-id"
            label="Re-enter Email Address"
            variant="outlined"
            placeholder="Enter your Email Address"
            disabled={!enable}
            value={data.ApplicantInfo.reEmailId}
            onChange={(e) => {
              if (validation.isEnableValidationReEmailID)
                checkValidation("ReEmail", e.target.value);
              setdata({
                ...data,
                ApplicantInfo: {
                  ...data.ApplicantInfo,
                  reEmailId: e.target.value,
                },
              });
            }}
            onBlur={() => {
              !validation.isEnableValidationReEmailID &&
                checkValidation("ReEmail", data.ApplicantInfo.reEmailId);
            }}
            error={
              validation.isEnableValidationReEmailID &&
              !(
                data.ApplicantInfo.reEmailId.match(
                  "[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,}$"
                ) && data.ApplicantInfo.reEmailId === data.ApplicantInfo.emailId
              )
            }
            helperText={
              validation.isEnableValidationReEmailID &&
              validation.ReEmailIDErrorDesc
            }
          />
        </Grid>
      </Grid>
    </>
  );
};

export default ApplicantInfo;
