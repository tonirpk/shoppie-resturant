import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import LunchDiningIcon from "@mui/icons-material/LunchDining";
import BreakfastDiningIcon from "@mui/icons-material/BreakfastDining";
import EggAltIcon from "@mui/icons-material/EggAlt";
import BlenderIcon from "@mui/icons-material/Blender";
import LocalPizzaIcon from "@mui/icons-material/LocalPizza";
import RestaurantOutlinedIcon from "@mui/icons-material/RestaurantOutlined";
import ListSubheader from "@mui/material/ListSubheader";
import List from "@mui/material/List";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import MenuItem from "@mui/material/MenuItem";
import { useAppContext } from "../Context/Shoppie";
import {
  Menu,
  IconButton,
  Stack,
  Typography,
  ListItem,
  ListItemButton,
} from "@mui/material";
import DownIcon from "@mui/icons-material/KeyboardArrowDown";
import { ResponsivePoints } from "../../helpers/Breakpoints";

const populars = [
  {
    title: "All",
    iconUnactive: <RestaurantOutlinedIcon color="secondary" />,
    iconActive: <RestaurantOutlinedIcon color="primary" />,
    href: "our-foods",
  },
  {
    title: "Burgers",
    iconUnactive: <LunchDiningIcon color="secondary" />,
    iconActive: <LunchDiningIcon color="primary" />,
    href: "burgers",
  },
  {
    title: "Breads",
    iconUnactive: <BreakfastDiningIcon color="secondary" />,
    iconActive: <BreakfastDiningIcon color="primary" />,
    href: "breads",
  },
  {
    title: "Sandwiches",
    iconUnactive: <EggAltIcon color="secondary" />,
    iconActive: <EggAltIcon color="primary" />,
    href: "sandwiches",
  },
  {
    title: "Drinks",
    iconUnactive: <BlenderIcon color="secondary" />,
    iconActive: <BlenderIcon color="primary" />,
    href: "drinks",
  },
  {
    title: "Pizzas",
    iconUnactive: <LocalPizzaIcon color="secondary" />,
    iconActive: <LocalPizzaIcon color="primary" />,
    href: "pizzas",
  },
];

const Popular = () => {
  const {
    foodValue,
    setFoodValue,
    setRateValue,
    setPriceValue,
    setCurrentPage,
  } = useAppContext();

  const point = ResponsivePoints();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const openMenuItemHandler = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const closeMenuItemHandler = () => {
    setAnchorEl(null);
  };

  const clickHandler = (e) => {
    setRateValue(0);
    setPriceValue(1);
    setCurrentPage(1);
    closeMenuItemHandler();
  };

  const { asPath } = useRouter();

  return (
    <List
      subheader={
        <>
          <ListSubheader
            onClick={!point.tablet ? openMenuItemHandler : () => {}}
            sx={{
              display: "flex",
              alignItems: "center",
              cursor: { xs: "pointer", md: "default" },
            }}
            disableSticky
            component="div"
          >
            <Typography variant="h6">Menu</Typography>
            {!point.tablet && <DownIcon />}
          </ListSubheader>
          <Divider />
        </>
      }
    >
      {point.tablet && (
        <>
          {populars.map((popular, idx) => (
            <Link scroll={false} href={`/shop/${popular.href}`} key={idx}>
              <ListItem disablePadding>
                <ListItemButton onClick={clickHandler}>
                  <ListItemIcon>
                    {`/shop/${popular.href}` === asPath
                      ? popular.iconActive
                      : popular.iconUnactive}
                  </ListItemIcon>
                  <ListItemText primary={popular.title} />
                </ListItemButton>
              </ListItem>
            </Link>
          ))}
        </>
      )}

      <Menu
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        transformOrigin={{ vertical: "top", horizontal: "center" }}
        anchorEl={anchorEl}
        open={open}
        onClose={closeMenuItemHandler}
      >
        {populars.map((popular, idx) => (
          <ListItem key={idx} disablePadding>
            <ListItemButton aria-label={popular.food} onClick={clickHandler}>
              <ListItemIcon>
                {popular.food === foodValue
                  ? popular.iconActive
                  : popular.iconUnactive}
              </ListItemIcon>
              <ListItemText primary={popular.title} />
            </ListItemButton>
          </ListItem>
        ))}
      </Menu>
    </List>

    // <List
    //   component="nav"
    //   subheader={
    //     <>
    //       <Stack direction="row" alignItems="center">
    //         <ListSubheader
    //           disableSticky
    //           sx={{ ...listHeaderStyles }}
    //           component="div"
    //         >
    //           <Typography variant="h6">Menu</Typography>
    //         </ListSubheader>
    //         {!point.upLaptop && (
    //           <IconButton onClick={openMenuItemHandler}>
    //             <DownIcon />
    //           </IconButton>
    //         )}
    //       </Stack>
    //       <Divider />
    //     </>
    //   }
    // >
    //   {!point.upLaptop ? (
    //     <Menu
    //       anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
    //       transformOrigin={{ vertical: "top", horizontal: "center" }}
    //       anchorEl={anchorEl}
    //       open={open}
    //       onClose={closeMenuItemHandler}
    //     >
    //       {populars.map((popular, idx) => {
    //         return (
    //           <MenuItem
    //             aria-label={popular.food}
    //             key={idx}
    //             onClick={clickHandler}
    //           >
    //             {popular.food === foodValue ? (
    //               <ListItemIcon sx={{ minWidth: "40px" }}>
    //                 {popular.iconActive}
    //               </ListItemIcon>
    //             ) : (
    //               <ListItemIcon sx={{ minWidth: "40px" }}>
    //                 {popular.iconUnactive}
    //               </ListItemIcon>
    //             )}

    //             <ListItemText primary={popular.title} />
    //           </MenuItem>
    //         );
    //       })}
    //     </Menu>
    //   ) : (
    //     <>
    //       {populars.map((popular, idx) => {
    //         return (
    //           <MenuItem
    //             aria-label={popular.food}
    //             key={idx}
    //             onClick={clickHandler}
    //           >
    //             {popular.food === foodValue ? (
    //               <ListItemIcon sx={{ minWidth: "40px" }}>
    //                 {popular.iconActive}
    //               </ListItemIcon>
    //             ) : (
    //               <ListItemIcon sx={{ minWidth: "40px" }}>
    //                 {popular.iconUnactive}
    //               </ListItemIcon>
    //             )}

    //             <ListItemText primary={popular.title} />
    //           </MenuItem>
    //         );
    //       })}
    //     </>
    //   )}
    // </List>
  );
};

export default Popular;
