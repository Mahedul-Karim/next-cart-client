"use client";

import React from "react";
import Box from "@mui/material/Box";
import SectionHeading from "../ui/SectionHeading";
import Divider from "@mui/material/Divider";
import { PackagePlus } from "lucide-react";

const ArrivalsTitle = () => {
  return (
    <Box
      component={"section"}
      sx={{ display: "flex", alignItems: "center", gap: 2 }}
    >
      <SectionHeading Icon={PackagePlus} text="New Arrivals" />
      <Divider sx={{ flexGrow: 1 }} />
    </Box>
  );
};

export default ArrivalsTitle;
