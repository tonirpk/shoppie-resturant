import { Box, Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import bgImg from "./imgs/ourAppBg.png";
import appImg from "./imgs/App.png";
import iosImg from "./imgs/ios.png";
import playImg from "./imgs/play.png";

const boxStyles = {
  position: "relative",
  background: `url(${bgImg.src}) repeat `,
  backgroundSize: "contain",
  backgroundPosition: "center",
  my: 10,
  px: { xs: 3, md: 8, lg: 10 },
  py: 5,

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

const GetOutApp = () => {
  return (
    <div>
      <Box sx={{ ...boxStyles }}>
        <Grid
          sx={{
            alignItems: "center",
          }}
          container
          spacing={3}
        >
          <Grid item xs={12} md={7}>
            <Stack spacing={3}>
              <Typography fontWeight={600} variant="h3">
                Shop Faster With Shoppie App
              </Typography>
              <Typography fontWeight={500} variant="body1">
                Available on both IOS & Android
              </Typography>
              <Stack direction="row" alignItems="center">
                <Image src={iosImg} width={219} height={63} alt="ios" />
                <Image src={playImg} width={254} height={73} alt="ios" />
              </Stack>
            </Stack>
          </Grid>
          <Grid item xs={12} md={5}>
            <Image layout="responsive" src={appImg} alt="app" />
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default GetOutApp;
