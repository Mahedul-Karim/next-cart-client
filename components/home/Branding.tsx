import React from "react";
import Container from "../ui/Container";
import Box from "@mui/material/Box";
import { brandingData } from "@/utils/data";
import Image from "../ui/Image";
import Typography from "@mui/material/Typography";

const Branding = () => {
  return (
    <Box sx={{ marginBlock: 4, backgroundColor: "background.paper" }}>
      <Container
        sx={{
          paddingBlock: 4,
          display: "grid",
          gridTemplateColumns: {
            xxs: "1fr",
            md: "1fr 1fr 1fr 1fr",
          },
          columnGap: "24px",
          rowGap: {
            xxs: "24px",
            md: "0px",
          },
          justifyItems: {
            xxs: "center",
            md: "start",
          },
        }}
      >
        {brandingData &&
          brandingData.map((i, index) => (
            <Box sx={{ display: "flex", alignItems: "center" }} key={index}>
              <Box>
                <Image
                  src={i.icon}
                  loading="lazy"
                  alt=""
                  width={40}
                  height={40}
                />
              </Box>
              <Box sx={{ paddingInline: "12px" }}>
                <Typography
                  component={"h3"}
                  sx={{ fontWeight: 600, color: "text.primary" }}
                >
                  {i.title}
                </Typography>
                <Typography
                  sx={{
                    fontSize: {
                      xxs: "12px",
                      lg: "14",
                    },
                    color: "text.secondary",
                  }}
                >
                  {i.Description}
                </Typography>
              </Box>
            </Box>
          ))}
      </Container>
    </Box>
  );
};

export default Branding;
