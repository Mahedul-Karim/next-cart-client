"use client";

import SvgIcon from "@mui/material/SvgIcon";
import IconButton from "@mui/material/IconButton";
import Drawer from "@mui/material/Drawer";
import React, { useState } from "react";
import { TextAlignStart } from "lucide-react";
import Logo from "@/components/ui/Logo";
import UserButton from "./UserButton";
import Box from "@mui/material/Box";
import Nav from "./Nav";

const MobileNav = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <IconButton
        disableRipple
        sx={{ "&:hover": { backgroundColor: "transparent" }, padding: 0 }}
        onClick={() => setOpen(true)}
      >
        <SvgIcon component={TextAlignStart} sx={{ color: "text.primary" }} />
      </IconButton>
      <Logo />
      <UserButton />
      <Drawer
        open={open}
        onClose={() => setOpen(false)}
        slotProps={{
          backdrop: {
            sx: {
              backdropFilter: "blur(2px)",
            },
          },
          paper: {
            sx: {
              width: {
                xxs: 200,
                xs: 260,
              },
              padding: 2,
            },
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            paddingBottom: "4px",
            borderBottom: "1px dashed",
            borderColor: "divider",
          }}
        >
          <Logo />
        </Box>
        <Box>
          <Nav setOpen={setOpen} />
        </Box>
      </Drawer>
    </>
  );
};

export default MobileNav;
