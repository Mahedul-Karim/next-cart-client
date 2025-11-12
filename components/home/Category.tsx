"use client";

import Box from "@mui/material/Box";
import React from "react";
import SectionHeading from "../ui/SectionHeading";
import { Blocks } from "lucide-react";
import Divider from "@mui/material/Divider";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { categoriesData } from "@/utils/data";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Container from "../ui/Container";

/**
 *
 * Package - for products
 * Gift - Deals
 * PackagePlus - New Arriavals
 */

const Category = () => {
  return (
    <Container sx={{ paddingBlock: 8 }}>
      <Box
        component={"section"}
        sx={{ display: "flex", alignItems: "center", gap: 2 }}
      >
        <SectionHeading Icon={Blocks} text="Categories" />
        <Divider sx={{ flexGrow: 1 }} />
      </Box>
      <Box
        sx={{
          marginTop: "20px",
          display: "grid",
          gridTemplateColumns: {
            xxs: "1fr 1fr",
            xs: "repeat(3,1fr)",
            sm: "repeat(4,1fr)",
            md: "repeat(5,1fr)",
            lg: "repeat(6,1fr)",
          },
          gap: {
            xxs: 0.5,
            sm: 1.5,
          },
        }}
      >
        {categoriesData.slice(1, 7).map((cat) => (
          <Card
            sx={{ boxShadow: "none", backgroundColor: "transparent" }}
            key={cat.id}
          >
            <CardContent
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                padding: 0,
                gap: 2,
              }}
            >
              <Box
                sx={{
                  backgroundColor: "background.paper",
                  backdropFilter: "opacity(50%)",
                  padding: 2,
                  borderRadius: "100%",
                  aspectRatio: "1/1",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "80%",
                }}
              >
                <CardMedia
                  component={"img"}
                  image={cat.image_Url}
                  sx={{
                    maxWidth: "80px",
                    width: "100%",
                    aspectRatio: "1/1",
                    objectFit: "contain",
                  }}
                />
              </Box>
              <Typography
                component="p"
                sx={{
                  textAlign: "center",
                  fontWeight: 600,
                  color: "text.primary",
                  fontSize: {
                    xxs: "14px",
                    lg: "16px",
                  },
                }}
              >
                {cat.title}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Container>
  );
};

export default Category;
