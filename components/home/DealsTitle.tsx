"use client";

import Box from "@mui/material/Box";
import React from "react";
import SectionHeading from "../ui/SectionHeading";
import Divider from "@mui/material/Divider";
import { Gift } from "lucide-react";

const DealsTitle = () => {
  return (
    <Box
      component={"section"}
      sx={{ display: "flex", alignItems: "center", gap: 2 }}
    >
      <SectionHeading Icon={Gift} text="Deals" />
      <Divider sx={{ flexGrow: 1 }} />
    </Box>
  );
};

export default DealsTitle;
