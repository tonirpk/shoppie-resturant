import React, { useState, useEffect } from "react";
import ExploreCard from "./ExploreCard";
import Carousel, { consts } from "react-elastic-carousel";
import ArrowLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import ArrowRightIcon from "@mui/icons-material/ArrowCircleRight";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";
import { Box, Skeleton, Stack } from "@mui/material";
import useSWR from "swr";

const buttonArr = [
  {
    id: "1",
    title: "All",
  },
  {
    id: "2",
    title: "Burgers",
  },
  {
    id: "3",
    title: "Breads",
  },
  {
    id: "4",
    title: "Sandwiches",
  },
  {
    id: "5",
    title: "Drinks",
  },
  {
    id: "6",
    title: "Pizzas",
  },
];

const myArrow = ({ type, onClick, isEdge }) => {
  const pointer = type === consts.PREV ? <ArrowLeftIcon /> : <ArrowRightIcon />;
  return (
    <Button onClick={onClick} disabled={isEdge}>
      {pointer}
    </Button>
  );
};

const ExploreCategories = () => {
  const [active, setActive] = useState("");
  const [foodMenuId, setFoodMenuId] = useState("our-foods");

  const fetcher = (url) => fetch(url).then((res) => res.json());
  const { data, error } = useSWR(
    `https://ig-food-menus.herokuapp.com/${foodMenuId}`,
    fetcher
  );

  if (error) return <div>failed to load</div>;

  const clickHandler = (event) => {
    setActive(event.target.id);
    if (event.target.id === "1") {
      setFoodMenuId("our-foods");
    }
    if (event.target.id === "2") {
      setFoodMenuId("burgers");
    }
    if (event.target.id === "3") {
      setFoodMenuId("breads");
    }
    if (event.target.id === "4") {
      setFoodMenuId("sandwiches");
    }
    if (event.target.id === "5") {
      setFoodMenuId("drinks");
    }
    if (event.target.id === "6") {
      setFoodMenuId("pizzas");
    }
  };

  const breakPoints = [
    { width: 1, itemsToShow: 2, itemsToScroll: 2, itemPadding: [0, 2] },
    { width: 320, itemsToShow: 3, itemsToScroll: 3 },
    { width: 480, itemsToShow: 4, itemsToScroll: 4 },
    { width: 768, itemsToShow: 6, itemsToScroll: 6 },
    { width: 992, itemsToShow: 6, itemsToScroll: 6 },
    { width: 1200, itemsToShow: 8, itemsToScroll: 8 },
  ];

  return (
    <Grid container spacing={0}>
      <Grid sx={{ mb: 2 }} item xs={12}>
        <Stack
          direction={{ xs: "column", md: "row" }}
          alignItems="center"
          justifyContent="space-between"
        >
          <Typography variant="h6">Explore Categories</Typography>
          <ButtonGroup
            disableRipple
            variant="text"
            color="secondary"
            aria-label="categories navigation"
            sx={{
              ".MuiButtonGroup-grouped:not(:last-of-type)": {
                border: "none",
              },
            }}
          >
            {buttonArr.map((btn, idx) => {
              return (
                <Button
                  key={idx}
                  id={btn.id}
                  sx={active === `${btn.id}` ? { color: "primary.main" } : {}}
                  onClick={clickHandler}
                >
                  {btn.title}
                </Button>
              );
            })}
          </ButtonGroup>
        </Stack>
      </Grid>

      <Grid item xs={12}>
        <Carousel
          breakPoints={breakPoints}
          itemPadding={[0, 3]}
          renderArrow={myArrow}
          // itemsToShow={7}
          // itemsToScroll={7}
          pagination={false}
        >
          {!data
            ? Array(10)
                .fill(undefined)
                .map((v, i) => (
                  <Stack key={i} sx={{ width: 183, height: 220 }}>
                    <Skeleton variant="rectangular" height={220} />
                    <Skeleton width="40%" />
                    <Skeleton width="40%" />
                    <Skeleton width="100%" />
                  </Stack>
                ))
            : data.slice(0, 20).map((item, idx) => {
                return <ExploreCard key={idx} data={item} />;
              })}
        </Carousel>
      </Grid>
    </Grid>
  );
};

export default ExploreCategories;
