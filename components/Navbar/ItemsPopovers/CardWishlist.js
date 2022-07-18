import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { Box, Rating, Stack } from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import CloseIcon from "@mui/icons-material/Close";
import { useAppContext } from "../../Context/Shoppie";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

const CardWishlist = ({ img, name, rate, price, fav }) => {
  const {
    removeFromFavHandler,
    cartData,
    removeFromCartHandler,
    addToCartHandler,
    emptyFavList,
  } = useAppContext();

  return (
    <Card
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
        bgcolor: "#e5e5e5",
      }}
    >
      <Stack direction="row" alignItems="center">
        <CardMedia component="img" height="70" image={img} alt={name} />

        <Box sx={{ mx: 2 }}>
          <Typography variant="body2">{name}</Typography>
          <Rating sx={{ fontSize: 15 }} value={rate} readOnly />
        </Box>
      </Stack>

      <Stack direction="row" alignItems="center">
        <Typography
          color="#3bb77e"
          fontWeight={600}
          variant="body1"
          sx={{ mr: 1 }}
        >
          ${price}
        </Typography>
        {cartData.includes(fav) ? (
          <IconButton onClick={() => removeFromCartHandler(fav)}>
            <ShoppingCartIcon color="primary" />
          </IconButton>
        ) : (
          <IconButton onClick={() => addToCartHandler(fav)}>
            <AddShoppingCartIcon color="secondary" />
          </IconButton>
        )}
        <IconButton
          aria-label="remove"
          onClick={() => removeFromFavHandler(fav)}
        >
          <DeleteForeverIcon color="error" />
        </IconButton>
      </Stack>
    </Card>
  );
};

export default CardWishlist;
