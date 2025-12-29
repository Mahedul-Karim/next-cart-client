import React, { useState } from "react";

import IconButton from "@mui/material/IconButton";
import SvgIcon from "@mui/material/SvgIcon";
import {
  ChevronRight,
  CircleUser,
  LogIn,
  SquarePen,
  UserRound,
} from "lucide-react";
import { Box, Button, SxProps, Theme } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import Link from "next/link";
import DotMenu from "@/components/ui/DotMenu";
import Avatar from "@mui/material/Avatar";
import { useAppSelector } from "@/hooks/useAppSelector";

type Props = {
  sx?: SxProps<Theme>;
};

const UserButton: React.FC<Props> = ({ sx }) => {
  const { isLoggedIn, user } = useAppSelector((state) => state.auth);
  // const { isSellerLoggedIn } = useAppSelector((state) => state.seller);

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
        {isLoggedIn ? (
          <Avatar
            alt={user?.name}
            src={user?.avatar?.url}
            sx={{
              width: 34,
              height: 34,
              borderRadius: "100%",
              objectFit: "cover",
            }}
          />
        ) : (
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
        )}
      </IconButton>
      <DotMenu
        menu={{ anchorEl, open, onClose: handleClose, onClick: handleClose }}
      >
        {isLoggedIn ? (
          <MenuItem>
            <IconButton
              component={Link}
              href="/profile"
              disableRipple
              sx={{
                padding: 0,
                backgroundColor: "transparent",
                fontSize: "14px",
                fontWeight: 500,
                gap: 1,
                color: "text.secondary",
                width: "100%",
                justifyContent: "flex-start",
              }}
            >
              <SvgIcon
                component={UserRound}
                sx={{
                  fill: "none",
                  color: "text.secondary",
                  width: "16px",
                  height: "16px",
                }}
              />
              Profile
            </IconButton>
          </MenuItem>
        ) : (
          [
            <MenuItem key={"login"}>
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
                  width: "100%",
                  justifyContent: "flex-start",
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
            </MenuItem>,
            <MenuItem key={"signup"}>
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
                  width: "100%",
                  justifyContent: "flex-start",
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
            </MenuItem>,
          ]
        )}

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
