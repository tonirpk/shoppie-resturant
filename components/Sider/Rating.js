import React, { useState } from "react";
import Looks5Icon from "@mui/icons-material/Looks5";
import Looks4Icon from "@mui/icons-material/Looks4";
import Looks3Icon from "@mui/icons-material/Looks3";
import ListSubheader from "@mui/material/ListSubheader";
import List from "@mui/material/List";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import MenuItem from "@mui/material/MenuItem";
import Rating from "@mui/material/Rating";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import { useAppContext } from "../Context/Shoppie";
import { ResponsivePoints } from "../../helpers/Breakpoints";
import DownIcon from "@mui/icons-material/KeyboardArrowDown";
import {
  Stack,
  IconButton,
  Menu,
  Typography,
  ListItem,
  ListItemButton,
} from "@mui/material";

const ratings = [
  {
    iconActive: <Looks5Icon color="primary" />,
    iconUnactive: <Looks5Icon color="secondary" />,
    value: 5,
  },
  {
    iconActive: <Looks4Icon color="primary" />,
    iconUnactive: <Looks4Icon color="secondary" />,
    value: 4,
  },
  {
    iconActive: <Looks3Icon color="primary" />,
    iconUnactive: <Looks3Icon color="secondary" />,
    value: 3,
  },
];

const RatingComponent = ({ listHeaderStyles }) => {
  const { rateValue, setRateValue, setCurrentPage } = useAppContext();

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
    setRateValue(elValue);
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
            <Typography variant="h6">Rate</Typography>
            {!point.tablet && <DownIcon />}
          </ListSubheader>
          <Divider />
        </>
      }
    >
      {point.tablet && (
        <>
          {ratings.map((rating, idx) => (
            <ListItem key={idx} disablePadding>
              <ListItemButton value={rating.value} onClick={clickHandler}>
                <ListItemIcon>
                  {rating.value == rateValue
                    ? rating.iconActive
                    : rating.iconUnactive}
                </ListItemIcon>
                <ListItemText
                  primary={
                    <Rating name="read-only" value={rating.value} readOnly />
                  }
                />
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
        {ratings.map((rating, idx) => (
          <ListItem key={idx} disablePadding>
            <ListItemButton value={rating.value} onClick={clickHandler}>
              <ListItemIcon>
                {rating.value == rateValue
                  ? rating.iconActive
                  : rating.iconUnactive}
              </ListItemIcon>
              <ListItemText
                primary={
                  <Rating name="read-only" value={rating.value} readOnly />
                }
              />
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
    //           <Typography variant="h6">Rate</Typography>
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
    //       <MenuItem value={0} onClick={clickHandler}>
    //         {0 === rateValue ? (
    //           <ListItemIcon sx={{ minWidth: "35px" }}>
    //             <RestartAltIcon color="primary" />
    //           </ListItemIcon>
    //         ) : (
    //           <ListItemIcon sx={{ minWidth: "35px" }}>
    //             <RestartAltIcon color="secondary" />
    //           </ListItemIcon>
    //         )}
    //         <ListItemText primary="All" />
    //       </MenuItem>
    //       {ratings.map((rating, idx) => {
    //         return (
    //           <MenuItem value={rating.value} onClick={clickHandler} key={idx}>
    //             {rating.value === rateValue ? (
    //               <ListItemIcon sx={{ minWidth: "35px" }}>
    //                 {rating.iconActive}
    //               </ListItemIcon>
    //             ) : (
    //               <ListItemIcon sx={{ minWidth: "35px" }}>
    //                 {rating.iconUnactive}
    //               </ListItemIcon>
    //             )}
    //             <ListItemText>
    //               <Rating name="read-only" value={rating.value} readOnly />
    //             </ListItemText>
    //           </MenuItem>
    //         );
    //       })}
    //     </Menu>
    //   ) : (
    //     <>
    //       <MenuItem value={0} onClick={clickHandler}>
    //         {0 === rateValue ? (
    //           <ListItemIcon sx={{ minWidth: "35px" }}>
    //             <RestartAltIcon color="primary" />
    //           </ListItemIcon>
    //         ) : (
    //           <ListItemIcon sx={{ minWidth: "35px" }}>
    //             <RestartAltIcon color="secondary" />
    //           </ListItemIcon>
    //         )}
    //         <ListItemText primary="All" />
    //       </MenuItem>
    //       {ratings.map((rating, idx) => {
    //         return (
    //           <MenuItem value={rating.value} onClick={clickHandler} key={idx}>
    //             {rating.value === rateValue ? (
    //               <ListItemIcon sx={{ minWidth: "35px" }}>
    //                 {rating.iconActive}
    //               </ListItemIcon>
    //             ) : (
    //               <ListItemIcon sx={{ minWidth: "35px" }}>
    //                 {rating.iconUnactive}
    //               </ListItemIcon>
    //             )}
    //             <ListItemText>
    //               <Rating name="read-only" value={rating.value} readOnly />
    //             </ListItemText>
    //           </MenuItem>
    //         );
    //       })}
    //     </>
    //   )}
    // </List>
  );
};

export default RatingComponent;
