import React from "react";
import Box from "@mui/material/Box";
import NavActions from "../header/nav/NavActions";
import Container from "./Container";
import Logo from "./Logo";
import Typography from "@mui/material/Typography";
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import {
  footercompanyLinks,
  footerProductLinks,
  footerSupportLinks,
} from "@/utils/data";
import Link from "./Link";

const Footer = () => {
  return (
    <>
      <Box
        component={"footer"}
        sx={{ backgroundColor: "background.paper", color: "text.primary" }}
      >
        <Container
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xxs: "1fr",
              sm: "repeat(3,1fr)",
              lg: "repeat(4,1fr)",
            },
            gap: 3,
            paddingBlock: 8,
          }}
        >
          <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
            <Logo />
            <Typography
              sx={{
                fontSize: "14px",
                color: "text.secondary",
              }}
            >
              Empowering your shopping experience with quality products and
              trusted service. Our goal is to bring you and a smooth journey
              from browsing to checkout.
            </Typography>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
                color: "text.primary",
              }}
            >
              <Facebook size={20} />
              <Twitter size={20} />
              <Instagram size={20} />
              <Youtube size={20} />
            </Box>
          </Box>
          <Box>
            <Typography
              component={"h3"}
              sx={{
                marginBottom: "4px",
                fontWeight: 600,
                color: "text.primary",
              }}
            >
              Company
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: "4px" }}>
              {footerProductLinks.map((link, index) => (
                <Link
                  href={link.link}
                  key={index}
                  sx={{ color: "text.secondary", fontSize: "14px" }}
                >
                  {link.name}
                </Link>
              ))}
            </Box>
          </Box>

          <Box>
            <Typography
              component={"h3"}
              sx={{
                marginBottom: "4px",
                fontWeight: 600,
                color: "text.primary",
              }}
            >
              Shop
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: "4px" }}>
              {footercompanyLinks.map((link, index) => (
                <Link
                  href={link.link}
                  key={index}
                  sx={{ color: "text.secondary", fontSize: "14px" }}
                >
                  {link.name}
                </Link>
              ))}
            </Box>
          </Box>

          <Box className="text-center sm:text-start">
            <Typography
              component={"h3"}
              sx={{
                marginBottom: "4px",
                fontWeight: 600,
                color: "text.primary",
              }}
            >
              Support
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: "4px" }}>
              {footerSupportLinks.map((link, index) => (
                <Link
                  href={link.link}
                  key={index}
                  sx={{ color: "text.secondary", fontSize: "14px" }}
                >
                  {link.name}
                </Link>
              ))}
            </Box>
          </Box>
        </Container>
      </Box>
      <NavActions
        sx={{
          position: "sticky",
          bottom: 0,
          display: {
            xxs: "flex",
            md: "none",
          },
          zIndex: 9,
          backgroundColor: "background.paper",
          borderTop: "1px solid",
          borderColor: "divider",
          justifyContent: "space-around",
          gap: 2,
          "& > div": {
            display: "flex",
            width: "100%",
            paddingBlock: "10px",
            justifyContent: "center",
            alignItems: "center",
            borderRight: "1px solid",
            borderColor: "divider",
            "&:last-of-type": {
              borderRight: "none",
            },
          },
        }}
      />
    </>
  );
};

export default Footer;
