import React from "react";
import Image from "next/image";
import Grid from "@mui/material/Grid";
import { Box } from "@mui/system";
import bgImg from "./imgs/bgPattern.png";
import chef from "./imgs/chef.png";
import dish from "./imgs/dish.png";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Stack } from "@mui/material";

const leftBoxStyles = {
  position: "relative",
  background: `url(${bgImg.src}) repeat `,
  backgroundSize: "contain",
  backgroundPosition: "center",
  width: "100%",
  height: "100%",
  p: 5,

  zIndex: -2,
  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    backgroundColor: "rgba(255, 245, 225, 0.7)",
    zIndex: -1,
  },
};

const rightBoxStyles = {
  position: "relative",
  background: `url(${bgImg.src}) repeat `,
  backgroundSize: "contain",
  backgroundPosition: "center",
  width: "100%",
  height: "100%",
  p: 5,

  zIndex: -2,
  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    backgroundColor: "rgba(210, 239, 225, 0.7)",
    zIndex: -1,
  },
};

const Boxes = () => {
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item sm={12} md={6}>
          <Stack
            alignItems="flex-start"
            justifyContent="space-between"
            sx={{ ...leftBoxStyles }}
          >
            <Box>
              <Typography
                sx={{ bgcolor: "#FFD480", color: "#fff", p: 1 }}
                variant="caption"
              >
                Free delivery
              </Typography>
              <Typography sx={{ my: 1, fontWeight: 500 }} variant="h4">
                Free delivery over $50{" "}
              </Typography>
              <Typography variant="h6" fontWeight={400}>
                Shop $50 product and get free delivery anywhere
              </Typography>
            </Box>
            <Button
              size="large"
              sx={{ mt: 5 }}
              endIcon={<ArrowForwardIcon />}
              variant="contained"
              color="primary"
            >
              Shop Now
            </Button>
          </Stack>
        </Grid>
        <Grid item sm={12} md={6}>
          <Stack
            alignItems="flex-start"
            justifyContent="space-between"
            sx={{ ...rightBoxStyles }}
          >
            <Box>
              <Typography
                sx={{ bgcolor: "primary.main", color: "#fff", p: 1 }}
                variant="caption"
              >
                60% off
              </Typography>
              <Typography sx={{ my: 1, fontWeight: 500 }} variant="h4">
                5 Stars restaurant
              </Typography>
              <Typography variant="h6" fontWeight={400}>
                Save up to 60% off on your first order and get free delivery
                anywhere
              </Typography>
            </Box>
            <Button
              size="large"
              sx={{ mt: 5 }}
              endIcon={<ArrowForwardIcon />}
              variant="contained"
              color="primary"
            >
              Order Now
            </Button>
          </Stack>
        </Grid>
      </Grid>
    </div>
  );
};

export default Boxes;
