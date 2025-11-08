import React from "react";
import Menu, { MenuProps } from "@mui/material/Menu";

interface Props {
  menu: MenuProps;
  children: React.ReactNode;
}

const DotMenu: React.FC<Props> = ({ menu, children }) => {
  return (
    <Menu
      {...menu}
      slotProps={{
        list: {
          sx: {
            paddingBlock: 0,
            "& > li": {
              borderBottom: "1px solid",
              borderColor: "divider",
              paddingBlock: "10px",
            },
          },
        },
        paper: {
          elevation: 0,
          sx: {
            overflow: "visible",
            zIndex: 1,
            mt: 1.5,
            "&::before": {
              content: '""',
              position: "absolute",
              top: "-8px",
              right: "12px",
              width: 0,
              height: 0,
              borderLeft: "8px solid transparent",
              borderRight: "8px solid transparent",
              borderBottom: "8px solid",
              borderBottomColor: "background.paper",
              zIndex: 1,
            },
            "&::after": {
              content: '""',
              position: "absolute",
              top: "-9px",
              right: "10px",
              width: 0,
              height: 0,
              borderLeft: "10px solid transparent",
              borderRight: "10px solid transparent",
              borderBottom: "9px solid",
              borderBottomColor: "divider",
            },
            border: "1px solid",
            borderColor: "divider",
          },
        },
      }}
      transformOrigin={{ horizontal: "right", vertical: "top" }}
      anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
    >
      {children}
    </Menu>
  );
};

export default DotMenu;
