import Box from "@mui/material/Box";
import CustomTextfield from "../ui/form/CustomTextfield";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Link from "../ui/Link";

const LoginForm = () => {
  return (
    <>
      <Box component={"form"}>
        <CustomTextfield
          label="Email"
          type="email"
          fullWidth
          helperText="johndoe@gmail.com/test@gmail.com"
        />
        <Box sx={{ marginBlock: 1.5 }}>
          <CustomTextfield
            type="password"
            label="Password"
            fullWidth
            helperText="test1234"
          />
        </Box>
        <Button fullWidth variant="contained">
          Submit
        </Button>
      </Box>
      <Box sx={{ marginTop: 1.5 }}>
        <Typography sx={{ fontSize: "14px", color: "text.secondary" }}>
          Don&apos;t have any account?{" "}
          <Link href={"/signup"} sx={{ color: "primary.main" }}>
            Sign Up
          </Link>
        </Typography>
      </Box>
    </>
  );
};

export default LoginForm;
