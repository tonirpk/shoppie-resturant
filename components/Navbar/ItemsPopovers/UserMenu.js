import React from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

const UserMenu = ({ anchor, closePopover }) => {
  return (
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
      <MenuItem onClick={closePopover}>Profile</MenuItem>
      <MenuItem onClick={closePopover}>My account</MenuItem>
      <MenuItem onClick={closePopover}>Logout</MenuItem>
    </Menu>
  );
};

export default UserMenu;
