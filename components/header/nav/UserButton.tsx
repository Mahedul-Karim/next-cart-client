import React from "react";

import IconButton from "@mui/material/IconButton";
import SvgIcon from "@mui/material/SvgIcon";
import { CircleUser } from "lucide-react";
import { SxProps, Theme } from "@mui/material";

type Props = {
  sx?: SxProps<Theme>;
};

const UserButton: React.FC<Props> = ({ sx }) => {
  return (
    <IconButton
      sx={{ "&:hover": { backgroundColor: "transparent" }, padding: 0, ...sx }}
      disableRipple
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
  );
};

export default UserButton;
