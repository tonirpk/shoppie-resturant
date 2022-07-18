import React from "react";
import Box from "@mui/material/Box";
import Popular from "./Popular";
import Price from "./Price";
import Rating from "./Rating";
import Button from "@mui/material/Button";
import Link from "next/link";
import { Stack } from "@mui/material";
import { ResponsivePoints } from "../../helpers/Breakpoints";
import { useAppContext } from "../Context/Shoppie";

const listStyles = {
  width: "100%",
  maxWidth: 220,
  bgcolor: "background.paper",
};

const listHeaderStyles = {
  bgcolor: "transparent",
  fontSize: 20,
  fontWeight: 600,
};

const Sider = () => {
  const point = ResponsivePoints();
  return (
    <Stack
      direction={{ md: "row", lg: "column" }}
      justifyContent={{ xs: "space-between", lg: "flex-start" }}
    >
      <Popular listStyles={listStyles} listHeaderStyles={listHeaderStyles} />
      <Price listStyles={listStyles} listHeaderStyles={listHeaderStyles} />
      <Rating listStyles={listStyles} listHeaderStyles={listHeaderStyles} />
    </Stack>
  );
};

export default Sider;
