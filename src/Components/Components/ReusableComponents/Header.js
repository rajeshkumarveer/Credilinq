import { Box, Container, Toolbar, Typography, useMediaQuery } from "@mui/material";
import Image from "next/image";
import React from "react";
import Logo from "../../../../public/img/logo.svg";

function Header({content}) {
    const isSM = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  return (
    <Box id="header" sx={{ p: 2 , py : 2.5 }}>
      <Container maxWidth={"md"}>
        <Box sx={{display : "flex", justifyContent : "center" , alignItems : "center"}}  data-aos="zoom-in" data-aos-duration="500">
          <Image
            src={Logo}
            alt="Logo"
            style={{
              width: isSM ? "120px" : "140px",
              height: "auto",
            }}
          />
          <Box flexGrow={1} />
          <Typography variant={isSM ? "h5" : "h1"} color={"white"} sx={{pl:2}}>
            {content}
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}

export default Header;
