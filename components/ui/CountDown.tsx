"use client";

import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { alpha } from "@mui/material/styles";

type Timer = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

function CountDown({
  eventFinishDate,
}: {
  eventFinishDate: { endDate: string };
}) {
  function calculateTimeLeft() {
    const difference = +new Date(eventFinishDate?.endDate) - +new Date();
    const timeLeft = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };

    if (difference > 0) {
      timeLeft.days = Math.floor(difference / (1000 * 60 * 60 * 24));
      timeLeft.hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      timeLeft.minutes = Math.floor((difference / 1000 / 60) % 60);
      timeLeft.seconds = Math.floor((difference / 1000) % 60);
    }

    return timeLeft;
  }

  const [timeLeft, setTimeLeft] = useState<Timer>(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <Box
      component={"section"}
      sx={{
        display: {
          xxs: "grid",
          xs: "flex",
        },
        alignItems: {
          xs: "center",
        },
        gridTemplateColumns: "1fr 1fr",
        gap: "16px",
      }}
    >
      {[
        { label: "Days", value: timeLeft.days },
        { label: "Hours", value: timeLeft.hours },
        { label: "Minutes", value: timeLeft.minutes },
        { label: "Seconds", value: timeLeft.seconds },
      ].map((item) => (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "center",
            gap: 1,
          }}
          key={item.label}
        >
          <Typography
            component={"span"}
            sx={{
              width: 55,
              padding: "12px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              bgcolor: "secondary.main",
              color: "white",
              fontSize: "20px",
              borderRadius: "4px",
            }}
          >
            {item.value}
          </Typography>
          <Typography
            component={"span"}
            sx={{
              fontSize: "10px",
              color: "text.secondary",
            }}
          >
            {item.label}
          </Typography>
        </Box>
      ))}
    </Box>
  );
}
export default CountDown;
