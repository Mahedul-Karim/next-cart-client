import React from "react";
import Box from "@mui/material/Box";
import Container from "../ui/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

const Newsletter = () => {
  return (
    <Container sx={{ paddingBlock: 4 }}>
      <Box
        sx={{
          backgroundImage: "url('/assets/bg.jpg')",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          paddingBlock: {
            xxs: "48px",
            sm: "64px",
          },
          borderRadius: "6px",
          paddingInline: {
            xxs: "32px",
            sm: "80px",
          },
        }}
      >
        <Typography
          component="h2"
          sx={{
            fontSize: {
              xxs: "20px",
              xs: "24px",
              sm: "36px",
            },
            color: "text.primary",
            fontWeight: 600,
            marginBottom: {
              xxs: 3,
              sm: 5,
            },
          }}
        >
          Get weekly update
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: {
              xxs: "column",
              sm: "row",
            },
            alignItems: "center",
            gap: "20px",
          }}
        >
          <Box
            sx={{
              backgroundColor: "white",
              display: "flex",
              alignItems: "center",
              height:50,
              maxWidth: 360,
              width: "100%",
              borderRadius: "8px",
              "& > input": {
                backgroundColor: "transparent",
                paddingInline: 2,
                fontSize: "14px",
                height: "100%",
                width: "100%",
                border: "none",
                "&:focus": {
                  outline: "none",
                },
              },
            }}
          >
            <input type="text" placeholder="Enter your email" />
          </Box>
          <Button
            variant="contained"
            sx={{
              height:50,
              width:{
                xxs:"100%",
                sm:"auto"
              },
              borderRadius:"8px"
            }}
          >
            Subscribe
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default Newsletter;
