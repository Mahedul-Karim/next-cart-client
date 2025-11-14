"use client";

import React from "react";
import SectionHeading from "../ui/SectionHeading";
import Box from "@mui/material/Box";
import { Package } from "lucide-react";
import Divider from "@mui/material/Divider";

const HomeProductTitle = () => {
  return (
    <>
      <Box
        component={"section"}
        sx={{ display: "flex", alignItems: "center", gap: 2 }}
      >
        <SectionHeading Icon={Package} text="Featured Products" />
        <Divider sx={{ flexGrow: 1 }} />
      </Box>
    </>
  );
};

export default HomeProductTitle;
