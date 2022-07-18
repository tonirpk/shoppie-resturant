import {
  Box,
  Card,
  CardMedia,
  Rating,
  Stack,
  Typography,
  Button,
  ButtonGroup,
  IconButton,
} from "@mui/material";
import React from "react";
import { useAppContext } from "../Context/Shoppie";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteIconLined from "@mui/icons-material/FavoriteBorder";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import useMediaQuery from "@mui/material/useMediaQuery";
import { ResponsivePoints } from "../../helpers/Breakpoints";
import { useTheme } from "@mui/material/styles";
import { motion } from "framer-motion";

const ItemCardLined = ({ img, name, dsc, price, rate, meal }) => {
  const {
    addToFavHandler,
    removeFromFavHandler,
    favData,
    addToCartHandler,
    removeFromCartHandler,
    cartData,
    setView,
    view,
  } = useAppContext();

  const point = ResponsivePoints();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.between("md", "lg"));
  const changeView = useMediaQuery(theme.breakpoints.down("580"));

  if (changeView) {
    setView("grid");
  } else {
    setView("line");
  }

  return (
    <Card component={motion.div} layoutId={img}>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Stack direction="row" spacing={3} alignItems="center">
          <CardMedia
            component="img"
            sx={{ width: 221 }}
            image={img}
            alt={name}
          />
          <Stack spacing={1}>
            <Box>
              <Typography variant="h5">{name}</Typography>
              <Rating size="small" value={rate} readOnly />
            </Box>
            <Box>
              <Typography variant="body1">{dsc}</Typography>
              <Typography fontWeight={600} color="primary.main" variant="h6">
                ${price}
              </Typography>
            </Box>
            {matches && (
              <ButtonGroup
                variant="outlined"
                color="primary"
                size="medium"
                aria-label="actions"
              >
                {favData.includes(meal) ? (
                  <IconButton onClick={() => removeFromFavHandler(meal)}>
                    <FavoriteIcon color="primary" />
                  </IconButton>
                ) : (
                  <IconButton onClick={() => addToFavHandler(meal)}>
                    <FavoriteIconLined color="secondary" />
                  </IconButton>
                )}
                {cartData.includes(meal) ? (
                  <IconButton onClick={() => removeFromCartHandler(meal)}>
                    <ShoppingCartIcon color="primary" />
                  </IconButton>
                ) : (
                  <IconButton onClick={() => addToCartHandler(meal)}>
                    <AddShoppingCartIcon color="secondary" />
                  </IconButton>
                )}
                <IconButton>
                  <ShoppingBasketIcon color="secondary" />
                </IconButton>
              </ButtonGroup>
            )}
          </Stack>
        </Stack>
        {!matches && (
          <Stack spacing={1} justifyContent="center" sx={{ mx: 2 }}>
            {favData.includes(meal) ? (
              <Button
                size="large"
                sx={{ justifyContent: "flex-start" }}
                variant="outlined"
                color="error"
                startIcon={<FavoriteIcon color="primary" />}
                onClick={() => removeFromFavHandler(meal)}
              >
                Favorite
              </Button>
            ) : (
              <Button
                size="large"
                sx={{ justifyContent: "flex-start" }}
                variant="outlined"
                color="primary"
                startIcon={<FavoriteBorderIcon />}
                onClick={() => addToFavHandler(meal)}
              >
                Favorite
              </Button>
            )}
            {cartData.includes(meal) ? (
              <Button
                size="large"
                sx={{ justifyContent: "flex-start" }}
                variant="outlined"
                color="error"
                startIcon={<ShoppingCartIcon color="primary" />}
                onClick={() => removeFromCartHandler(meal)}
              >
                Cart
              </Button>
            ) : (
              <Button
                size="large"
                sx={{ justifyContent: "flex-start" }}
                variant="outlined"
                color="primary"
                startIcon={<AddShoppingCartIcon />}
                onClick={() => addToCartHandler(meal)}
              >
                Cart
              </Button>
            )}
            <Button
              size="large"
              sx={{ justifyContent: "flex-start" }}
              variant="contained"
              color="primary"
              startIcon={<ShoppingBasketIcon />}
            >
              Buy
            </Button>
          </Stack>
        )}
      </Stack>
    </Card>
  );
};

export default ItemCardLined;
