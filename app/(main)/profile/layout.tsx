import Container from "@/components/ui/Container";
import ProfileSidebar from "@/components/user/ProfileSidebar";
import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Container
      sx={{
        paddingBlock: 6,
        display: "grid",
        gridTemplateColumns: {
          xxs: "50px 1fr",
          sm: "280px 1fr",
        },
        gap:4
      }}
    >
      <ProfileSidebar />
      <div>{children}</div>
    </Container>
  );
};

export default Layout;
