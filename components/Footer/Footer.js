import React from "react";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import LocationIcon from "@mui/icons-material/LocationOnOutlined";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/MailOutline";
import ClockIcon from "@mui/icons-material/AccessTimeOutlined";
import Logo from "../Navbar/Logo";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { Divider } from "@mui/material";
import BottomFooter from "./BottomFooter";

const shoppie = [
  {
    label: "Our Address: 1762 School House Road ",
    icon: <LocationIcon color="primary" />,
  },
  {
    label: "Call Us: 1233-777 ",
    icon: <CallIcon color="primary" />,
  },
  {
    label: "Email Us: shoppie@contact.com ",
    icon: <EmailIcon color="primary" />,
  },
  {
    label: "Work Hours: 8:00 - 20:00, Sunday - Thursday ",
    icon: <ClockIcon color="primary" />,
  },
];
const accounts = ["Wishlist", "Cart", "Track Order", "Shipping Details"];

const userfulLinks = [
  "About Us",
  "Conact",
  "Hot deals",
  "Promotions",
  "New meals",
];

const helpCenters = [
  "Payments",
  "Refund",
  "Checkout",
  "Shipping",
  "Q&A",
  "Privacy Policy",
];

const footerNavlistStyles = {
  "& > *": {
    mx: 2,
    my: 1,
  },
  justifyContent: { xs: "flex-start", sm: "space-between" },
  flexWrap: "wrap",
};

const Footer = () => {
  return (
    <Box sx={{ mx: { xs: 3, md: 8, lg: 10 } }} component="footer">
      <Stack component="footer" direction="row" sx={{ ...footerNavlistStyles }}>
        {/* SHOPPIE */}
        <Stack alignItems="flex-start" spacing={1}>
          <Logo />
          {shoppie.map((shop, idx) => {
            return (
              <Button
                key={idx}
                sx={{ cursor: "default", textAlign: "left" }}
                startIcon={shop.icon}
                variant="text"
                color="secondary"
              >
                {shop.label}
              </Button>
            );
          })}
        </Stack>

        {/* ACCOUNT */}
        <Stack alignItems="flex-start" spacing={1}>
          <Typography variant="h6" sx={{ fontWeight: 500 }}>
            Account
          </Typography>
          {accounts.map((account, idx) => {
            return (
              <Button key={idx} variant="text" color="secondary">
                {account}
              </Button>
            );
          })}
        </Stack>

        {/* Useful Links */}
        <Stack alignItems="flex-start" spacing={1}>
          <Typography variant="h6" sx={{ fontWeight: 500 }}>
            Useful links
          </Typography>
          {userfulLinks.map((link, idx) => {
            return (
              <Button key={idx} variant="text" color="secondary">
                {link}
              </Button>
            );
          })}
        </Stack>

        {/* Help Center */}
        <Stack alignItems="flex-start" spacing={1}>
          <Typography variant="h6" sx={{ fontWeight: 500 }}>
            Help Center
          </Typography>

          {helpCenters.map((center, idx) => {
            return (
              <Button key={idx} variant="text" color="secondary">
                {center}
              </Button>
            );
          })}
        </Stack>
      </Stack>
      <Divider />
      <BottomFooter />
    </Box>
  );
};

export default Footer;
