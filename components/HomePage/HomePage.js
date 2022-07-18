import { Box, Stack, Grid, Typography, Button } from "@mui/material";
import Image from "next/image";
import React from "react";
import ExploreCategories from "./ExploreCategories";
import FeaturedProducts from "./FeaturedProducts";
import Boxes from "./Boxes";
import BestSelling from "./BestSelling";

const HomePage = () => {
  return (
    <Stack spacing={10}>
      <ExploreCategories />
      <FeaturedProducts />
      <Boxes />
      <BestSelling />
    </Stack>
  );
};

export default HomePage;
