import { Box, Card, CardMedia, Stack, Typography } from "@mui/material";
import React from "react";

const ExploreCard = ({ data, paperColor }) => {
  return (
    <Card sx={{ width: 143, p: 1, textAlign: "center", bgcolor: "#FEEFEA" }}>
      <CardMedia
        sx={{ borderRadius: 2 }}
        title={data.name}
        image={data.img}
        component="img"
        height="120"
      />
      <Box sx={{ py: 1 }}>
        <Typography noWrap variant="body2">
          {data.name}
        </Typography>
        <Typography color="primary.main" variant="subtitle2">
          ${data.price}
        </Typography>
      </Box>
    </Card>
  );
};

export default ExploreCard;
