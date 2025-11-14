"use client";

import React from "react";
import { useToast } from "@/hooks/useToast";
import Box from "@mui/material/Box";
import { useAppSelector } from "@/hooks/useAppSelector";
import {
  CircleCheckBig,
  CircleAlert,
  TriangleAlert,
  LucideIcon,
  X,
} from "lucide-react";
import { useTheme } from "@mui/material";
import SvgIcon from "@mui/material/SvgIcon";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";

type Styles = {
  error: {
    bg: string;
    text: string;
    Icon: LucideIcon;
  };
  success: {
    bg: string;
    text: string;
    Icon: LucideIcon;
  };
  warning: {
    bg: string;
    text: string;
    Icon: LucideIcon;
  };
};

const Toast = () => {
  const { toasts } = useAppSelector((state) => state.toast);

  const { removeToast } = useToast();

  const theme = useTheme();

  const styles: Styles = {
    error: {
      bg: theme.palette.error.main,
      text: "white",
      Icon: CircleAlert,
    },
    success: {
      bg: theme.palette.success.main,
      text: "white",
      Icon: CircleCheckBig,
    },
    warning: {
      bg: theme.palette.warning.main,
      text: "white",
      Icon: TriangleAlert,
    },
  };

  return (
    <Box
      sx={{
        position: "fixed",
        inset: "16px",
        pointerEvents: "none",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        alignItems: "flex-end",
        zIndex: 999999,
        gap: "16px",
        overflowX: "hidden",
      }}
      id="toast-container"
    >
      {toasts.length > 0 &&
        toasts.map((toast) => {
          const { bg, Icon, text } = styles[toast?.type];

          return (
            <Box
              component={"section"}
              sx={{
                width: {
                  xs: "270px",
                  sm: "350px",
                },
                minHeight: "75px",
                borderRadius: "6px",
                display: "flex",
                gap: "8px",
                pointerEvents: "auto",
                paddingInline: 2,
                backgroundColor: bg,
                color: text,
              }}
              className={`slide`}
              key={toast?.id}
              data-id={toast?.id}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  width: "100%",
                  paddingBlock: "4px",
                }}
              >
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  <SvgIcon
                    component={Icon}
                    sx={{ fill: "none", width: 20, height: 20 }}
                  />
                  <Typography
                    component={"p"}
                    sx={{ fontWeight: 500, whiteSpace: "pre-line" }}
                  >
                    {toast?.message}
                  </Typography>
                </Box>
                <Box
                  sx={{
                    paddingInline: "4px",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <IconButton
                    disableRipple
                    onClick={() => removeToast(toast?.id)}
                  >
                    <SvgIcon
                      component={X}
                      sx={{
                        fill: "none",
                        width: 20,
                        height: 20,
                        color: "white",
                      }}
                    />
                  </IconButton>
                </Box>
              </Box>
            </Box>
          );
        })}
    </Box>
  );
};

export default Toast;
