import React, { Suspense } from "react";
import Container from "../ui/Container";
import Featured from "../products/Featured";
import HomeProductTitle from "../products/HomeProductTitle";

const HomeProducts = () => {
  return (
    <Container
      sx={{
        paddingBlock: 4,
      }}
    >
      <HomeProductTitle />
      <Suspense fallback={"Loading..."}>
        <Featured />
      </Suspense>
    </Container>
  );
};

export default HomeProducts;
