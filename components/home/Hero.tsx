import React from "react";
import Container from "../ui/Container";
import HeroCarousel from "./HeroCarousel";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Link from "../ui/Link";

const HERO_BANNER = [
  {
    src: "/assets/banner-1.png",
    subtitle: "Smart offer",
    title: `Samsung galaxy Note9`,
    to: `/product/${"Samsung Galaxy Note9(128gb)".replace(/\s+/, "-")}`,
  },
  {
    src: "/assets/banner-3.jpg",
    subtitle: "Time deals",
    title: "Bose SoundSport",
    to: `/product/${"Bose SoundSport Wireless Headphones".replace(/\s+/, "-")}`,
  },
  {
    src: "/assets/banner-2.jpg",
    subtitle: "Featured",
    title: "GoPro - Fusion 360",
    to: `/product/${"GoPro Max 360".replace(/\s+/, "-")}`,
  },
];

const Hero = () => {
  return (
    <Container
      sx={{
        paddingBlock: 3,
        display: "grid",
        gridTemplateColumns: {
          xxs: "1fr",
          md: "1fr 0.4fr",
        },
        gap:2
      }}
    >
      <HeroCarousel />
      <Box component={"section"} sx={{ display: "grid", gap: 1 }}>
        {HERO_BANNER?.map((item, i) => (
          <Box
            key={i}
            sx={{
              backgroundImage: `url(${item.src})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
              paddingInline: 2,
              paddingBlock: 4,
            }}
          >
            <Box>
              <Typography
                component={"h3"}
                sx={{
                  color: "text.secondary",
                  fontSize: {
                    xxs: "12px",
                    xs: "14px",
                  },
                }}
              >
                {item.subtitle}
              </Typography>
              <Typography
                component={"h1"}
                sx={{
                  whiteSpace: "pre-wrap",
                  color: "text.primary",
                  fontSize: {
                    xxs: "16px",
                    xs: "18px",
                  },
                  fontWeight: 600,
                }}
              >
                {item.title}
              </Typography>

              <Link
                href={item.to}
                sx={{
                  display: "flex",
                  fontSize: 14,
                  alignItems: "center",
                  gap: 1,
                  color: "secondary.main",
                }}
              >
                <span>Shop now</span>
                <span>&rarr;</span>
              </Link>
            </Box>
          </Box>
        ))}
      </Box>
    </Container>
  );
};

export default Hero;
