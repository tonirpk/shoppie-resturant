import React, { useState, useEffect } from "react";
import ItemCard from "./ItemCard";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Pagination from "@mui/material/Pagination";
import { useAppContext } from "../Context/Shoppie";
import NoDataFound from "../NoDataFound/NoDataFound";
import { Box, Skeleton, Stack } from "@mui/material";
import SearchBar from "./SearchBar";
import SortItems from "./SortItems";
import { ResponsivePoints } from "../../helpers/Breakpoints";
import ListView from "./ListView";
import ItemCardLined from "./ItemCardLined";
import { motion, AnimatePresence, AnimateSharedLayout } from "framer-motion";

const ItemsList = () => {
  const point = ResponsivePoints();
  const {
    waiting,
    loading,
    currentItem,
    pageNumber,
    currentPage,
    setCurrentPage,
    view,
    favList,
  } = useAppContext();

  // Check if current page is in the page number array
  // const pageArryCheckHandler = () => {
  //   if (pageNumber.indexOf(currentPage) === -1) {
  //     setCurrentPage(1);
  //   }
  // };

  return (
    <AnimateSharedLayout>
      <Stack
        direction={!point.navbarC ? "column" : "row"}
        alignItems="center"
        spacing={2}
      >
        <SearchBar />
        <SortItems />
        <ListView />
      </Stack>
      <Box sx={{ py: 3 }}>
        <Grid container spacing={1}>
          {loading ? (
            <>
              {Array(12)
                .fill(undefined)
                .map((v, i) => (
                  <Grid key={i} item xs={12} sm={6} md={6} lg={3}>
                    <Stack>
                      <Skeleton variant="rectangular" height={200} />
                      <Skeleton width="60%" />
                      <Skeleton />
                      <Skeleton width="60%" />
                    </Stack>
                  </Grid>
                ))}
            </>
          ) : view === "grid" ? (
            <AnimatePresence>
              {currentItem.map((el, idx) => {
                return (
                  <Grid
                    component={motion.div}
                    initial={{
                      opacity: 0,
                      translateX: idx % 2 === 0 ? -50 : 50,
                      translateY: -50,
                    }}
                    animate={{ opacity: 1, translateX: 0, translateY: 0 }}
                    transition={{ duration: 0.3, delay: idx * 0.04 }}
                    exit={{ opacity: 0 }}
                    layout
                    key={el.id}
                    item
                    xs={12}
                    sm={6}
                    md={6}
                    lg={3}
                  >
                    <ItemCard
                      img={el.img}
                      name={el.name}
                      dsc={el.dsc}
                      price={el.price}
                      rate={el.rate}
                      meal={el}
                    />
                  </Grid>
                );
              })}
            </AnimatePresence>
          ) : view === "line" ? (
            currentItem.map((el, idx) => {
              return (
                <Grid key={idx} item xs={12}>
                  <ItemCardLined
                    img={el.img}
                    name={el.name}
                    dsc={el.dsc}
                    price={el.price}
                    rate={el.rate}
                    meal={el}
                  />
                </Grid>
              );
            })
          ) : (
            ""
          )}
        </Grid>
      </Box>
      {currentItem.length > 0 && (
        <Pagination
          color="primary"
          shape="rounded"
          count={pageNumber.length}
          page={currentPage}
          onChange={(e, value) => {
            setCurrentPage(value);
          }}
        />
      )}
    </AnimateSharedLayout>
  );
};

export default ItemsList;
