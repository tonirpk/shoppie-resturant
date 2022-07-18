import React, { useEffect } from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useAppContext } from "../../Context/Shoppie";
import {
  Button,
  Divider,
  List,
  ListItem,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import CardWishlist from "./CardWishlist";
import DeleteIcon from "@mui/icons-material/Delete";

const WhishlistMenu = ({ anchor, closePopover }) => {
  const { favData, emptyFavList, favList } = useAppContext();

  return (
    <>
      {favData.length === 0 ? (
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
                No items in the wishlist
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
          {favData.map((fav, idx) => {
            return (
              <MenuItem key={idx}>
                <CardWishlist
                  img={fav.img}
                  name={fav.name}
                  rate={fav.rate}
                  price={fav.price}
                  fav={fav}
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
                <Typography fontWeight={600} variant="body1"></Typography>
                <Button
                  onClick={emptyFavList}
                  endIcon={<DeleteIcon color="error" />}
                  variant="outlined"
                  color="error"
                >
                  Clear all
                </Button>
              </Stack>
            </ListItem>
          </List>
        </Menu>
      )}
    </>
  );
};

export default WhishlistMenu;
