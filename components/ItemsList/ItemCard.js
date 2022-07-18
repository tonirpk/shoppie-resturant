import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Rating from "@mui/material/Rating";
import { Stack, Button } from "@mui/material";
import FavoriteIconLined from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import BuyIcon from "@mui/icons-material/ShoppingBasket";
import { Box } from "@mui/system";
import { useAppContext } from "../Context/Shoppie";
import { motion, AnimatePresence } from "framer-motion";

const favIconBtnStyles = {
  bgcolor: "#def9ec",
  "&:hover": { backgroundColor: "#b9d2c6" },
  boxShadow: 1,
};

const ItemCard = ({ img, name, dsc, price, rate, meal }) => {
  const {
    addToFavHandler,
    removeFromFavHandler,
    favData,
    addToCartHandler,
    removeFromCartHandler,
    cartData,
    favList,
    cartList,
  } = useAppContext();

  const [showActions, setShowActions] = useState(false);

  const onMouseEnterHandler = () => {
    setShowActions(true);
  };

  const onMouseExitHandler = () => {
    setShowActions(false);
  };

  return (
    <Card
      onMouseEnter={onMouseEnterHandler}
      onMouseLeave={onMouseExitHandler}
      component={motion.div}
      layoutId={img}
      sx={{
        position: "relative",
        height: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <AnimatePresence>
        {showActions && (
          <Stack
            key="actions"
            component={motion.div}
            initial={{ opacity: 0, translateX: 50 }}
            animate={{ opacity: 1, translateX: 0 }}
            exit={{ opacity: 0, translateX: 50 }}
            transition={{ duration: 0.6 }}
            spacing={1}
            sx={{ position: "absolute", top: 0, right: 0, m: 1 }}
          >
            {favData.find((item) => item.id === meal.id) ? (
              <IconButton
                onClick={() => removeFromFavHandler(meal)}
                sx={{ ...favIconBtnStyles }}
              >
                <FavoriteIcon color="primary" />
              </IconButton>
            ) : (
              <IconButton
                onClick={() => addToFavHandler(meal)}
                sx={{ ...favIconBtnStyles }}
              >
                <FavoriteIconLined color="secondary" />
              </IconButton>
            )}

            {cartData.find((item) => item.id === meal.id) ? (
              <IconButton
                onClick={() => removeFromCartHandler(meal)}
                sx={{ ...favIconBtnStyles }}
              >
                <ShoppingCartIcon color="primary" />
              </IconButton>
            ) : (
              <IconButton
                onClick={() => addToCartHandler(meal)}
                sx={{ ...favIconBtnStyles }}
              >
                <AddShoppingCartIcon color="secondary" />
              </IconButton>
            )}
          </Stack>
        )}
      </AnimatePresence>
      <CardMedia component="img" height="194" image={img} alt={name} />
      <CardContent sx={{ pt: 1 }}>
        <Stack spacing={1}>
          <Box>
            <Typography fontWeight={600} variant="subtitle1">
              {name}
            </Typography>
            <Stack direction="row" spacing={1} alignItems="center">
              <Rating size="small" value={rate} readOnly />
              <Typography variant="body2">({rate})</Typography>
            </Stack>
          </Box>
          <Typography variant="body2">{dsc}</Typography>
        </Stack>
      </CardContent>
      <CardContent
        sx={{
          display: "flex",
          flex: "1 0 auto",
          alignItems: "flex-end",
          py: 0,
          "&:last-child": { pb: 1 },
        }}
      >
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          width="100%"
        >
          <Typography color="#3bb77e" fontWeight={600} variant="body1">
            ${price}
          </Typography>

          <Button
            startIcon={<BuyIcon color="secondary" />}
            variant="outlined"
            color="primary"
          >
            Buy
          </Button>
        </Stack>
      </CardContent>
    </Card>
  );
};

export default ItemCard;
