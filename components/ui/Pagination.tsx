"use client";

import React from "react";
import { ITEMS_PER_PAGE } from "@/utils/constants";
import { usePagination } from "@/hooks/usePagination";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

const Pagination = ({
  totalItems,
  activePage,
}: {
  totalItems: number;
  activePage: number;
}) => {
  const { handleNextClick, handlePreviousClick, paginationButtons, totalPage } =
    usePagination({ totalItems, activePage });

  return (
    <>
      {totalItems > ITEMS_PER_PAGE && (
        <>
          <Box>
            <Button
              variant="outlined"
              sx={{
                minWidth: {
                  xxs: 30,
                  sm: 40,
                },
                width: { xxs: 30, sm: 40 },
                aspectRatio: 1 / 1,
                padding: 0,
                borderRadius: "100%",
                "&:hover": {
                  backgroundColor: "primary.main",
                  color: "white",
                },
              }}
              disabled={activePage === 1}
              onClick={handlePreviousClick}
            >
              <ChevronLeft />
            </Button>
          </Box>
          {paginationButtons}
          <Box>
            <Button
              variant="outlined"
              sx={{
                minWidth: {
                  xxs: 30,
                  sm: 40,
                },
                width: { xxs: 30, sm: 40 },
                aspectRatio: 1 / 1,
                padding: 0,
                borderRadius: "100%",
                "&:hover": {
                  backgroundColor: "primary.main",
                  color: "white",
                },
              }}
              disabled={activePage === totalPage}
              onClick={handleNextClick}
            >
              <ChevronRight />
            </Button>
          </Box>
        </>
      )}
    </>
  );
};

export default Pagination;
