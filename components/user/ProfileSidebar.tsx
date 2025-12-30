"use client";

import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import SvgIcon from "@mui/material/SvgIcon";
import {
  Handbag,
  Lock,
  LogOut,
  Logs,
  MessageCircleMore,
  NotebookTabs,
  Settings,
  TicketCheck,
  UserRound,
} from "lucide-react";
import { useAppSelector } from "@/hooks/useAppSelector";
import Link from "../ui/Link";
import { usePathname, useRouter } from "next/navigation";
import { useToast } from "@/hooks/useToast";
import { useAppDispatch } from "@/hooks/useAppDispatch";
import { api } from "@/utils/utils";
import { userLogOut } from "@/store/slicer/user";

const USER_NAV_DATA = [
  {
    id: 1,
    Icon: UserRound,
    label: "Profile",
    link: "/profile",
  },
  {
    id: 2,
    Icon: Handbag,
    label: "Orders",
    link: "/profile/orders",
  },
  {
    id: 3,
    Icon: TicketCheck,
    label: "Refunds",
    link: "/profile/refunds",
  },
  {
    id: 4,
    Icon: MessageCircleMore,
    label: "Inbox",
    link: "/profile/inbox",
  },
  {
    id: 5,
    Icon: Logs,
    label: "Track Order",
    link: "/profile/track-order",
  },
  {
    id: 6,
    Icon: Lock,
    label: "Change Password",
    link: "/profile/change-password",
  },
  {
    id: 7,
    Icon: NotebookTabs,
    label: "Address",
    link: "/profile/address",
  },
];

const ProfileSidebar = () => {
  const { user } = useAppSelector((state) => state.auth);

  const pathname = usePathname();

  const { success, error } = useToast();
  const dispatch = useAppDispatch();
  const router = useRouter();

  const handleLogout = async () => {
    try {
      const data = await api({
        url: "user/logout",
      });

      if (!data.success) {
        throw new Error(data.message);
      }

      localStorage.removeItem("user");
      dispatch(userLogOut());
      success(data.message);
      router.push("/");
    } catch (err: any) {
      error(err.message);
    }
  };

  return (
    <Box
      sx={{
        bgcolor: "background.paper",
        border: "1px solid",
        borderColor: "divider",
        borderRadius: "10px",
        padding: {
          xxs: 1,
          sm: 3,
        },
        display: "flex",
        flexDirection: "column",
        gap: 1,
      }}
    >
      {USER_NAV_DATA.map((nav) => {
        const { id, Icon, label, link } = nav;

        return (
          <Button
            variant="contained"
            sx={(theme) => ({
              bgcolor:
                pathname === link ? theme.palette.primary.main : "transparent",
              color: pathname === link ? "white" : theme.palette.text.primary,
              fontWeight: 400,
              justifyContent: {
                xxs: "center",
                sm: "flex-start",
              },
              gap: 1,
              "& > span": {
                display: {
                  xxs: "none",
                  sm: "block",
                },
              },
              minWidth: "auto",
              borderRadius: "10px",
              "&:hover": {
                bgcolor: "primary.main",
                color: "white",
              },
            })}
            component={Link}
            key={id}
            href={link}
          >
            <SvgIcon
              component={Icon}
              sx={{ fill: "none", width: 20, height: 20 }}
            />
            <span>{label}</span>
          </Button>
        );
      })}
      {user && user?.role === "admin" && (
        <Button
          variant="contained"
          sx={{
            bgcolor: "transparent",
            color: "text.primary",
            fontWeight: 400,
            justifyContent: {
              xxs: "center",
              sm: "flex-start",
            },
            gap: 1,
            "& > span": {
              display: {
                xxs: "none",
                sm: "block",
              },
            },
            minWidth: "auto",
            borderRadius: "10px",
            "&:hover": {
              bgcolor: "primary.main",
              color: "white",
            },
          }}
          component={Link}
          href={"/admin/dashboard"}
        >
          <SvgIcon
            component={Settings}
            sx={{ fill: "none", width: 20, height: 20 }}
          />
          <span>Admin Dashboard</span>
        </Button>
      )}
      <Button
        variant="contained"
        sx={{
          bgcolor: "transparent",
          color: "text.primary",
          fontWeight: 400,
          justifyContent: {
            xxs: "center",
            sm: "flex-start",
          },
          gap: 1,
          "& > span": {
            display: {
              xxs: "none",
              sm: "block",
            },
          },
          minWidth: "auto",
          borderRadius: "10px",
          "&:hover": {
            bgcolor: "primary.main",
            color: "white",
          },
        }}
        onClick={handleLogout}
      >
        <SvgIcon
          component={LogOut}
          sx={{ fill: "none", width: 20, height: 20 }}
        />
        <span>Log Out</span>
      </Button>
    </Box>
  );
};

export default ProfileSidebar;
