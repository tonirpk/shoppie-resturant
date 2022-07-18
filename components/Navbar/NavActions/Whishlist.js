import React, { useState } from "react";
import { Badge, Button, IconButton } from "@mui/material";
import WhishlistMenu from "../ItemsPopovers/WhishlistMenu";
import FavIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavFilledIcon from "@mui/icons-material/Favorite";
import { useAppContext } from "../../Context/Shoppie";
import { ResponsivePoints } from "../../../helpers/Breakpoints";

const Whishlist = () => {
  const point = ResponsivePoints();
  const { favData, favList } = useAppContext();

  const [favAnchor, setFavAnchor] = useState(null);

  const openFavPopover = (e) => {
    setFavAnchor(e.currentTarget);
  };
  const closeFavPopover = () => {
    setFavAnchor(null);
  };
  return (
    <>
      <IconButton
        sx={{ transition: "all 0.3s", "&:hover": { color: "primary.main" } }}
        color={favData.length === 0 ? "primary" : "secondary"}
        aria-label="fav"
        onClick={openFavPopover}
      >
        <Badge sx={{ mr: 0.5 }} badgeContent={favData.length} color="primary">
          {favData.length === 0 ? <FavIcon /> : <FavFilledIcon />}
        </Badge>
      </IconButton>
      <Button variant="text" color="secondary">
        {point.desktop && "wishlist"}
      </Button>
      <WhishlistMenu anchor={favAnchor} closePopover={closeFavPopover} />
    </>
  );
};

export default Whishlist;
