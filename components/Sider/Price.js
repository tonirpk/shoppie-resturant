import React, { useContext, useState } from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import ListSubheader from "@mui/material/ListSubheader";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import MenuItem from "@mui/material/MenuItem";
import { useAppContext } from "../Context/Shoppie";
import Button from "@mui/material/Button";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import RadioUncheck from "@mui/icons-material/RadioButtonUnchecked";
import RadioChecked from "@mui/icons-material/RadioButtonChecked";
import { ResponsivePoints } from "../../helpers/Breakpoints";
import DownIcon from "@mui/icons-material/KeyboardArrowDown";

import EggAltIcon from "@mui/icons-material/EggAlt";
import {
  Stack,
  IconButton,
  Menu,
  Typography,
  ListItem,
  ListItemButton,
} from "@mui/material";

const prices = [
  { title: "All", value: 1 },
  { title: "Under $100", value: 2 },
  { title: "$50 to $100", value: 3 },
  { title: "Under $50", value: 4 },
  { title: "Above $100", value: 5 },
];

const Price = () => {
  const { priceValue, setPriceValue, setCurrentPage } = useAppContext();

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
    const elValue = e.currentTarget.getAttribute("value");
    setPriceValue(elValue);
    setCurrentPage(1);
    closeMenuItemHandler();
  };

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
            <Typography variant="h6">Price</Typography>
            {!point.tablet && <DownIcon />}
          </ListSubheader>
          <Divider />
        </>
      }
    >
      {point.tablet && (
        <>
          {prices.map((price, idx) => (
            <ListItem key={idx} disablePadding>
              <ListItemButton value={price.value} onClick={clickHandler}>
                <ListItemIcon>
                  {price.value == priceValue ? (
                    <RadioChecked color="primary" />
                  ) : (
                    <RadioUncheck />
                  )}
                </ListItemIcon>
                <ListItemText primary={price.title} />
              </ListItemButton>
            </ListItem>
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
        {prices.map((price, idx) => (
          <ListItem key={idx} disablePadding>
            <ListItemButton value={price.value} onClick={clickHandler}>
              <ListItemIcon>
                {price.value == priceValue ? (
                  <RadioChecked color="primary" />
                ) : (
                  <RadioUncheck />
                )}
              </ListItemIcon>
              <ListItemText primary={price.title} />
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
    //           <Typography variant="h6">Price</Typography>
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
    //       {prices.map((price, idx) => {
    //         return (
    //           <MenuItem key={idx} onClick={clickHandler} value={price.value}>
    //             <ListItemIcon sx={{ minWidth: "40px" }}>
    //               {price.value === priceValue ? (
    //                 <RadioChecked color="primary" />
    //               ) : (
    //                 <RadioUncheck color="secondary" />
    //               )}
    //             </ListItemIcon>
    //             <ListItemText primary={price.title} />
    //           </MenuItem>
    //         );
    //       })}
    //     </Menu>
    //   ) : (
    //     <>
    //       {prices.map((price, idx) => {
    //         return (
    //           <MenuItem key={idx} onClick={clickHandler} value={price.value}>
    //             <ListItemIcon sx={{ minWidth: "40px" }}>
    //               {price.value === priceValue ? (
    //                 <RadioChecked color="primary" />
    //               ) : (
    //                 <RadioUncheck color="secondary" />
    //               )}
    //             </ListItemIcon>
    //             <ListItemText primary={price.title} />
    //           </MenuItem>
    //         );
    //       })}
    //     </>
    //   )}
    // </List>
  );
};

export default Price;
