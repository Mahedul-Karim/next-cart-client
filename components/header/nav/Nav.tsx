"use client";

import Link from "@/components/ui/Link";
import { navItems } from "@/utils/data";
import Box from "@mui/material/Box";
import { usePathname } from "next/navigation";
import React from "react";

const Nav = () => {
  const pathname = usePathname();

  return (
    <Box
      component={"nav"}
      sx={{
        height: "100%",
        display: "flex",
        alignItems: "center",
        width: {
          xxs: "100%",
          md: "auto",
        },
        paddingInline: {
          xxs: "16px",
          md: "0px",
        },
      }}
    >
      <Box
        component={"ul"}
        sx={{
          display: {
            xxs: "block",
            md: "flex",
          },
          alignItems: "center",
          height: "100%",
          width: "100%",
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
                justifyContent: "center",
                height: "100%",
                position: "relative",
                marginBlock: {
                  xxs: "16px",
                  md: "0px",
                },
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
                    xxs: "2px",
                    md: "0px",
                  },
                }),
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
