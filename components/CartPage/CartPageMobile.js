import React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import InboxIcon from "@mui/icons-material/Inbox";
import DraftsIcon from "@mui/icons-material/Drafts";

import CategoryIcon from "@mui/icons-material/Category";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import NumbersIcon from "@mui/icons-material/Numbers";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";

import ItemCard from "./ItemCard";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { useAppContext } from "../Context/Shoppie";
import {
  Button,
  ButtonGroup,
  IconButton,
  Paper,
  Typography,
  Grid,
  Stack,
  TextField,
} from "@mui/material";

const CartPage = () => {
  const {
    cartData,
    incrementHandler,
    decrementHandler,
    removeFromCartHandler,
    totalPrice,
  } = useAppContext();

  console.log(cartData);

  return (
    <Grid container spacing={1}>
      <Grid item xs={12}>
        <List component={Paper}>
          {cartData.map((row) => (
            <Box
              sx={{
                borderBottom: "1px solid rgba(0, 0, 0, 0.09)",
                "&:nth-last-child(1)": {
                  borderBottom: "none",
                },
                py: 2,
              }}
            >
              <ListItem sx={{ py: 0 }}>
                <ListItemIcon>
                  <CategoryIcon />
                </ListItemIcon>
                <ListItemText
                  primary={
                    <ItemCard
                      img={row.img}
                      name={row.name}
                      rate={row.rate}
                      dsc={row.dsc}
                    />
                  }
                />
              </ListItem>
              <ListItem sx={{ py: 0 }}>
                <ListItemIcon>
                  <MonetizationOnIcon />
                </ListItemIcon>
                <ListItemText
                  primary={
                    <Typography
                      fontWeight={600}
                      variant="body2"
                      color="primary"
                    >
                      $
                      {Math.round(
                        (row.price * row.quantity + Number.EPSILON) * 100
                      ) / 100}
                    </Typography>
                  }
                />
              </ListItem>
              <ListItem sx={{ py: 0 }}>
                <ListItemIcon>
                  <NumbersIcon />
                </ListItemIcon>
                <ListItemText
                  primary={
                    <ButtonGroup
                      size="small"
                      variant="outlined"
                      color="primary"
                      aria-label="quantity"
                    >
                      <Button
                        onClick={() => incrementHandler(row.id)}
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
                        sx={{
                          "&:hover": {
                            bgcolor: "transparent",
                            cursor: "default",
                          },
                        }}
                      >
                        {row.quantity}
                      </Button>
                      <Button
                        onClick={() => decrementHandler(row.id)}
                        disableElevation
                        variant="contained"
                      >
                        -
                      </Button>
                    </ButtonGroup>
                  }
                />
              </ListItem>
              <ListItem sx={{ py: 0 }}>
                <ListItemIcon>
                  <RemoveCircleIcon />
                </ListItemIcon>
                <ListItemText
                  primary={
                    <Button
                      variant="contained"
                      size="small"
                      color="error"
                      aria-label="remove"
                      onClick={() => removeFromCartHandler(row)}
                    >
                      Delete
                    </Button>
                  }
                />
              </ListItem>
            </Box>
          ))}
        </List>
      </Grid>
      <Grid item xs={12}>
        <Stack
          justifyContent="space-between"
          spacing={3}
          sx={{
            px: { xs: 1, lg: 2 },
            py: 5,
            boxShadow: 2,
            height: "100%",
            maxWidth: 300,
          }}
        >
          <Typography variant="h6">Order Summary</Typography>
          <Divider />

          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
          >
            <Typography variant="body1">Items: {cartData.length}</Typography>
            <Typography color="primary" variant="body1">
              ${totalPrice}
            </Typography>
          </Stack>
          <Stack spacing={1}>
            <Typography variant="body1">Promo code</Typography>
            <TextField size="small" label="Enter your code" />
          </Stack>
          <Button
            sx={{ alignSelf: "flex-start" }}
            variant="contained"
            color="primary"
          >
            Apply
          </Button>
          <Divider />
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
          >
            <Typography variant="body1">Total cost</Typography>
            <Typography color="primary" variant="body1">
              ${totalPrice}
            </Typography>
          </Stack>
        </Stack>
      </Grid>
    </Grid>
  );
};

export default CartPage;
