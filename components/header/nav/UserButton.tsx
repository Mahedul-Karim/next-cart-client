import React from "react";

import IconButton from "@mui/material/IconButton";
import SvgIcon from "@mui/material/SvgIcon";
import { CircleUser } from "lucide-react";

const UserButton = () => {
  return (
    <IconButton
      sx={{ "&:hover": { backgroundColor: "transparent" }, padding: 0 }}
      disableRipple
    >
      <SvgIcon
        component={CircleUser}
        sx={{ fill: "none", color: "text.primary", strokeWidth: 2 }}
      />
    </IconButton>
  );
};

export default UserButton;
