"use client";

import { categoriesData } from "@/utils/data";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Checkbox from "@mui/material/Checkbox";
import SvgIcon from "@mui/material/SvgIcon";
import Typography from "@mui/material/Typography";
import { useEffect, useRef, useState } from "react";
import RangeSlider from "@/components/ui/filter/RangeSlider";
import { useSearchParams } from "next/navigation";
import useSearchQuery from "@/hooks/useSearchQuery";
import CustomRatings from "@/components/ui/CustomRatings";
import { Check } from "lucide-react";

const Title = ({ children }: { children: React.ReactNode }) => {
  return (
    <Typography
      component="h2"
      sx={{ fontSize: "16px", fontWeight: 500, color: "text.primary" }}
    >
      {children}
    </Typography>
  );
};

const Sidebar = () => {
  const searchParams = useSearchParams();

  const { setSearchQuery, deleteSearchQuery } = useSearchQuery();

  const searchText = searchParams.get("search") || "";
  const categoryValue = searchParams.get("category") || "All";
  const ratingValue = searchParams.get("rating") || "";

  const [search, setSearch] = useState(searchText);
  const [category, setCategory] = useState(categoryValue);
  const [price, setPrice] = useState([0, 2000]);
  const [ratings, setRatings] = useState(
    ratingValue ? ratingValue.split("-").map((num) => +num) : []
  );

  const maxPrice = price[1];
  const minPrice = price[0];

  const searchTimeout = useRef<NodeJS.Timeout | null>(null);
  const pricingTimeout = useRef<NodeJS.Timeout | undefined>(undefined);

  const handleSearch = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const value = e.target.value;

    setSearch(value);

    if (searchTimeout.current) {
      clearTimeout(searchTimeout.current);
    }

    searchTimeout.current = setTimeout(() => {
      if (value === "") {
        deleteSearchQuery("search");
        return;
      }
      setSearchQuery("search", value.trim());
    }, 600);
  };

  const handleCategory = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const value = e.target.value;

    setCategory(value);

    if (value === "All") {
      deleteSearchQuery("category");
      return;
    }

    setSearchQuery("category", value);
  };

  useEffect(() => {
    if (minPrice === 0 && maxPrice === 2000) {
      deleteSearchQuery("price");
      return;
    }

    pricingTimeout.current = setTimeout(() => {
      setSearchQuery("price", price.join("-"));
    }, 600);

    return () => clearTimeout(pricingTimeout.current);
  }, [maxPrice, minPrice]);

  useEffect(() => {
    if (ratings.length === 0) {
      deleteSearchQuery("rating");
    } else {
      setSearchQuery("rating", ratings.join("-"));
    }
  }, [ratings]);

  return (
    <Box
      component="section"
      sx={{
        paddingBlock: 2,
        paddingInline: 2,
        display: "flex",
        flexDirection: "column",
        gap: 2,
        backgroundColor: "background.paper",
        borderRadius: "6px",
        height: "max-content",
        border: "1px solid",
        borderColor: "divider",
      }}
    >
      <Box>
        <TextField
          label="Search"
          size="small"
          fullWidth
          value={search}
          onChange={handleSearch}
          slotProps={{
            inputLabel: {
              sx: {
                fontSize: "14px",
                color: "text.secondary",
              },
            },
            htmlInput: {
              sx: {
                fontSize: "14px",
                color: "text.primary",
              },
            },
            root: {
              sx: {
                "& .MuiOutlinedInput-notchedOutline": {
                  borderColor: "divider",
                },
              },
            },
          }}
        />
      </Box>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
        <Title>Category</Title>
        <TextField
          select
          fullWidth
          value={category}
          size="small"
          onChange={handleCategory}
          slotProps={{
            htmlInput: {
              sx: {
                color: "text.primary",
                fontSize: "14px",
              },
            },
          }}
        >
          {categoriesData?.map((cat) => (
            <MenuItem key={cat.id} value={cat.title}>
              {cat.title}
            </MenuItem>
          ))}
        </TextField>
      </Box>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
        <Title>Pricing</Title>
        <RangeSlider
          maxValue={maxPrice}
          minValue={minPrice}
          setMaxValue={(val) => {
            const newPrice = [...price];
            newPrice[1] = val;
            setPrice(newPrice);
          }}
          setMinValue={(val) => {
            const newPrice = [...price];
            newPrice[0] = val;
            setPrice(newPrice);
          }}
        />
      </Box>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
        <Title>Ratings</Title>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
          {[5, 4, 3, 2, 1].map((num) => (
            <Box
              key={num}
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
                position: "relative",
              }}
            >
              <Checkbox
                id={`rating-${num}`}
                onChange={() => {
                  const alreadyExists = ratings.find((rat) => rat === num);

                  if (alreadyExists) {
                    const removedRatings = [...ratings].filter(
                      (rat) => rat !== num
                    );
                    setRatings(() => removedRatings);
                  } else {
                    setRatings((prev) => [...prev, num]);
                  }
                }}
                checked={ratings?.includes(num)}
                sx={{
                  width: 32,
                  height: 32,
                  position: "absolute",
                  opacity: 0,
                  zIndex: 9999,
                }}
              />

              <Box
                sx={(theme) => ({
                  width: 16,
                  height: 16,
                  border: "1px solid",
                  borderColor: !ratings.includes(num)
                    ? theme.palette.divider
                    : theme.palette.primary.main,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: "100%",
                })}
              >
                <SvgIcon
                  component={Check}
                  sx={{
                    fill: "none",
                    color: "primary.main",
                    width: 13,
                    height: 13,
                    strokeDasharray: 40,
                    strokeDashoffset: ratings.includes(num) ? 0 : 40,
                    transition: "all 300ms ease-in-out",
                  }}
                />
              </Box>
              <Typography
                component={"label"}
                sx={{
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                htmlFor={`rating-${num}`}
              >
                <CustomRatings ratings={num} />
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Sidebar;
