'use client'

import { styled } from "@mui/material";
import NextLink from "next/link";

const Link = styled(NextLink)(({ theme }) => ({
  textDecoration: "none",
  color: theme.palette.text.primary,
}));

export default Link;
