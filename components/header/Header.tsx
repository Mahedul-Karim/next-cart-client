import Box from "@mui/material/Box";
import React from "react";
import Container from "../ui/Container";
import Logo from "../ui/Logo";
import Nav from "./nav/Nav";
import NavActions from "./nav/NavActions";

const Header = () => {
  return (
    <Box
      sx={{
        height: "60px",
        backgroundColor: "background.paper",
        borderBottom: "1px solid",
        borderColor: "divider",
      }}
    >
      <Container
        sx={{
          display: {
            xxs: "none",
            md: "flex",
          },
          alignItems: "center",
          justifyContent: "space-between",
          height: "100%",
        }}
      >
        <Logo />
        <Nav />
        <NavActions />
      </Container>
    </Box>
  );
};

export default Header;
