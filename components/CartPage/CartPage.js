import React from "react";
import styled from "@emotion/styled";
import { useAppContext } from "../Context/Shoppie";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import {
  Box,
  Button,
  ButtonGroup,
  IconButton,
  Stack,
  Typography,
  Grid,
  Divider,
  TextField,
} from "@mui/material";
import ItemCard from "./ItemCard";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import CartPageMobile from "./CartPageMobile";
import { ResponsivePoints } from "../../helpers/Breakpoints";

const CartPage = () => {
  const {
    cartData,
    incrementHandler,
    decrementHandler,
    removeFromCartHandler,
    totalPrice,
  } = useAppContext();

  const point = ResponsivePoints();

  return (
    <Box sx={{ mx: { xs: 3, md: 8, lg: 10 }, my: 10 }}>
      {cartData.length === 0 ? (
        <Box sx={{ textAlign: "center", p: 10 }} component={Paper}>
          <Typography fontWeight={600} variant="h4">
            No items in the cart :(
          </Typography>
        </Box>
      ) : (
        <>
          {point.tablet ? (
            <Grid container spacing={1}>
              <Grid item md={12} lg={9}>
                <TableContainer component={Paper}>
                  <Table aria-label="simple table">
                    <TableHead>
                      <TableRow>
                        <TableCell>Item</TableCell>
                        <TableCell align="right">Price</TableCell>
                        <TableCell align="center">QTY.</TableCell>
                        <TableCell align="right">Remove</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {cartData.map((row) => (
                        <TableRow
                          key={row.name}
                          sx={{
                            "&:last-child td, &:last-child th": { border: 0 },
                          }}
                        >
                          <TableCell component="th" scope="row">
                            <ItemCard
                              img={row.img}
                              name={row.name}
                              rate={row.rate}
                              dsc={row.dsc}
                            />
                          </TableCell>
                          <TableCell align="right">
                            <Typography
                              fontWeight={600}
                              variant="body2"
                              color="primary"
                            >
                              $
                              {Math.round(
                                (row.price * row.quantity + Number.EPSILON) *
                                  100
                              ) / 100}
                            </Typography>
                          </TableCell>
                          <TableCell align="center">
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
                          </TableCell>
                          <TableCell align="right">
                            <IconButton
                              aria-label="remove"
                              onClick={() => removeFromCartHandler(row)}
                            >
                              <DeleteForeverIcon color="error" />
                            </IconButton>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </Grid>
              <Grid item md={12} lg={3}>
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
                    <Typography variant="body1">
                      Items: {cartData.length}
                    </Typography>
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
          ) : (
            <CartPageMobile />
          )}
        </>
      )}
    </Box>
  );
};

export default CartPage;
