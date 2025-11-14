"use client";

import React from "react";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";
import Image from "../ui/Image";
import Rating from "@mui/material/Rating";
import { Eye, Heart, ShoppingCart, Star } from "lucide-react";
import SvgIcon from "@mui/material/SvgIcon";
import Link from "../ui/Link";
import Divider from "@mui/material/Divider";
import { formatCurrency } from "@/utils/utils";
import IconButton from "@mui/material/IconButton";
import { useAppSelector } from "@/hooks/useAppSelector";
import { useToast } from "@/hooks/useToast";
import { useAppDispatch } from "@/hooks/useAppDispatch";
import { addTowishlist, removewishlistItem } from "@/store/slicer/wishlist";
import { addToCart } from "@/store/slicer/cart";

const ProductCard = ({ data }: { data: Product }) => {
  const productName = data?.name.replace(/\s+/, "-");

  const { wishlist } = useAppSelector((state) => state.wishlist);
  const { cart } = useAppSelector((state) => state.cart);

  const isInWishlist = !!wishlist?.find((w: any) => w._id === data?._id);
  const isInCart = !!cart?.find((c: any) => c._id === data?._id);

  const dispatch = useAppDispatch();

  const { success, warning, error } = useToast();

  const handleWishlist = function (product: Product) {
    if (isInWishlist) {
      dispatch(removewishlistItem(product._id));
      warning("Product was removed from wishlist");
      return;
    }

    dispatch(addTowishlist(product));
    success("Product was added to wishlist");
  };

  const handleCartAdd = function (product: Product) {
    if (isInCart) {
      error("Product is already in the cart");
      return;
    }
    dispatch(addToCart({ ...product, quantity: 1 }));
    success("Product was added to cart");
  };

  return (
    <Card
      sx={{
        boxShadow: "none",
        border: "1px solid",
        borderColor: "divider",
        borderRadius: "8px",
        "&:hover .card-action": {
          right: 10,
          opacity: 1,
          visibility: "visible",
        },
      }}
    >
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          height: "100%",
          gap: "12px",
          padding: {
            xxs: "10px",
            sm: "16px",
          },
        }}
      >
        <Box sx={{ position: "relative" }}>
          <Box
            component="section"
            sx={{
              position: "relative",
              width: "100%",
              aspectRatio: "16/12",
              borderRadius: "8px",
              overflow: "hidden",
            }}
          >
            <Image
              fill
              src={data.images[0].url}
              alt={data.name}
              sx={{ objectFit: "cover", width: "100%", height: "100%" }}
            />
          </Box>
          <Box
            className="card-action"
            component={"section"}
            sx={{
              backgroundColor: "background.default",
              position: "absolute",
              top: "50%",
              right: -60,
              opacity: 0,
              visibility: "hidden",
              transition: "all 300ms ease-out",
              transform: "translateY(-50%)",
              boxShadow: "rgba(1, 15, 28, 0.14) 0px 1px 3px",
              borderRadius: "4px",
              display: "flex",
              overflow: "hidden",
              flexDirection: "column",
              "& > button:not(:last-child)": {
                borderBottom: "1px solid",
                borderColor: "divider",
              },
            }}
          >
            <IconButton
              disableRipple
              sx={{
                borderRadius: "0px",
                "&:hover": {
                  bgcolor: "divider",
                },
              }}
              onClick={() => handleCartAdd(data)}
            >
              <SvgIcon
                component={ShoppingCart}
                sx={{
                  fill: "none",
                  color: "text.primary",
                  width: {
                    xxs: "16px",
                    xs: "20px",
                  },
                  height: {
                    xxs: "16px",
                    xs: "20px",
                  },
                }}
              />
            </IconButton>
            {/* <IconButton disableRipple sx={{ borderRadius: "0px","&:hover": {
                  bgcolor: "divider",
                }, }}>
              <SvgIcon
                component={Eye}
                sx={{
                  fill: "none",
                  color: "text.primary",
                  width: "20px",
                  height: "20px",
                }}
              />
            </IconButton> */}
            <IconButton
              disableRipple
              sx={{
                borderRadius: "0px",
                "&:hover": {
                  bgcolor: "divider",
                },
              }}
              onClick={() => handleWishlist(data)}
            >
              <SvgIcon
                component={Heart}
                sx={(theme) => ({
                  fill: !isInWishlist ? "none" : theme.palette.secondary.main,
                  stroke: !isInWishlist
                    ? "currentColor"
                    : theme.palette.secondary.main,
                  color: "text.primary",
                  width: {
                    xxs: "16px",
                    xs: "20px",
                  },
                  height: {
                    xxs: "16px",
                    xs: "20px",
                  },
                })}
              />
            </IconButton>
          </Box>
          <Divider sx={{ paddingTop: "18px" }} />
        </Box>
        <Box
          component="section"
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "3px",
          }}
        >
          <Box>
            <Typography
              component="span"
              sx={{
                fontSize: {
                  xxs: "10px",
                  sm: "12px",
                },
                fontWeight: 500,
                color: "text.secondary",
                display: "block",
                lineHeight: "14px",
              }}
            >
              {data.category}
            </Typography>
          </Box>
          <Typography
            component={Link}
            href={`/product/${productName}`}
            sx={{
              color: "text.primary",
              fontWeight: 600,
              fontSize: {
                xxs: "14px",
                sm: "16px",
              },
              "&:hover": {
                color: "primary.main",
              },
              transition: "color 300ms",
            }}
            className="line-clamp-2"
          >
            {data.name}
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center", gap: "4px" }}>
            <Rating
              readOnly
              value={data.ratings}
              precision={0.5}
              icon={
                <SvgIcon
                  component={Star}
                  sx={{
                    fill: "#FFB21D",
                    stroke: "#FFB21D",
                    width: {
                      xxs: "12px",
                      xs: "14px",
                    },
                    height: {
                      xxs: "12px",
                      xs: "14px",
                    },
                  }}
                />
              }
              emptyIcon={
                <SvgIcon
                  component={Star}
                  sx={{
                    fill: "none",
                    stroke: "#FFB21D",
                    width: {
                      xxs: "12px",
                      xs: "14px",
                    },
                    height: {
                      xxs: "12px",
                      xs: "14px",
                    },
                  }}
                />
              }
            />
            <Typography
              component={"span"}
              sx={{
                fontSize: "11px",
                marginTop: "4px",
                fontWeight: 600,
                color: "text.secondary",
                display: {
                  xxs: "none",
                  xs: "block",
                },
              }}
            >
              ({data?.reviews?.length} review)
            </Typography>
          </Box>
          <Typography
            component={"h2"}
            sx={{
              fontSize: {
                xxs: "14px",
                sm: "18px",
              },
              fontWeight: 600,
              color: "primary.main",
            }}
          >
            {formatCurrency(data.price || 0)}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
