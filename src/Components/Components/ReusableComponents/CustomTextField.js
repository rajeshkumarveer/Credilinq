import React from "react";
import { TextField } from "@mui/material";
import { styled } from "@mui/material/styles";

const CustomTextField = styled(TextField)({
  // "& label": {
  //   fontSize: "0.95rem", // Small font size for the label inside the input field
  // },
  // "& label.Mui-focused": {
  //   // color: "#bc86d2",
  //   color: "#000000",
  //   opacity: 0.6,
  // },
  // "& .MuiInput-underline:after": {
  //   // borderBottomColor: "#23c9d7",
  //   borderBottomColor: "#000000",
  //   opacity: 0.6,
  // },
  // "& .MuiOutlinedInput-root": {
  //   "& fieldset": {
  //     borderColor: "#ccc",
  //   },
  //   "&:hover fieldset": {
  //     // borderColor: "#000",
  //   },
  //   "&.Mui-focused fieldset": {
  //     // borderColor: "#23c9d7",
  //     borderColor: "#000000",
  //     opacity: 0.6,
  //   },
  // },
});

export default CustomTextField;
