import React, { useState } from "react";
import Button from "@mui/material/Button";
import UserMenu from "../ItemsPopovers/UserMenu";
import FaceIcon from "@mui/icons-material/Face";
import { ResponsivePoints } from "../../../helpers/Breakpoints";

const User = () => {
  const point = ResponsivePoints();

  const [userAnchor, setUserAnchor] = useState(null);

  const openUserPopover = (e) => {
    setUserAnchor(e.currentTarget);
  };
  const closeUserPopover = () => {
    setUserAnchor(null);
  };

  return (
    <>
      <Button
        startIcon={<FaceIcon />}
        variant="text"
        color="secondary"
        onClick={openUserPopover}
      >
        {point.desktop && "User Name"}
      </Button>
      <UserMenu anchor={userAnchor} closePopover={closeUserPopover} />
    </>
  );
};

export default User;
