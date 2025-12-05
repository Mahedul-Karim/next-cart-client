import SvgIcon from "@mui/material/SvgIcon";
import Rating from "@mui/material/Rating";
import React from "react";
import { Star } from "lucide-react";

const CustomRatings = ({ ratings }: { ratings: number }) => {
  return (
    <Rating
      readOnly
      value={ratings}
      precision={0.5}
      icon={
        <SvgIcon
          component={Star}
          sx={{
            fill: "#FFB21D",
            stroke: "#FFB21D",
            width: {
              xxs: "12px",
              xs: "14px",
            },
            height: {
              xxs: "12px",
              xs: "14px",
            },
          }}
        />
      }
      emptyIcon={
        <SvgIcon
          component={Star}
          sx={{
            fill: "none",
            stroke: "#FFB21D",
            width: {
              xxs: "12px",
              xs: "14px",
            },
            height: {
              xxs: "12px",
              xs: "14px",
            },
          }}
        />
      }
    />
  );
};

export default CustomRatings;
