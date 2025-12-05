import Main from "@/components/products/all-products/Main";
import Sidebar from "@/components/products/all-products/Sidebar";
import Container from "@/components/ui/Container";
import React from "react";

interface Params {
  searchParams: Promise<{
    search: string;
    category: string;
    rating: string;
    page: string;
    price: string;
  }>;
}

const Page: React.FC<Params> = async ({ searchParams }) => {
  const { search, category="All", rating, page, price } = await searchParams;

  console.log(rating)

  return (
    <Container
      sx={{
        paddingBlock: "48px",
        display: "grid",
        gridTemplateColumns: {
          xxs: "1fr",
          md: "0.3fr 1fr",
        },
        gap: 3,
      }}
    >
      <Sidebar />
      <Main />
    </Container>
  );
};

export default Page;
