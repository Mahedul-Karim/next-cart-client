"use client";

import Box from "@mui/material/Box";
import SvgIcon from "@mui/material/SvgIcon";
import CustomTextfield from "../ui/form/CustomTextfield";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Link from "../ui/Link";
import Avatar from "@mui/material/Avatar";

import React, { useState } from "react";
import { CircleUser } from "lucide-react";
import { styled } from "@mui/material/styles";

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

const SignupForm = () => {
  const [avatar, setAvatar] = useState<string | null>(null);

  return (
    <>
      <Box component="form">
        <Box>
          <CustomTextfield label="Full Name" type="text" fullWidth />
        </Box>
        <Box sx={{ marginTop: 2 }}>
          <CustomTextfield label="Email Address" type="email" fullWidth />
        </Box>
        <Box sx={{ marginTop: 2 }}>
          <CustomTextfield label="Password" type="password" fullWidth />
        </Box>
        <Box
          sx={{ display: "flex", alignItems: "center", gap: 2, marginBlock: 2 }}
        >
          {avatar ? (
            <Avatar
              src={avatar}
              sx={{
                width: 40,
                height: 40,
                borderRadius: "100%",
                objectFit: "cover",
              }}
            />
          ) : (
            <SvgIcon
              component={CircleUser}
              sx={{
                fill: "none",
                width: 36,
                height: 36,
                color: "text.primary",
                strokeWidth: 1.2,
              }}
            />
          )}
          <Button
            component="label"
            role={undefined}
            variant="outlined"
            tabIndex={-1}
            sx={{fontSize:"12px"}}
            size="small"
          >
            Upload files
            <VisuallyHiddenInput
              type="file"
              onChange={(e) => {
                if (!e.target.files) return;

                const file = e.target.files[0];

                const fileReader = new FileReader();

                fileReader.onload = () => {
                  setAvatar(fileReader.result as string);
                };

                fileReader.readAsDataURL(file);
              }}
              multiple
            />
          </Button>
        </Box>
        <Button fullWidth variant="contained">
          Submit
        </Button>
      </Box>
      <Box sx={{ marginTop: 1.5 }}>
        <Typography sx={{ fontSize: "14px", color: "text.secondary" }}>
          Already have an account?{" "}
          <Link href={"/login"} sx={{ color: "primary.main" }}>
            Sign In
          </Link>
        </Typography>
      </Box>
    </>
  );
};

export default SignupForm;
