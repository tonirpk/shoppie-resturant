import React from "react";
import Image from "next/image";
import Box from "@mui/material/Box";
import bgImg from "./imgs/bgPattern.png";
import dishImg from "./imgs/dish.png";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import SubsicribeBtn from "./SubsicribeBtn";

const backgroundStyle = {
  px: { xs: 3, md: 8, lg: 10 },
  py: { xs: 1, md: 2, lg: 3 },
  position: "relative",
  background: `url(${bgImg.src}) repeat `,
  backgroundSize: "contain",
  backgroundPosition: "center",

  zIndex: -2,
  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    backgroundColor: "rgba(197, 234, 217, 0.7)",
    zIndex: -1,
  },
};

const gridContainerStyles = {
  alignItems: "center",
  textAlign: { xs: "center", md: "left" },
};

const Header = () => {
  return (
    <Box component="header" sx={{ ...backgroundStyle }}>
      <Grid container spacing={1} sx={{ ...gridContainerStyles }}>
        <Grid item xs={12} md={6} lg={6}>
          <Stack spacing={2} alignItems={{ xs: "center", md: "flex-start" }}>
            <Typography fontWeight={600} variant="h2">
              Don’t miss our daily amazing deals.
            </Typography>
            <Typography variant="subtitle1">
              Save up to 60% off on your first order
            </Typography>
            <SubsicribeBtn />
          </Stack>
        </Grid>
        <Grid sx={{ textAlign: "center" }} item xs={12} md={6} lg={6}>
          <Image width={400} height={359} src={dishImg} alt="/" />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Header;
