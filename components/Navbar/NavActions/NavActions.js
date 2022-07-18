import React from "react";
import { useAppContext } from "../../Context/Shoppie";
import ButtonGroup from "@mui/material/ButtonGroup";
import Cart from "./Cart";
import Whishlist from "./Whishlist";
import User from "./User";

const NavActions = () => {
  return (
    <ButtonGroup
      disableRipple
      variant="text"
      color="secondary"
      aria-label="account controls"
      sx={{
        ".MuiButtonGroup-grouped:not(:last-of-type)": {
          border: "none",
        },
      }}
    >
      <Cart />
      <Whishlist />
      <User />
    </ButtonGroup>
  );
};

export default NavActions;
