import {
  Card,
  CardMedia,
  Rating,
  Stack,
  Typography,
  Button,
} from "@mui/material";
import React from "react";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Box } from "@mui/system";
import { useAppContext } from "../Context/Shoppie";

const FeaturedCard = ({ img, name, price, rate, meal }) => {
  const { cartData, removeFromCartHandler, addToCartHandler } = useAppContext();

  return (
    <Card sx={{ width: 213, backgroundColor: "transparent" }}>
      <CardMedia title={name} image={img} component="img" height="220" />
      <Box sx={{ p: 1 }}>
        <Stack>
          <Typography noWrap variant="subtitle2">
            {name}
          </Typography>
          <Rating size="small" name="read-only" value={rate} readOnly />
        </Stack>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <Typography color="primary.main" variant="subtitle2">
            ${price}
          </Typography>
          {cartData.includes(meal) ? (
            <Button
              onClick={() => removeFromCartHandler(meal)}
              disableElevation
              size="small"
              startIcon={<ShoppingCartIcon color="secondary" />}
              variant="contained"
              color="primary"
            >
              Added
            </Button>
          ) : (
            <Button
              onClick={() => addToCartHandler(meal)}
              disableElevation
              size="small"
              startIcon={<AddShoppingCartIcon />}
              variant="contained"
              color="primary"
            >
              Add
            </Button>
          )}
        </Stack>
      </Box>
    </Card>
  );
};

export default FeaturedCard;
