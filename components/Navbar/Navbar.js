import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/icons-material/Menu";
import Logo from "./Logo";
import Navlist from "./Navlist";
import NavActions from "./NavActions/NavActions";
import { ResponsivePoints } from "../../helpers/Breakpoints";
import { Box } from "@mui/material";
import StyledDrawer from "./Drawer/StyledDrawer";
import { useAppContext } from "../Context/Shoppie";

const Navbar = () => {
  const point = ResponsivePoints();
  const { drawerOpenHandler } = useAppContext();

  return (
    <Box sx={{ mx: { xs: 3, md: 8, lg: 10 } }} component="nav">
      <AppBar elevation={0} position="static" color="transparent">
        <Toolbar disableGutters sx={{ justifyContent: "space-between" }}>
          <Logo />
          {point.navbarC ? (
            <>
              <Navlist />
              <NavActions />
            </>
          ) : (
            <IconButton color="secondary" onClick={drawerOpenHandler}>
              <Menu />
            </IconButton>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
