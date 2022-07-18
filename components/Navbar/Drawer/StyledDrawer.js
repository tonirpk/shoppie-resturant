import React from "react";
import { styled } from "@mui/material/styles";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { useAppContext } from "../../Context/Shoppie";
import Logo from "../Logo";
import CloseIcon from "@mui/icons-material/Close";
import { ResponsivePoints } from "../../../helpers/Breakpoints";
import DrawerActions from "./DrawerActions";
import DrawerNavlist from "./DrawerNavlist";

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  justifyContent: "space-between",
}));

const StyledDrawer = () => {
  const { drawerCloseHandler, openDrawer } = useAppContext();
  const point = ResponsivePoints();
  const drawerWidth = point.smallMobile
    ? { sx: { width: 240 } }
    : { sx: { width: "100%" } };

  // if (point.navbarC) {
  //   drawerCloseHandler();
  // }

  return (
    <Drawer
      PaperProps={drawerWidth}
      variant="persistent"
      anchor="right"
      open={openDrawer}
    >
      <DrawerHeader>
        <Logo />
        <IconButton color="secondary" onClick={drawerCloseHandler}>
          <CloseIcon />
        </IconButton>
      </DrawerHeader>
      <Divider />
      <DrawerActions drawerCloseHandler={drawerCloseHandler} />
      <Divider variant="middle" />
      <DrawerNavlist drawerCloseHandler={drawerCloseHandler} />
    </Drawer>
  );
};

export default StyledDrawer;
