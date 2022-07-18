import React from "react";
import Link from "next/link";
import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import LocalDiningIcon from "@mui/icons-material/LocalDining";
import FeedIcon from "@mui/icons-material/Feed";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const navlistLinks = [
  {
    label: "home",
    icon: <HomeIcon />,
    href: "/",
  },
  {
    label: "food",
    icon: <LocalDiningIcon />,
    href: "/shop",
  },
  {
    label: "news",
    icon: <FeedIcon />,
    href: "/news",
  },
  {
    label: "Stores",
    icon: <LocationOnIcon />,
    href: "/locations",
  },
];

const DrawerNavlist = ({ drawerCloseHandler }) => {
  return (
    <List>
      {navlistLinks.map((list, idx) => (
        <Link key={idx} href={list.href}>
          <ListItem disablePadding>
            <ListItemButton onClick={drawerCloseHandler}>
              <ListItemIcon>{list.icon}</ListItemIcon>
              <ListItemText primary={list.label} />
            </ListItemButton>
          </ListItem>
        </Link>
      ))}
    </List>
  );
};

export default DrawerNavlist;
