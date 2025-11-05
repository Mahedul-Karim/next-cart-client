import Box from "@mui/material/Box";
import React from "react";
import Container from "../ui/Container";
import Logo from "../ui/Logo";
import Nav from "./nav/Nav";
import NavActions from "./nav/NavActions";
import MobileNav from "./nav/MobileNav";

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
      <Container
        sx={{
          display: {
            xxs: "flex",
            md: "none",
          },
          alignItems: "center",
          justifyContent: "space-between",
          height: "100%",
        }}
      >
        <MobileNav />
      </Container>
    </Box>
  );
};

export default Header;
