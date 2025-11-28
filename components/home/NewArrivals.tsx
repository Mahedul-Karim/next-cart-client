import React from "react";
import Container from "../ui/Container";
import ArrivalsTitle from "./ArrivalsTitle";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const FeaturedDetails = ({
  title,
  paragraph,
}: {
  title: string;
  paragraph: string;
}) => {
  return (
    <Box
      sx={{
        backgroundImage: "linear-gradient(to top, black 25%, transparent)",
        position: "absolute",
        height: 120,
        bottom: 0,
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        paddingLeft: "20px",
        transition: "transform 0.3s",
        transform: "translateY(100%)",
      }}
    >
      <Typography
        component="h4"
        sx={{ color: "white", fontWeight: 600, fontSize: "18px" }}
      >
        {title}
      </Typography>
      <Typography
        sx={{ color: "#FAFAFA", fontSize: "12px", maxWidth: "250px" }}
      >
        {paragraph}
      </Typography>
    </Box>
  );
};

const NewArrivals = () => {
  return (
    <Container sx={{ paddingBlock: 4 }}>
      <ArrivalsTitle />
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xxs: "1fr",
            sm: "1fr 0.8fr",
          },
          gap: "20px",
          marginTop: "16px",
        }}
      >
        <Box
          sx={{
            height: {
              xxs: 250,
              sm: 450,
            },
            borderRadius: "6px",
            overflow: "hidden",
            backgroundImage: "url('/assets/frame705.png')",
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "right",
            position: "relative",
            backgroundColor: "#f1f5f9",
            "&:hover > div": {
              transform: "translateY(0)",
            },
          }}
        >
          <FeaturedDetails
            title={"Playstation 5"}
            paragraph={"Black and White version of the PS5 coming out on sale."}
          />
        </Box>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xxs: "1fr 1fr",
              sm: "1fr",
            },
            height: {
              xxs: "200px",
              sm: "auto",
            },
            gap: "20px",
          }}
        >
          <Box
            sx={{
              position: "relative",
              "&:hover > div": {
                transform: "translateY(0)",
              },
              bgcolor: "#f1f5f9",
              backgroundImage: "url('/assets/frame707.png')",
              backgroundRepeat: "no-repeat",
              backgroundPosition: {
                xxs: "right",
                lg: "250px",
              },
              backgroundSize: {
                xxs: "100px auto",
                sm: "160px auto",
              },
              height: "100%",
              overflow: "hidden",
            }}
          >
            <FeaturedDetails
              title={"Speakers"}
              paragraph={"Amazon wireless speaker"}
            />
          </Box>
          <Box
            sx={{
              position: "relative",
              "&:hover > div": {
                transform: "translateY(0)",
              },
              bgcolor: "#f1f5f9",
              backgroundImage: "url('/assets/frame706.png')",
              backgroundRepeat: "no-repeat",
              backgroundPosition: {
                xxs: "right",
                lg: "250px",
              },
              backgroundSize: {
                xxs: "100px auto",
                sm: "160px auto",
              },
              height: "100%",
              overflow: "hidden",
            }}
          >
            <FeaturedDetails
              title={"Perfume"}
              paragraph={"Gucci intense oud edp"}
            />
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default NewArrivals;
