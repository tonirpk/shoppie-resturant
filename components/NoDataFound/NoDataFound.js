import { Box, Typography } from "@mui/material";
import React from "react";
import notFoundImg from "./not-found.png";

const NoDataFound = () => {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        textAlign: "center",
      }}
    >
      <img
        style={{ width: "100%", maxWidth: 300 }}
        src={notFoundImg.src}
        alt="not found"
      />
      <Typography color="primary.main" variant="h2">
        Sorry! No data found.
      </Typography>
    </Box>
  );
};

export default NoDataFound;
