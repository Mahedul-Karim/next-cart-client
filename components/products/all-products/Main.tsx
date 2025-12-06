import React from "react";
import Box from "@mui/material/Box";
import { BASE_URL } from "@/utils/constants";
import ProductCard from "../ProductCard";
import Image from "@/components/ui/Image";

interface Props {
  search: string;
  category: string;
  rating: Array<number | string>;
  page: number;
  price: Array<number | string>;
}

const Main: React.FC<Props> = async ({
  search,
  category,
  rating,
  page,
  price,
}) => {
  const res = await fetch(`${BASE_URL}/product/search`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      search,
      category,
      rating,
      page,
      minValue: price[0],
      maxValue: price[1],
    }),
  });

  const data = await res.json();

  const totalPage = data?.total;
  const products: Product[] = data?.products || [];

  return (
    <Box component={"main"}>
      {products.length > 0 ? (
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
          {products.map((prod) => (
            <ProductCard key={prod._id} data={prod} />
          ))}
        </Box>
      ) : (
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            height: "100vh",
          }}
        >
          <Image
            width={195}
            height={258}
            src={"/assets/images.png"}
            alt=""
            sx={{ mixBlendMode: "multiply" }}
          />
        </Box>
      )}
    </Box>
  );
};

export default Main;
