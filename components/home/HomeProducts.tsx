import React, { Suspense } from "react";
import Container from "../ui/Container";
import Featured from "../products/Featured";
import HomeProductTitle from "../products/HomeProductTitle";
import Box from "@mui/material/Box";
import CardSkeleton from "../ui/loader/CardSkeleton";

const HomeProducts = () => {
  const loader = (
    <Box
      sx={{
        display: "grid",
        marginBlock: 3,
        gridTemplateColumns: {
          xxs: "1fr 1fr",
          md: "repeat(3,1fr)",
          lg: "repeat(4,1fr)",
        },
        gap: {
          xxs: 2,
          md: 3,
        },
      }}
    >
      {Array.from({ length: 8 }).map((_, i) => (
        <CardSkeleton key={i} />
      ))}
    </Box>
  );
  return (
    <Container
      sx={{
        paddingBlock: 4,
      }}
    >
      <HomeProductTitle />
      <Suspense fallback={loader}>
        <Featured />
      </Suspense>
    </Container>
  );
};

export default HomeProducts;
