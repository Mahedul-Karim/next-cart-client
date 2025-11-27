"use client";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { alpha } from "@mui/material/styles";
import CountDown from "../ui/CountDown";

const EventCard = () => {
  return (
    <Box
      component={"section"}
      sx={{
        backgroundImage: "url('/assets/bg-1.jpg')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        paddingBlock: {
          xxs: "16px",
          xs: "144px",
        },
        paddingInline: {
          xxs: "8px",
          xs: "40px",
        },
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        marginTop: "16px",
      }}
    >
      <Box>
        <Typography
          component={"h3"}
          sx={{
            fontSize: {
              xxs:"16px",
              sm:"20px"
            },
            fontWeight: 500,
            color: "secondary.main",
          }}
        >
          Deal of the Day
        </Typography>
        <Typography
          component={"p"}
          sx={{ fontSize: "12px", color: "text.secondary" }}
        >
          Limited quantities
        </Typography>
      </Box>
      <Box>
        <Typography
          component={"h4"}
          sx={{
            fontSize: {
              xxs:"18px",
              xs:"20px",
              sm:"24px"
            },
            fontWeight: 600,
            maxWidth: "310px",
            color: "text.primary",
          }}
        >
          {" "}
          Home Smart Speaker with Google Assistant
        </Typography>
        <Typography
          component={"p"}
          sx={(theme) => ({
            "& > span": {
              fontSize: {
                xxs:"16px",
                sm:"22px"
              },
              fontWeight: 500,
              color: alpha(theme.palette.text.secondary, 0.4),
              "&:first-of-type": {
                color: "secondary.main",
              },
            },
          })}
        >
          <span className="text-[22px] font-[500] text-secondary">$129.00</span>
          <span className="text-[22px] font-[500] text-grey-200">
            Was $150.99
          </span>
        </Typography>
      </Box>
        <CountDown eventFinishDate={{ endDate: "2030-10-31T10:07:13.000Z" }} />
    </Box>
  );
};

export default EventCard;
