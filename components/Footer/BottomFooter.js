import React from "react";
import Link from "next/link";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import paymentImg from "./imgs/Payment.png";
import { Stack, IconButton } from "@mui/material";
import FacebookIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Avatar from "@mui/material/Avatar";

const socialIcons = [
  {
    icon: <FacebookIcon />,
    link: "/",
  },
  {
    icon: <InstagramIcon />,
    link: "/",
  },
  {
    icon: <TwitterIcon />,
    link: "/",
  },
  {
    icon: <LinkedInIcon />,
    link: "/",
  },
];

const toolbarStyles = {
  justifyContent: "space-between",
  flexWrap: "wrap",
  "& > *": { m: 1 },
};

const BottomFooter = () => {
  return (
    <AppBar elevation={0} position="static" color="transparent">
      <Toolbar sx={{ ...toolbarStyles }}>
        <Typography variant="body1">© 2022, All rights reserved</Typography>
        <img style={{ maxWidth: "100%" }} src={paymentImg.src} alt="payment" />
        <Stack
          direction="row"
          flexWrap="wrap"
          sx={{ "&>*": { my: 1, mx: 0.4 } }}
        >
          {socialIcons.map((social, idx) => {
            return (
              <Link key={idx} href={social.link}>
                <Avatar sx={{ bgcolor: "#3bb77e", cursor: "pointer" }}>
                  {social.icon}
                </Avatar>
              </Link>
            );
          })}
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default BottomFooter;
