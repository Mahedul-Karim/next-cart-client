import React from "react";
import Box from "@mui/material/Box";
import NavActions from "../header/nav/NavActions";

const Footer = () => {
  return (
    <Box component={"footer"}>
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
    </Box>
  );
};

export default Footer;
