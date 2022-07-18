import { Box, Card, CardMedia, Rating, Stack, Typography } from "@mui/material";
import React from "react";

const ItemCard = ({ img, name, rate, dsc }) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
      }}
    >
      <CardMedia component="img" sx={{ width: 80 }} image={img} alt={name} />
      <Stack sx={{ ml: 3 }} spacing={1}>
        <Typography fontWeight={600} variant="body1">
          {name}
        </Typography>
        <Typography variant="body2">{dsc}</Typography>
        <Rating size="small" readOnly value={rate} />
      </Stack>
    </Box>
  );
};

export default ItemCard;
