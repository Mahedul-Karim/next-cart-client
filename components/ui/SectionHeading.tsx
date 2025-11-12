"use client";

import SvgIcon from "@mui/material/SvgIcon";
import Typography from "@mui/material/Typography";
import { LucideIcon } from "lucide-react";
import React from "react";

interface Props {
  Icon: LucideIcon;
  text: string;
}

const SectionHeading: React.FC<Props> = ({ Icon, text }) => {
  return (
    <Typography
      component="h2"
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 1,
        fontSize: {
          xxs: "16px",
          xs: "20px",
        },
        fontWeight: 700,
        color: "text.primary",
        fontFamily: "var(--font-montserat)",
        letterSpacing: "-0.5px",
      }}
    >
      <SvgIcon
        component={Icon}
        sx={{
          fill: "none",
          width: {
            xxs: 24,
            xs: 28,
          },
          height: {
            xxs: 24,
            xs: 28,
          },
          color: "primary.main",
        }}
      />
      {text}
    </Typography>
  );
};

export default SectionHeading;
