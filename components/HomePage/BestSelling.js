import React from "react";
import Grid from "@mui/material/Grid";
import {
  Card,
  CardHeader,
  CardMedia,
  LinearProgress,
  Rating,
  Stack,
  Typography,
  Button,
  TextField,
  InputAdornment,
} from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import bgImg from "./imgs/bgPattern.png";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import EmailIcon from "@mui/icons-material/Email";
import KeyIcon from "@mui/icons-material/Key";

const data = [
  {
    label: "Save 10%",
    img: "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/137148/Gramercy-Tavern-Burger-and-Kielbasa-Kit-6.4.21-72ppi-1x1-15.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
    menu: "Burger",
    name: "Gramercy Tavern",
    rate: 5,
    price: 99,
    oldPrice: 120,
    prosess: 20,
    outOf: 50,
    // sold: 20,
  },
  {
    label: "Best deal",
    img: "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/135494/Joe_s-KC-Z-Man-Product-6.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
    menu: "BBQ",
    name: "Joe's KC BBQ",
    rate: 4,
    price: 79,
    oldPrice: 99,
    prosess: 7,
    outOf: 20,
    // sold: 20,
  },
  {
    label: "Best deal",
    img: "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/108725/hong-kong-boba-tea-kit-for-6.63841de36d8e5edfafa13023fc303285.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
    menu: "Drinks",
    name: "New Territories",
    rate: 4,
    price: 23,
    oldPrice: 47,
    prosess: 32,
    outOf: 50,
    // sold: 20,
  },
  {
    label: "Best deal",
    img: "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/97981/2-lou-malnatis-deep-dish-pizzas.bf0fe065d251a9cca3925b269d443a27.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
    menu: "Pizzas",
    name: "Lou Malnati's Pizza",
    rate: 4,
    price: 67,
    oldPrice: 81,
    prosess: 2,
    outOf: 10,
    // sold: 20,
  },
];

const formStyle = {
  position: "relative",
  background: `url(${bgImg.src}) repeat `,
  backgroundSize: "contain",
  backgroundPosition: "center",

  zIndex: -2,
  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    backgroundColor: "rgba(255, 245, 225, 0.7)",
    zIndex: -1,
  },
};

const BestSelling = () => {
  return (
    <div>
      <Grid container spacing={2}>
        {data.map((el, idx) => {
          return (
            <Grid key={idx} item xs={12} sm={6} md={4} lg={2.4}>
              <Card
                sx={{
                  bgcolor: "transparent",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  p: 1,
                }}
              >
                <CardMedia
                  component="img"
                  height="194"
                  image={el.img}
                  alt={el.name}
                />
                <Stack spacing={1}>
                  <Typography variant="body2">{el.menu}</Typography>
                  <Typography fontWeight={600} variant="body1">
                    {el.name}
                  </Typography>
                  <Rating
                    size="small"
                    name="read-only"
                    value={el.rate}
                    readOnly
                  />
                  <Stack direction="row" alignItems="center" spacing={1}>
                    <Typography
                      fontWeight={600}
                      color="primary.main"
                      variant="body1"
                    >
                      ${el.price}
                    </Typography>
                    <Typography variant="caption">
                      <s>${el.oldPrice}</s>
                    </Typography>
                  </Stack>
                  <LinearProgress
                    variant="determinate"
                    value={((el.prosess - 0) * 100) / (el.outOf - 0)}
                  />
                  <Typography variant="body2">{`Sold: ${el.prosess}/${el.outOf}`}</Typography>
                </Stack>
                <Button
                  sx={{ mt: 2 }}
                  fullWidth
                  startIcon={<AddShoppingCartIcon />}
                  variant="contained"
                  color="primary"
                >
                  Add to cart
                </Button>
              </Card>
            </Grid>
          );
        })}
        <Grid item xs={12} sm={6} md={4} lg={2.4}>
          <Card
            sx={{
              ...formStyle,
              height: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              p: 1,
            }}
          >
            <Stack textAlign="center" spacing={2}>
              <Typography fontWeight={600} variant="h4">
                10% OFF
              </Typography>
              <Typography fontWeight={400} variant="h6">
                For new member sign up at the first time
              </Typography>
              <TextField
                margin="dense"
                sx={{ bgcolor: "#fff" }}
                label="Email"
                variant="outlined"
                size="large"
                placeholder="Please enter your email..."
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <EmailIcon />
                    </InputAdornment>
                  ),
                }}
              />
              <TextField
                margin="dense"
                sx={{ bgcolor: "#fff" }}
                label="Email"
                variant="outlined"
                size="large"
                placeholder="Please enter a password..."
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <KeyIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </Stack>
            <Button
              sx={{ mt: 2 }}
              size="large"
              fullWidth
              variant="contained"
              color="primary"
            >
              Register Now
            </Button>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default BestSelling;
