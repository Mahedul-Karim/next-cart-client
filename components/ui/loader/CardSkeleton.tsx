import React from "react";
import Skeleton from "@mui/material/Skeleton";
import Box from "@mui/material/Box";

const CardSkeleton = () => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
      <Skeleton
        variant="rectangular"
        component={"div"}
        sx={{
          borderRadius: "8px",
          width: "100%",
          aspectRatio: "16/12",
          height: "auto",
        }}
      />
      <Skeleton
        variant="rectangular"
        component={"div"}
        sx={{
          borderRadius: "8px",
          width: "100%",
          aspectRatio: "16/3",
          height: "auto",
        }}
      />
    </Box>
  );
};

export default CardSkeleton;
