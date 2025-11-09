import React from "react";
import Menu, { MenuProps } from "@mui/material/Menu";
import Box from "@mui/material/Box";

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
            maxHeight: "100%",
            zIndex: 1,
            mt: 1.5,
            border: "1px solid",
            borderColor: "divider",
          },
        },
      }}
      transformOrigin={{ horizontal: "right", vertical: "top" }}
      anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
    >
      <Box
        sx={{
          position: "absolute",
          width: 16,
          height: 16,
          top: -9,
          right: 15,
          backgroundColor: "background.paper",
          border: "1px solid",
          borderColor: "divider",
          borderRightColor: "transparent",
          borderBottomColor: "transparent",
          transform: "rotate(45deg)",
        }}
      />
      {children}
    </Menu>
  );
};

export default DotMenu;
