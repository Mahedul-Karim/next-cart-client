import Main from "@/components/products/all-products/Main";
import Sidebar from "@/components/products/all-products/Sidebar";
import Container from "@/components/ui/Container";
import CardSkeleton from "@/components/ui/loader/CardSkeleton";
import Box from "@mui/material/Box";
import React, { Suspense } from "react";

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
  const { search, category, rating, page, price } = await searchParams;

  const loader = (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: {
          xxs: "1fr 1fr",
          lg: "repeat(3,1fr)",
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
      <Suspense fallback={loader}>
        <Main
          search={search}
          category={category}
          rating={rating ? rating.split("-").map((num) => num) : []}
          page={+page || 1}
          price={price ? price.split("-").map((num) => num) : []}
        />
      </Suspense>
    </Container>
  );
};

export default Page;
