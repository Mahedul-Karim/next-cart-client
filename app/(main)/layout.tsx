import Header from "@/components/header/Header";
import Footer from "@/components/ui/Footer";
import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header /> {children} <Footer />
    </>
  );
};

export default Layout;
