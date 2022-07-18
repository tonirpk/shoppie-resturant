import React from "react";
import Link from "next/link";
import {
  Badge,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import FaceIcon from "@mui/icons-material/Face";
import FavIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavFilledIcon from "@mui/icons-material/Favorite";
import CartIcon from "@mui/icons-material/ShoppingCartOutlined";
import CartFilledIcon from "@mui/icons-material/ShoppingCart";
import { useAppContext } from "../../Context/Shoppie";

const DrawerActions = ({ drawerCloseHandler }) => {
  const { favData, cartData } = useAppContext();
  const actionLinks = [
    {
      title: "User",
      icon: <FaceIcon />,
      link: "/user",
    },
    {
      title: "Wishlist",
      icon: (
        <Badge sx={{ mr: 0.5 }} badgeContent={favData.length} color="primary">
          {favData.length === 0 ? <FavIcon /> : <FavFilledIcon />}
        </Badge>
      ),
      link: "/fav",
    },
    {
      title: "Cart",
      icon: (
        <Badge sx={{ mr: 0.5 }} badgeContent={cartData.length} color="primary">
          {cartData.length === 0 ? <CartIcon /> : <CartFilledIcon />}
        </Badge>
      ),
      link: "/cart",
    },
  ];

  return (
    <List>
      {actionLinks.map((action, idx) => (
        <Link key={idx} href={action.link}>
          <ListItem disablePadding>
            <ListItemButton onClick={drawerCloseHandler}>
              <ListItemIcon>{action.icon}</ListItemIcon>
              <ListItemText primary={action.title} />
            </ListItemButton>
          </ListItem>
        </Link>
      ))}
    </List>
  );
};

export default DrawerActions;
