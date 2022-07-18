import React from "react";
import HomePageComponent from "../components/HomePage/HomePage";
import { Box } from "@mui/material";

const HomePage = () => {
  return (
    <Box sx={{ mx: { xs: 3, md: 8, lg: 10 }, my: 3 }}>
      <HomePageComponent />
    </Box>
  );
};

export default HomePage;
