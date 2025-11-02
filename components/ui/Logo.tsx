import Typography from "@mui/material/Typography";
import Link from "./Link";
import Image from "./Image";

const Logo = () => {
  return (
    <Link href={"/"} sx={{ display: "flex", alignItems: "center", gap: "4px" }}>
      <Image src={"/logo.png"} width={36} height={36} alt="Site logo" />
      <Typography
        component="p"
        sx={{
          fontSize: "18px",
          color: "primary.main",
          fontFamily: "var(--font-montserat)",
          letterSpacing: "-0.2px",
          fontWeight: 600,
        }}
      >
        Next
        <Typography
          component="span"
          sx={{
            color: "text.secondary",
            fontSize: "18px",
            fontWeight: 600,
            fontFamily: "var(--font-montserat)",
            letterSpacing: "-0.2px",
          }}
        >
          Cart
        </Typography>
      </Typography>
    </Link>
  );
};

export default Logo;
