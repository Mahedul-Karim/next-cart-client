"use client";

import React from "react";
import { Heart, Leaf, Package, Users, ShoppingBag } from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@mui/material/Button";
import SvgIcon from "@mui/material/SvgIcon";
import Box from "@mui/material/Box";
import Image from "@/components/ui/Image";
import Typography from "@mui/material/Typography";
import { alpha } from "@mui/material";
import Link from "@/components/ui/Link";

const values = [
  {
    icon: Heart,
    title: "Customer First",
    description:
      "Every decision we make starts with our customers. Your satisfaction is our success.",
  },
  {
    icon: Leaf,
    title: "Sustainability",
    description:
      "We're committed to eco-friendly practices, from sourcing to packaging.",
  },
  {
    icon: Package,
    title: "Quality",
    description:
      "We curate only the finest products that meet our rigorous standards.",
  },
  {
    icon: Users,
    title: "Community",
    description:
      "Building meaningful connections with our customers and partners.",
  },
];

const Page = () => {
  return (
    <Container sx={{ paddingBlock: 6 }}>
      <Box
        sx={{ position: "relative", overflow: "hidden", borderRadius: "6px" }}
      >
        <Box sx={{ position: "absolute", inset: 0 }}>
          <Image
            fill
            src={"/assets/about-hero.jpg"}
            alt="NextCart team carefully packaging premium products"
            sx={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
          <Box
            sx={{
              position: "absolute",
              inset: 0,
              backgroundImage: (theme) => `linear-gradient(
              to right,
            ${alpha(theme.palette.background.paper, 0.8)},
            ${alpha(theme.palette.background.paper, 0.6)},
            ${alpha(theme.palette.background.paper, 0.4)}
              )`,
            }}
          />
        </Box>

        <Box
          sx={{
            position: "relative",
            minHeight: "85vh",
            display: "flex",
            alignItems: "center",
            paddingInline: 4,
            paddingBlock: 8,
          }}
        >
          <Box sx={{ maxWidth: 672 }}>
            <Typography
              component="span"
              sx={{
                display: "inline-block",
                color: "primary.main",
                fontWeight: 500,
                fontSize: "14px",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                marginBottom: 1,
              }}
            >
              Our Story
            </Typography>
            <Typography
              component={"h1"}
              sx={{
                fontSize: {
                  xxs: "36px",
                  md: "48px",
                  lg: "60",
                },
                fontWeight: 600,
                color: "text.primary",
                marginBottom: 1,
                lineHeight: 1.25,
                "& > span": {
                  color: "primary.main",
                  fontStyle: "italic",
                },
              }}
            >
              We believe shopping should be <span>effortless</span>
            </Typography>
            <Typography
              component={"p"}
              sx={{ fontSize: "16px", color: "text.secondary", maxWidth: 576 }}
            >
              Founded in 2020, NextCart was born from a simple idea: online
              shopping should feel personal, thoughtful, and sustainable. We
              curate exceptional products and deliver them with care.
            </Typography>
          </Box>
        </Box>
      </Box>

      <Box component={"section"} sx={{ paddingBlock: 8 }}>
        <Box>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xxs: "1fr",
                md: "1fr 1fr",
              },
              gap: 4,
              alignItems: "center",
            }}
          >
            <Box>
              <Typography
                component="span"
                sx={{
                  display: "inline-block",
                  color: "primary.main",
                  fontWeight: 500,
                  fontSize: "14px",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  marginBottom: 1,
                }}
              >
                Our Mission
              </Typography>
              <Typography
                component="h2"
                sx={{
                  fontSize: {
                    xxs: "30px",
                    md: "36px",
                  },
                  fontWeight: 600,
                  color: "text.primary",
                  marginBottom: 1,
                }}
              >
                Redefining the online shopping experience
              </Typography>
              <Typography
                sx={{
                  marginBottom: 1,
                  color: "text.secondary",
                  lineHeight: 1.625,
                }}
              >
                At NextCart, we&apos;re not just selling products we&apos;re
                creating moments of joy. From the first click to the unboxing
                experience, every touchpoint is designed to delight.
              </Typography>
              <Typography sx={{ color: "text.secondary", lineHeight: 1.625 }}>
                We partner with artisans, sustainable brands, and innovative
                creators who share our values. Together, we&apos;re building a
                marketplace that puts people and planet first.
              </Typography>
            </Box>

            <Box
              sx={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 2 }}
            >
              <Box
                sx={{
                  backgroundColor: "background.paper",
                  padding: 4,
                  textAlign: "center",
                  borderRadius: "16px",
                  height: "max-content",
                }}
              >
                <Typography
                  component="h3"
                  sx={{
                    fontSize: "36px",
                    color: "primary.main",
                    fontWeight: 600,
                  }}
                >
                  50K+
                </Typography>
                <Typography
                  component="span"
                  sx={{
                    fontSize: "14px",
                    color: "text.secondary",
                  }}
                >
                  Happy Customers
                </Typography>
              </Box>
              <Box
                sx={{
                  backgroundColor: "background.paper",
                  padding: 4,
                  textAlign: "center",
                  borderRadius: "16px",
                  marginTop: 4,
                  height: "max-content",
                }}
              >
                <Typography
                  component="h3"
                  sx={{
                    fontSize: "36px",
                    color: "primary.main",
                    fontWeight: 600,
                  }}
                >
                  2K+
                </Typography>
                <Typography
                  component="span"
                  sx={{
                    fontSize: "14px",
                    color: "text.secondary",
                  }}
                >
                  Curated Products
                </Typography>
              </Box>
              <Box
                sx={{
                  backgroundColor: "background.paper",
                  padding: 4,
                  textAlign: "center",
                  borderRadius: "16px",
                  height: "max-content",
                }}
              >
                <Typography
                  component="h3"
                  sx={{
                    fontSize: "36px",
                    color: "primary.main",
                    fontWeight: 600,
                  }}
                >
                  98%
                </Typography>
                <Typography
                  component="span"
                  sx={{
                    fontSize: "14px",
                    color: "text.secondary",
                  }}
                >
                  Satisfaction Rate
                </Typography>
              </Box>
              <Box
                sx={{
                  backgroundColor: "background.paper",
                  padding: 4,
                  textAlign: "center",
                  borderRadius: "16px",
                  marginTop: 4,
                  height: "max-content",
                }}
              >
                <Typography
                  component="h3"
                  sx={{
                    fontSize: "36px",
                    color: "primary.main",
                    fontWeight: 600,
                  }}
                >
                  15
                </Typography>
                <Typography
                  component="span"
                  sx={{
                    fontSize: "14px",
                    color: "text.secondary",
                  }}
                >
                  Countries Served
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>

      <Box component="section" sx={{ paddingBlock: 8 }}>
        <Box sx={{ marginBottom: 4 }}>
          <Typography
            component="span"
            sx={{
              display: "inline-block",
              color: "primary.main",
              fontWeight: 500,
              fontSize: "14px",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              marginBottom: 1,
            }}
          >
            What We Stand For
          </Typography>
          <Typography
            component="h2"
            sx={{
              fontSize: {
                xxs: "30px",
                md: "36px",
              },
              fontWeight: 600,
              color: "text.primary",
              marginBottom: 1,
            }}
          >
            Our Core Values
          </Typography>
        </Box>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xxs: "1fr",
              sm: "1fr 1fr",
              lg: "repeat(4,1fr)",
            },
            gap: 4,
          }}
        >
          {values.map((value, index) => (
            <Box
              key={value.title}
              sx={{
                textAlign: "center",
                padding: 3,
                borderRadius: "16px",
                bgcolor: "background.paper",
              }}
              style={{ animationDelay: `${(index + 1) * 100}ms` }}
            >
              <Box
                sx={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: 56,
                  height: 56,
                  borderRadius: "14px",
                  backgroundColor: (theme) =>
                    alpha(theme.palette.primary.main, 0.1),
                  color: "primary.main",
                  marginBottom: 1,
                }}
              >
                <value.icon />
              </Box>
              <Typography
                component="h3"
                sx={{ fontSize: "20px", fontWeight: 600, marginBottom: 1 }}
              >
                {value.title}
              </Typography>
              <Typography sx={{ fontSize: "14px", color: "text.secondary" }}>
                {value.description}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>

      <Box component="section" sx={{ paddingBlock: 8 }}>
        <Typography
          component="h2"
          sx={{
            fontSize: {
              xxs: "30px",
              md: "36px",
            },
            fontWeight: 600,
            color: "text.primary",
            marginBottom: 1,
          }}
        >
          Ready to experience NextCart?
        </Typography>

        <Typography
          sx={{ fontSize: "18px", color: "text.secondary", marginBottom: 2 }}
        >
          Join thousands of happy customers who&apos;ve discovered their new
          favorite way to shop.
        </Typography>
        <Button
          component={Link}
          href="/"
          variant="outlined"
          sx={{ gap: 1, borderRadius: "9999px" }}
        >
          Start Shopping{" "}
          <SvgIcon
            component={ShoppingBag}
            sx={{ fill: "none", width: 18, height: 18 }}
          />
        </Button>
      </Box>
    </Container>
  );
};

export default Page;
