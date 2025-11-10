"use client";

import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import Box from "@mui/material/Box";
import Link from "../ui/Link";
import Typography from "@mui/material/Typography";

const SLIDES = [
  {
    id: 0,
    src: "/assets/slide-1.jpg",
    alt: "slide img 1",
    subtitle: "Daily deals",
    title: "Airpods Earphones",
    price: 1499,
    link: `/product/${"Apple AirPods 3rd generation with Charging Case".replace(
      /\s+/,
      "-"
    )}`,
  },
  {
    id: 1,
    src: "/assets/slide-2.jpg",
    alt: "slide img 2",
    subtitle: "Deals and promotions",
    title: "Echo dot 3rd gen",
    price: 29,
    link: `/product/${"Amazon Echo Dot 3rd Gen Smart Voice Assistant Speaker".replace(
      /\s+/,
      "-"
    )}`,
  },
];

const HeroCarousel = () => {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <Box
      sx={{
        position: "relative",
        minWidth: 0,
        minHeight: {
          xxs: "180px",
          xs: "250px",
          sm: "350px",
        },
      }}
    >
      <Swiper
        loop
        pagination={{
          clickable: true,
        }}
        // autoplay={{
        //   delay: 2000,
        //   disableOnInteraction: true,
        // }}
        modules={[Autoplay, Pagination]}
        style={{ height: "100%" }}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
      >
        {SLIDES.map((slide) => (
          <SwiperSlide key={slide.id}>
            <Box
              sx={{
                backgroundImage: `url(${slide.src})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                height: "100%",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  height: "100%",
                  paddingLeft: {
                    xxs: 4,
                    sm: 8,
                  },
                  gap: {
                    xxs:"4px",
                    xs:"10px"
                  },
                }}
              >
                <Typography
                  component={"h3"}
                  sx={{
                    color: "secondary.main",
                    fontSize: {
                      xxs: "14px",
                      xs: "16px",
                    },
                    fontWeight: 300,
                    lineHeight: "5px",
                  }}
                >
                  {slide.subtitle}
                </Typography>
                <Typography
                  component={"h1"}
                  sx={{
                    fontSize: {
                      xxs: "25px",
                      xs: "30px",
                      sm: "50px",
                    },
                    fontWeight: 700,
                    color: "text.primary",
                    whiteSpace: "pre-line",
                    maxWidth: "315px",
                    lineHeight: {
                      xs: "45px",
                      sm: "60px",
                    },
                  }}
                >
                  <Link href={slide.link}>{slide.title}</Link>
                </Typography>

                <Box sx={{ display: "flex", gap: 0.5 }}>
                  <Typography
                    component={"p"}
                    sx={{
                      fontSize: {
                        xxs: "14px",
                        xs: "18px",
                      },
                      fontWeight: 400,
                      marginTop: {
                        sm: "10px",
                      },
                    }}
                  >
                    Today:
                  </Typography>
                  <Typography
                    component={"h2"}
                    sx={{
                      color: "secondary.main",
                      fontSize: {
                        xxs: "18px",
                        xs: "25px",
                        sm: "40px",
                      },
                      fontWeight: 700,
                    }}
                  >
                    {slide.price}$
                  </Typography>
                </Box>
              </Box>
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default HeroCarousel;
