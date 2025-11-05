"use client";

import Link from "@/components/ui/Link";
import { navItems } from "@/utils/data";
import Box from "@mui/material/Box";
import { usePathname } from "next/navigation";
import React from "react";

interface Props {
  setOpen?: React.Dispatch<React.SetStateAction<boolean>>;
}

const Nav: React.FC<Props> = ({ setOpen }) => {
  const pathname = usePathname();

  return (
    <Box
      component={"nav"}
      sx={{
        height: {
          xxs: "auto",
          md: "100%",
        },
        display: "flex",
        alignItems: "center",
        width: {
          xxs: "100%",
          md: "auto",
        },
        paddingInline: 0,
      }}
    >
      <Box
        component={"ul"}
        sx={{
          display: "flex",
          flexDirection: {
            xxs: "column",
            md: "row",
          },
          alignItems: "center",
          height: "100%",
          width: "100%",
          padding: 0,
          gap: {
            xxs: 2,
            md: 0,
          },
        }}
      >
        {navItems?.length > 0 &&
          navItems.map((nav, i) => (
            <Box
              key={i}
              component={"li"}
              sx={{
                display: "flex",
                alignItems: "center",
                width: {
                  xxs: "100%",
                  md: "auto",
                },
                justifyContent: "center",
                height: "100%",
                position: "relative",
                marginBlock: 0,
                ...(pathname === nav.url && {
                  backgroundColor: {
                    xxs: "primary.main",
                    md: "transparent",
                  },
                  borderRadius: {
                    xxs: "6px",
                    md: "0px",
                  },
                  borderBottomWidth: {
                    xxs: 0,
                    md: "2px",
                  },
                  borderBottomStyle: "solid",
                  borderColor: "primary.main",
                  paddingBlock: {
                    xxs: "6px",
                    md: "0px",
                  },
                }),
              }}
              onClick={() => {
                if (!setOpen) return;
                setOpen(false);
              }}
            >
              <Link
                href={nav.url}
                sx={{
                  paddingInline: "24px",
                  display: "block",
                  fontWeight: 500,
                  fontSize: "14px",
                  ...(pathname === nav.url
                    ? {
                        color: {
                          xxs: "white",
                          md: "primary.main",
                        },
                      }
                    : { color: "text.primary" }),
                }}
              >
                {nav.title}
              </Link>
            </Box>
          ))}
      </Box>
    </Box>
  );
};

export default Nav;
