import Box from "@mui/material/Box";
import CardSkeleton from "../ui/loader/CardSkeleton";
import { BASE_URL } from "@/utils/constants";
import Image from "../ui/Image";
import ProductCard from "./ProductCard";

const Featured = async () => {
  //   await new Promise((resolve) => setTimeout(resolve, 5000));
  const res = await fetch(`${BASE_URL}/product`, {
    // cache: "force-cache",
    // next: {
    //   tags: ["featuredProducts"],
    // },
  });
  const data = await res.json();

  const products: Product[] = data?.products ? data?.products?.slice(0, 8) : [];

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
      <CardSkeleton />
    </Box>
  );

  return (
    <>
      {products.length === 0 ? (
        <Box sx={{ marginBlock: 3 }}>
          <Box sx={{ position: "relative" }}>
            <Image fill src={"/assets/images.png"} alt="No Products" />
          </Box>
        </Box>
      ) : (
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
              xxs: 1,
              md: 2,
            },
          }}
        >
          {products?.map((prod) => (
            <ProductCard key={prod._id} data={prod} />
          ))}
        </Box>
      )}
    </>
  );
};

export default Featured;
