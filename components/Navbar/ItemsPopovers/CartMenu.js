import React, { useEffect } from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useAppContext } from "../../Context/Shoppie";
import CardCart from "./CardCart";
import {
  Divider,
  List,
  ListItem,
  ListItemText,
  Stack,
  Typography,
  IconButton,
  Button,
  ButtonGroup,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

const CartMenu = ({ anchor, closePopover }) => {
  const {
    cartData,
    totalPrice,
    emptyCartList,
    removeFromCartHandler,
    cartList,
  } = useAppContext();

  return (
    <>
      {cartData.length === 0 ? (
        <Menu
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "center",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "center",
          }}
          open={Boolean(anchor)}
          anchorEl={anchor}
          onClose={closePopover}
        >
          <List sx={{ py: 0 }}>
            <ListItem sx={{ py: 0 }}>
              <Typography fontWeight={600} variant="body1">
                No items in the cart
              </Typography>
            </ListItem>
          </List>
        </Menu>
      ) : (
        <Menu
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "center",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "center",
          }}
          open={Boolean(anchor)}
          anchorEl={anchor}
          onClose={closePopover}
        >
          {cartData.map((cart, idx) => {
            return (
              <MenuItem key={idx}>
                <CardCart
                  id={cart.id}
                  img={cart.img}
                  name={cart.name}
                  rate={cart.rate}
                  price={cart.price}
                  cart={cart}
                />
              </MenuItem>
            );
          })}
          <Divider variant="middle" />
          <List sx={{ py: 0 }}>
            <ListItem sx={{ py: 0 }}>
              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                width="100%"
              >
                <Typography fontWeight={600} variant="body1">
                  Total price:{" "}
                  <span style={{ color: "#3bb77e" }}>${totalPrice}</span>
                </Typography>
                <ButtonGroup
                  variant="outlined"
                  color="primary"
                  size="medium"
                  aria-label="checkclear"
                >
                  <Button disableElevation variant="contained">
                    Check out
                  </Button>
                  <Button
                    onClick={emptyCartList}
                    endIcon={<DeleteIcon color="error" />}
                    color="error"
                  >
                    Clear all
                  </Button>
                </ButtonGroup>
              </Stack>
            </ListItem>
          </List>
        </Menu>
      )}
    </>
  );
};

export default CartMenu;
