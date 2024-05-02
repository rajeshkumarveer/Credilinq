import {
  Box,
  Checkbox,
  FormControlLabel,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import Link from "next/link";
import React from "react";
import DoneIcon from "@mui/icons-material/Done";

const Terms = ({ data, setdata, enable }) => {
  return (
    <>
      <Box mt={1}>
        <FormControlLabel
          sx={{ mb: 2 }}
          control={
            <Checkbox
                disabled={!enable}
              color="secondary"
              checked={data.Terms.Agree}
              onChange={(event) => {
                setdata({
                  ...data,
                  Terms: {
                    Agree: event.target.checked,
                  },
                });
              }}
            />
          }
          label="By ticking, you are confirming that you have understood and are agreeing to the details mentioned:"
        />
        <List>
          <ListItem sx={{ mb: 1 }}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <ListItemIcon sx={{ mt: 0.5 }}>
                <DoneIcon />
              </ListItemIcon>
              <Box>
                <ListItemText
                  sx={{ color: "rgba(0, 0, 0, 0.6)", ml: 1 }}
                  primary="I confirm that I am the authorized person to upload bank statements on behalf of my company"
                />
              </Box>
            </Box>
          </ListItem>
          <ListItem sx={{ mb: 1 }}>
            <Box
              sx={{
                display: "flex",
                alignItems: "start",
                justifyContent: "center",
              }}
            >
              <ListItemIcon sx={{ mt: 0.5 }}>
                <DoneIcon />
              </ListItemIcon>
              <ListItemText
                sx={{ color: "rgba(0, 0, 0, 0.6)", ml: 1 }}
                primary="I assure you that uploaded bank statements and provided company information match and are of the same company, if there is a mismatch then my report will not be generated"
              />
            </Box>
          </ListItem>
          <ListItem sx={{ mb: 1 }}>
            <Box
              sx={{
                display: "flex",
                alignItems: "start",
                justifyContent: "center",
              }}
            >
              <ListItemIcon sx={{ mt: 0.5 }}>
                <DoneIcon />
              </ListItemIcon>
              <ListItemText
                sx={{ color: "rgba(0, 0, 0, 0.6)", ml: 1 }}
                primary="I understand that this is a general report based on the bank statements and Credilinq is not providing a solution or guiding me for my business growth"
              />
            </Box>
          </ListItem>
          <ListItem sx={{ mb: 1 }}>
            <Box
              sx={{
                display: "flex",
                alignItems: "start",
                justifyContent: "center",
              }}
            >
              <ListItemIcon sx={{ mt: 0.5 }}>
                <DoneIcon />
              </ListItemIcon>
              <ListItemText
                sx={{ color: "rgba(0, 0, 0, 0.6)", ml: 1 }}
                // primary="I have read and understand the Terms & Conditions"
              >
                I have read and understand the{" "}
                <Link
                  href="https://smehealthcheck.credilinq.ai/terms-and-conditions"
                  sx={{ fontWeight: "bold" }}
                >
                  {" "}
                  Terms & Conditions
                </Link>
              </ListItemText>
            </Box>
          </ListItem>
        </List>
      </Box>
    </>
  );
};
export default Terms;
