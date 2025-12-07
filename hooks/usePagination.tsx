import React from "react";
import useSearchQuery from "./useSearchQuery";
import { ITEMS_PER_PAGE } from "@/utils/constants";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

export const usePagination = ({
  totalItems,
  activePage,
}: {
  totalItems: number;
  activePage: number;
}) => {
  const { setSearchQuery } = useSearchQuery();

  let previousPage = activePage - 1;
  let nextPage = activePage + 1;

  const totalPage = Math.ceil(totalItems / ITEMS_PER_PAGE);

  const paginationButtons = [];

  if (activePage === totalPage && totalPage > 10) {
    previousPage = previousPage - 1;
  }

  if (activePage === 1) {
    nextPage = nextPage + 1;
  }

  const handleClick = (num: number) => {
    setSearchQuery("page", num);
  };

  for (let pageNum = previousPage; pageNum <= nextPage; pageNum++) {
    if (pageNum > totalPage) {
      break;
    }

    if (pageNum === 0) {
      pageNum = pageNum + 1;
    }

    const pages = (
      <Box key={pageNum}>
        <Button
          variant="outlined"
          sx={(theme) => ({
            minWidth: {
              xxs: 30,
              sm: 40,
            },
            width: { xxs: 30, sm: 40 },
            aspectRatio: 1 / 1,
            padding: 0,
            borderRadius: "100%",
            backgroundColor:
              activePage === pageNum
                ? theme.palette.primary.main
                : "rgba(46, 134, 222, 0.04)",
            color:
              activePage === pageNum ? "white" : theme.palette.primary.main,
            "&:hover": {
              backgroundColor: "primary.main",
              color: "white",
            },
          })}
          onClick={handleClick.bind(null, pageNum)}
        >
          {pageNum}
        </Button>
      </Box>
    );

    paginationButtons.push(pages);
  }

  const handleNextClick = () => {
    const next = activePage <= totalPage ? activePage + 1 : null;
    setSearchQuery("page", next);
  };

  const handlePreviousClick = () => {
    const prev = activePage === 1 ? activePage : activePage - 1;
    setSearchQuery("page", prev);
  };

  return {
    handleNextClick,
    handlePreviousClick,
    paginationButtons,
    totalPage,
  };
};
