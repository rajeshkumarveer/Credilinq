import {
  Box,
  Button,
  Chip,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import DoneIcon from "@mui/icons-material/Done";
import { useDropzone } from "react-dropzone";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import Link from "next/link";

const Upload = ({ data, setdata, enable }) => {
  const [isFocused, setIsFocused] = useState(false);
  const [isOtherFile, setIsOtherFile] = useState(false);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop: (acceptedFiles) => {
      setIsFocused(false);
      setIsOtherFile(false);
      const isPDF = acceptedFiles.every(
        (file) => file.type === "application/pdf"
      );
      if (isPDF) {
        setdata({
            ...data,
            Upload: {
                file: acceptedFiles,
              },
          });
      } else {
        // setError('Only PDF files are allowed.');
      }
    },
    accept: {
      "application/pdf": [".pdf"],
    },
    maxFiles: 6,
    disabled: !enable,
    onDragOver: (event) => {
      setIsFocused(true);
      let isPDF = false;
      for (let i = 0; i < event.dataTransfer.items.length; i++) {
        if (event.dataTransfer.items[i].type === "application/pdf") {
          isPDF = true;
          break;
        }
      }
      if (!isPDF) {
        setIsOtherFile(true);
      }
    },
    onDragLeave: (event) => {
      event.preventDefault();
      setIsFocused(false);
      setIsOtherFile(false);
    },
    // maxSize: 8 * 1024 * 1024, // 8MB
    onDropRejected: (rejectedFiles) => {
      alert(
        `Error: ${rejectedFiles[0].name} is not a valid PDF file or exceeds the 8MB limit.`
      );
    },
  });
  return (
    <>
      <Grid container spacing={1}>
        <Grid
          itempt={1}
          md={5.75}
          xs={12}
          display={"flex"}
          alignItems={"start"}
          justifyContent={"center"}
        >
          <Box sx={{ width: "100%", ml: 1 }}>
            <Box
              {...getRootProps()}
              sx={{
                width: "100%",
                textAlign: "center",
                cursor: enable && "pointer",
                borderRadius: "4px",
                border: isOtherFile
                  ? "1px dashed #df4829"
                  : "1px dashed rgba(0, 0, 0, 0.118)",
                backgroundColor: "rgb(250, 250, 250)",
                color: "rgb(189, 189, 189)",
                p: isFocused ? 10 : 5,
                px: isFocused ? 5 : 3,
                mt: 2,
              }}
              disabled={!enable}
            >
              <input
                {...getInputProps()}
                accept="application/pdf"
                disabled={!enable}
              />
              {isFocused ? (
                <>
                  <Typography
                    sx={{
                      color: enable ? "rgb(0, 0, 84)" : "rgb(189, 189, 189)",
                      color: isOtherFile && "#df4829",
                    }}
                  >
                    {isOtherFile
                      ? "Only PDF files are Accepted"
                      : "Drop the File here ..."}
                  </Typography>
                </>
              ) : (
                <>
                  <IconButton
                    sx={{
                      backgroundColor: "rgba(0, 0, 84, 0.12)",
                      color: "rgb(0, 0, 84)",
                      "&:hover": {
                        backgroundColor: "rgba(0, 0, 84, 0.12)",
                      },
                      mb: 1,
                    }}
                    disabled={!enable}
                  >
                    <UploadFileIcon />
                  </IconButton>
                  <Typography
                    sx={{
                      color: enable ? "rgb(0, 0, 84)" : "rgb(189, 189, 189)",
                    }}
                  >
                    <span
                      style={{
                        borderBottom: enable
                          ? "1px solid rgb(0, 0, 84)"
                          : "1px solid rgb(189, 189, 189)",
                      }}
                    >
                      {" "}
                      Click to upload
                    </span>{" "}
                    or drag and drop Bank Statements
                  </Typography>
                </>
              )}
            </Box>
          </Box>
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
        <Grid
          itempt={1}
          md={5.75}
          xs={12}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Box>
            <List>
              <ListItem disablePadding>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "start",
                    justifyContent: "center",
                  }}
                >
                  <ListItemIcon sx={{ mt: 1 }}>
                    <DoneIcon />
                  </ListItemIcon>
                  <Box>
                    <ListItemText
                      sx={{ color: "rgba(0, 0, 0, 0.6)" }}
                      primary="PDFs (not scanned copies) of company's operating bank current account(s) statements for the past 6 months."
                    />
                    <ListItemText
                      sx={{ color: "rgba(0, 0, 0, 0.6)" }}
                      primary="Example: If today is 01 May 24, then please upload bank statements from Nov 23 to Apr 24 (both months inclusive)"
                    />
                  </Box>
                </Box>
              </ListItem>
              <ListItem disablePadding>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "start",
                    justifyContent: "center",
                  }}
                >
                  <ListItemIcon sx={{ mt: 1 }}>
                    <DoneIcon />
                  </ListItemIcon>
                  <ListItemText
                    sx={{ color: "rgba(0, 0, 0, 0.6)" }}
                    primary="If your company is multi-banked, then please upload 6 months bank statements for each bank account"
                  />
                </Box>
              </ListItem>
              <ListItem disablePadding>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "start",
                    justifyContent: "center",
                  }}
                >
                  <ListItemIcon sx={{ mt: 1 }}>
                    <DoneIcon />
                  </ListItemIcon>
                  <ListItemText
                    sx={{ color: "rgba(0, 0, 0, 0.6)" }}
                    primary="If your file is password protected, we request you to remove the password and upload the file to avoid submission failure"
                  />
                </Box>
              </ListItem>
              <ListItem disablePadding>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "start",
                    justifyContent: "center",
                  }}
                >
                  <ListItemIcon sx={{ mt: 1 }}>
                    <DoneIcon />
                  </ListItemIcon>
                  <ListItemText sx={{ color: "rgba(0, 0, 0, 0.6)" }}>
                    In case if you are facing any issue while uploading bank
                    statements, Please contact us on{" "}
                    <Link
                      href="mailto:support@credilinq.ai"
                      style={{ color: "rgb(96, 26, 121)" }}
                    >
                      support@credilinq.ai
                    </Link>
                  </ListItemText>
                </Box>
              </ListItem>
            </List>
          </Box>
        </Grid>
      </Grid>
      <Box>
        {data.Upload.file.length > 0 && (
          <>
            <Box my={1}>
              {data.Upload.file.map((file, index) => (
                <Chip
                  key={index}
                  variant="outlined"
                  label={file.name}
                  size="large"
                  sx={{ mr: 0.5, mb : 0.5, color: "#26ab59", borderColor: "#26ab59" }}
                />
              ))}
            </Box>
            <Button sx={{ color: "rgb(0, 0, 84)" }} onClick={()=>{setdata({
            ...data,
            Upload: {
                file: [],
              },
          });}}>Remove All</Button>
          </>
        )}
      </Box>
    </>
  );
};

export default Upload;
