import React from "react";
import Container from "../ui/Container";
import DealsTitle from "./DealsTitle";
import Events from "./Events";

const Deals = () => {
  return (
    <Container sx={{ paddingBlock: 4 }}>
      <DealsTitle />
      <Events />
    </Container>
  );
};

export default Deals;
