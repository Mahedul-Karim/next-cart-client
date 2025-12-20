import TextField, { TextFieldProps } from "@mui/material/TextField";
import { forwardRef } from "react";

const CustomTextfield: React.FC<TextFieldProps> = (props) => {
  return (
    <TextField
      size="small"
      slotProps={{
        inputLabel: {
          sx: {
            fontSize: "14px",
            color: "text.secondary",
          },
        },
        htmlInput: {
          sx: {
            fontSize: "14px",
            color: "text.primary",
          },
        },
        root: {
          sx: {
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: "divider",
            },
          },
        },
      }}
      {...props}
    />
  );
};

export default CustomTextfield;
