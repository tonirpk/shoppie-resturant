import React, { useState } from "react";
import Link from "next/link";
import { Badge, Button, Stack, Typography, IconButton } from "@mui/material";
import CartMenu from "../ItemsPopovers/CartMenu";
import CartIcon from "@mui/icons-material/ShoppingCartOutlined";
import CartFilledIcon from "@mui/icons-material/ShoppingCart";
import { useAppContext } from "../../Context/Shoppie";
import { ResponsivePoints } from "../../../helpers/Breakpoints";

const Cart = () => {
  const point = ResponsivePoints();

  const { cartData, totalPrice, cartList } = useAppContext();

  const [cartAnchor, setCartAnchor] = useState(null);

  const openCartPopover = (e) => {
    setCartAnchor(e.currentTarget);
  };
  const closeCartPopover = () => {
    setCartAnchor(null);
  };

  return (
    <>
      <IconButton
        sx={{ transition: "all 0.3s", "&:hover": { color: "primary.main" } }}
        color={cartData.length === 0 ? "primary" : "secondary"}
        aria-label="cart"
        onClick={openCartPopover}
      >
        <Badge sx={{ mr: 0.5 }} badgeContent={cartData.length} color="primary">
          {cartData.length === 0 ? <CartIcon /> : <CartFilledIcon />}
        </Badge>
      </IconButton>
      <Link href="/cart">
        <Button variant="text" color="secondary">
          {cartData.length === 0 && point.desktop ? (
            "cart"
          ) : cartData.length !== 0 ? (
            <Stack>
              {point.desktop ? "cart" : ""}
              <Typography color="primary.main" variant="subtitle2">
                ${totalPrice}
              </Typography>
            </Stack>
          ) : (
            ""
          )}
        </Button>
      </Link>
      <CartMenu anchor={cartAnchor} closePopover={closeCartPopover} />
    </>
  );
};

export default Cart;
