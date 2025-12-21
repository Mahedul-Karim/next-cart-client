import Container from "@/components/ui/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import React from "react";
import SignupForm from "@/components/auth/SignupForm";

const Page = () => {
  return (
    <Container sx={{ paddingBlock: 6 }}>
      <Typography
        component="h2"
        sx={{
          fontSize: "26px",
          textAlign: "center",
          fontWeight: 600,
          color: "text.primary",
        }}
      >
        Register as a new user
      </Typography>
      <Box
        sx={{
          marginTop: 4,
          backgroundColor: "background.paper",
          paddingBlock: 4,
          paddingInline: 2,
          borderRadius: "16px",
          maxWidth: 450,
          width: "100%",
          marginInline: "auto",
          boxShadow:
            "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)",
        }}
      >
        <SignupForm />
      </Box>
    </Container>
  );
};

export default Page;
