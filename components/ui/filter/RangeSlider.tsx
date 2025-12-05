"use client";

import React, { useEffect, useRef } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { alpha } from "@mui/material";

const RangeSlider = ({
  maxValue,
  minValue,
  setMaxValue,
  setMinValue,
}: {
  maxValue: number;
  minValue: number;
  setMaxValue: (val: number) => void;
  setMinValue: (val: number) => void;
}) => {
  const trackRef = useRef<HTMLDivElement | null>(null);

  const setTrackStyle = (
    track: HTMLDivElement,
    value: number,
    direction: string
  ) => {
    if (direction === "right") {
      track.style.right = `${100 - (value / 2000) * 100}%`;
    }
    if (direction === "left") {
      track.style.left = `${(value / 2000) * 100 + 1}%`;
    }
  };

  useEffect(() => {
    const track = trackRef.current;

    if (!track) return;

    if (minValue > maxValue) {
      setTrackStyle(track, minValue, "right");
    } else {
      setTrackStyle(track, maxValue, "right");
    }

    if (maxValue > minValue) {
      setTrackStyle(track, minValue, "left");
    } else {
      setTrackStyle(track, maxValue, "left");
    }
  }, [minValue, maxValue]);

  const containerClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (e.currentTarget.classList.contains("slider__track")) {
      return;
    }
    const clickedPoint = e.nativeEvent.offsetX;

    const clickedPointValue = Math.round(
      (clickedPoint / e.currentTarget.clientWidth) * 2000
    );

    const decimalNumber = Math.floor(clickedPointValue / 10) * 10;

    if (decimalNumber < minValue) {
      setMinValue(decimalNumber);
    }

    if (decimalNumber > maxValue) {
      setMaxValue(decimalNumber);
    }
  };

  return (
    <Box
      sx={{
        marginBlock: 2,
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: 2,
      }}
    >
      <Box
        sx={(theme) => ({
          position: "absolute",
          width: "100%",
          bgcolor: alpha(theme.palette.primary.main, 0.4),
          borderRadius: "6px",
          height: 5,
          overflow: "hidden",
          cursor: "pointer",
          marginLeft: "2px",
        })}
        onClick={containerClick}
      >
        <Box
          sx={{
            position: "absolute",
            left: "20%",
            backgroundColor: "primary.main",
            right: "20%",
            height: 5,
            borderRadius: "6px",
            cursor: "default",
          }}
          className="slider__track"
          ref={trackRef}
        />
      </Box>
      <div>
        <input
          type="range"
          min="0"
          max="2000"
          value={minValue}
          onChange={(e) => setMinValue(+e.target.value)}
          step={10}
        />
        <input
          type="range"
          min="0"
          max="2000"
          value={maxValue}
          onChange={(e) => setMaxValue(+e.target.value)}
          step={10}
        />
      </div>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 1,
          placeItems: "center",
          marginTop: "12px",
        }}
      >
        <Typography
          sx={{
            border: "1px solid",
            borderColor: "divider",
            padding: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "6px",
            width: "100%",
            maxWidth: "80%",
            fontSize: "14px",
            color: "text.primary",
          }}
        >
          {minValue < maxValue ? minValue : maxValue}$
        </Typography>
        <Typography
          sx={{
            border: "1px solid",
            borderColor: "divider",
            padding: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "6px",
            width: "100%",
            maxWidth: "80%",
            fontSize: "14px",
            color: "text.primary",
          }}
        >
          {minValue > maxValue ? minValue : maxValue}$
        </Typography>
      </Box>
    </Box>
  );
};

export default RangeSlider;
