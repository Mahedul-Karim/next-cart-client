import React, { useEffect, useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import DialogContent from "@mui/material/DialogContent";
import InputAdornment from "@mui/material/InputAdornment";
import LinearProgress from "@mui/material/LinearProgress";
import Typography from "@mui/material/Typography";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";
import { Search } from "lucide-react";
import Image from "../Image";
import Link from "../Link";
import { BASE_URL } from "@/utils/constants";

interface Props {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const SearchModal: React.FC<Props> = ({ open, setOpen }) => {
  const [searchText, setSearchText] = useState("");

  const [searchData, setSearchData] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    if (!searchText) return;

    const timeout = setTimeout(async () => {
      try {
        setIsLoading(true);
        const res = await fetch(`${BASE_URL}/product/search`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            search: searchText,
          }),
        });

        const data = await res.json();

        setSearchData(data?.products);
      } catch (error: any) {
        console.log(error.message);
      } finally {
        setIsLoading(false);
      }
    }, 600);

    return () => clearTimeout(timeout);
  }, [searchText]);

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      slotProps={{
        backdrop: {
          sx: {
            backdropFilter: "blur(5px)",
          },
        },
        paper: {
          sx: {
            maxWidth: 640,
            width: "100%",
            marginInline: 0,
            maxHeight: "calc(100% - 10px)",
          },
        },
      }}
    >
      <DialogTitle id="alert-dialog-title">{"Search Products"}</DialogTitle>
      <DialogContent>
        <Box
          component={"section"}
          sx={{
            marginTop: "10px",
            display: "flex",
            flexDirection: "column",
            gap: 2,
          }}
        >
          <TextField
            label="Search"
            size="small"
            value={searchText}
            onChange={(e) => {
              if (!e.target.value) {
                setSearchData([]);
              }
              setSearchText(e.target.value);
            }}
            slotProps={{
              inputLabel: {
                sx: {
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
                  width: "100%",
                },
              },
              input: {
                endAdornment: (
                  <InputAdornment position="end">
                    <Search />
                  </InputAdornment>
                ),
              },
            }}
          />
          <Box className="w-full  rounded-md bg-white" id="search">
            {isLoading && (
              <LinearProgress
                sx={{
                  position: "fixed",
                  top: 0,
                  left: 0,
                  width: "100%",
                  zIndex: 10,
                }}
              />
            )}
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
              {searchData.length !== 0 &&
                searchData?.map((data) => (
                  <Link
                    href={`/product/${data?.name}`}
                    key={data._id}
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      paddingBlock: 1,
                      gap:1
                    }}
                  >
                    <Image
                      src={data?.images[0]?.url}
                      alt="search text"
                      width={60}
                      height={60}
                      sx={{ aspectRatio: 1 / 1, objectFit: "cover" }}
                    />
                    <Typography
                      sx={{ fontWeight: 600, color: "text.secondary" }}
                      className="line-clamp-2"
                    >
                      {data?.name}
                    </Typography>
                  </Link>
                ))}
            </Box>
          </Box>
        </Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Close</Button>
      </DialogActions>
    </Dialog>
  );
};

export default SearchModal;
