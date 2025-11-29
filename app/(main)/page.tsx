import Branding from "@/components/home/Branding";
import Category from "@/components/home/Category";
import Deals from "@/components/home/Deals";
import Hero from "@/components/home/Hero";
import HomeProducts from "@/components/home/HomeProducts";
import NewArrivals from "@/components/home/NewArrivals";
import Newsletter from "@/components/home/Newsletter";

export default function Home() {
  return (
    <>
      <Hero />
      <Category />
      <HomeProducts />
      <Deals />
      <NewArrivals />
      <Newsletter />
      <Branding />
    </>
  );
}
