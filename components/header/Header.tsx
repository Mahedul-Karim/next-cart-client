import Box from "@mui/material/Box";
import React from "react";
import Container from "../ui/Container";
import Logo from "../ui/Logo";

const Header = () => {
  return (
    <Box
      sx={{
        height: "70px",
        backgroundColor: "background.paper",
        borderBottom: "1px solid",
        borderColor: "divider",
      }}
    >
      <Container
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height:"100%"
        }}
      >
        <Logo />
      </Container>
    </Box>
  );
};

export default Header;
