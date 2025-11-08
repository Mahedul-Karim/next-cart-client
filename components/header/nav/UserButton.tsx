import React, { useState } from "react";

import IconButton from "@mui/material/IconButton";
import SvgIcon from "@mui/material/SvgIcon";
import { ChevronRight, CircleUser, LogIn, SquarePen } from "lucide-react";
import { Box, Button, SxProps, Theme } from "@mui/material";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Link from "next/link";
import DotMenu from "@/components/ui/DotMenu";

type Props = {
  sx?: SxProps<Theme>;
};

const UserButton: React.FC<Props> = ({ sx }) => {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <IconButton
        sx={{
          "&:hover": { backgroundColor: "transparent" },
          padding: 0,
          ...sx,
        }}
        disableRipple
        onClick={handleClick}
      >
        <SvgIcon
          component={CircleUser}
          sx={{
            fill: "none",
            color: "text.secondary",
            strokeWidth: 1.5,
            width: {
              xxs: "30px",
              md: "24px",
            },
            height: {
              xxs: "30px",
              md: "24px",
            },
          }}
        />
      </IconButton>
      <DotMenu
        menu={{ anchorEl, open, onClose: handleClose, onClick: handleClose }}
      >
        <MenuItem>
          <IconButton
            component={Link}
            href="/login"
            disableRipple
            sx={{
              padding: 0,
              backgroundColor: "transparent",
              fontSize: "14px",
              fontWeight: 500,
              gap: 1,
              color: "text.secondary",
            }}
          >
            <SvgIcon
              component={LogIn}
              sx={{
                fill: "none",
                color: "text.secondary",
                width: "16px",
                height: "16px",
              }}
            />
            Login
          </IconButton>
        </MenuItem>
        <MenuItem>
          <IconButton
            component={Link}
            href="/signup"
            disableRipple
            sx={{
              padding: 0,
              backgroundColor: "transparent",
              fontSize: "14px",
              fontWeight: 500,
              gap: 1,
              color: "text.secondary",
            }}
          >
            <SvgIcon
              component={SquarePen}
              sx={{
                fill: "none",
                color: "text.secondary",
                width: "16px",
                height: "16px",
              }}
            />
            Sign Up
          </IconButton>
        </MenuItem>
        <Box sx={{ padding: "8px" }}>
          <Button variant="contained" component={Link} href="/shop-create">
            Become seller
            <SvgIcon
              component={ChevronRight}
              sx={{ fill: "none", width: "20px", height: "20px" }}
            />
          </Button>
        </Box>
      </DotMenu>
    </>
  );
};

export default UserButton;
