"use client";

import Box from "@mui/material/Box";
import { useAppSelector } from "@/hooks/useAppSelector";
import IconButton from "@mui/material/IconButton";
import React from "react";
import { SxProps, Theme } from "@mui/material";
import SvgIcon from "@mui/material/SvgIcon";
import { Heart, Search, ShoppingCart } from "lucide-react";
import UserButton from "./UserButton";

type Props = {
  sx?: SxProps<Theme>;
};

const NavActions: React.FC<Props> = ({ sx }) => {
  const { cart } = useAppSelector((state) => state.cart);
  const { wishlist } = useAppSelector((state) => state.wishlist);

  return (
    <Box sx={{ display: "flex", alignItems: "center", gap: "12px", ...sx }}>
      <Box component={"div"}>
        <IconButton
          sx={{ "&:hover": { backgroundColor: "transparent" }, padding: 0 }}
          disableRipple
        >
          <SvgIcon
            component={Search}
            sx={{ fill: "none", color: "text.primary", strokeWidth: 2 }}
          />
        </IconButton>
      </Box>
      <Box component={"div"}>
        <IconButton
          sx={{
            "&:hover": { backgroundColor: "transparent" },
            padding: 0,
            position: "relative",
          }}
          disableRipple
        >
          <SvgIcon
            component={Heart}
            sx={{ fill: "none", color: "text.primary", strokeWidth: 2 }}
          />

          <Box
            component={"span"}
            sx={{
              position: "absolute",
              right: -4,
              top: -2,
              borderRadius: "9999px",
              backgroundColor: "primary.main",
              width: "14px",
              height: "14px",
              color: "white",
              fontSize: "12px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {wishlist && wishlist?.length}
          </Box>
        </IconButton>
      </Box>
      <Box component={"div"}>
        <IconButton
          sx={{
            "&:hover": { backgroundColor: "transparent" },
            padding: 0,
            position: "relative",
          }}
          disableRipple
        >
          <SvgIcon
            component={ShoppingCart}
            sx={{ fill: "none", color: "text.primary", strokeWidth: 2 }}
          />
          <Box
            component={"span"}
            sx={{
              position: "absolute",
              right: -4,
              top: -2,
              borderRadius: "9999px",
              backgroundColor: "primary.main",
              width: "14px",
              height: "14px",
              color: "white",
              fontSize: "12px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {cart && cart?.length}
          </Box>
        </IconButton>
      </Box>
      <UserButton
        sx={{
          display: {
            xxs: "none",
            md: "flex",
          },
        }}
      />
    </Box>
  );
};

export default NavActions;
