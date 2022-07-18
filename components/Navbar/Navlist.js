import React, { useState } from "react";
import Link from "next/link";
import HomeIcon from "@mui/icons-material/Home";
import LocalDiningIcon from "@mui/icons-material/LocalDining";
import FeedIcon from "@mui/icons-material/Feed";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { ResponsivePoints } from "../../helpers/Breakpoints";

const navlistPages = [
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

const Navlist = () => {
  const point = ResponsivePoints();

  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const WrapTab = (props) => {
    return (
      <Link href={props.href} style={{ width: "100%" }}>
        <Tab {...props} />
      </Link>
    );
  };

  return (
    <Tabs
      textColor="primary"
      value={value}
      onChange={handleChange}
      aria-label="top navlist"
    >
      {navlistPages.map((page, idx) => {
        return (
          <WrapTab
            sx={!point.desktop ? { minWidth: "fit-content" } : {}}
            href={page.href}
            key={idx}
            icon={page.icon}
            label={point.desktop ? `${page.label}` : ""}
            iconPosition="start"
          />
        );
      })}
    </Tabs>
  );
};

export default Navlist;
