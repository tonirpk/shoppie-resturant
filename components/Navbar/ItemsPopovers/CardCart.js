import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import {
  Box,
  Rating,
  Stack,
  TextField,
  ButtonGroup,
  Button,
} from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import CloseIcon from "@mui/icons-material/Close";
import { useAppContext } from "../../Context/Shoppie";
import FavoriteIconLined from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

const CardCart = ({ img, name, rate, price, cart, id }) => {
  const {
    removeFromCartHandler,
    favData,
    addToFavHandler,
    removeFromFavHandler,
    incrementHandler,
    decrementHandler,
  } = useAppContext();

  return (
    <Card
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
        bgcolor: "#fff",
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
        <Stack alignItems="center" sx={{ mr: 1 }}>
          <Typography
            color="#3bb77e"
            fontWeight={600}
            variant="body1"
            sx={{ mr: 1 }}
          >
            ${price}
          </Typography>
          <ButtonGroup
            size="small"
            variant="outlined"
            color="primary"
            aria-label="quantity"
          >
            <Button
              onClick={() => incrementHandler(id)}
              disableElevation
              variant="contained"
            >
              +
            </Button>
            <Button
              disableFocusRipple
              disableRipple
              disableTouchRipple
              disableElevation
              sx={{ "&:hover": { bgcolor: "transparent", cursor: "default" } }}
            >
              {cart.quantity}
            </Button>
            <Button
              onClick={() => decrementHandler(id)}
              disableElevation
              variant="contained"
            >
              -
            </Button>
          </ButtonGroup>
        </Stack>
        {favData.includes(cart) ? (
          <IconButton onClick={() => removeFromFavHandler(cart)}>
            <FavoriteIcon color="primary" />
          </IconButton>
        ) : (
          <IconButton onClick={() => addToFavHandler(cart)}>
            <FavoriteIconLined color="secondary" />
          </IconButton>
        )}
        <IconButton
          aria-label="remove"
          onClick={() => removeFromCartHandler(cart)}
        >
          <DeleteForeverIcon color="error" />
        </IconButton>
      </Stack>
    </Card>
  );
};

export default CardCart;
