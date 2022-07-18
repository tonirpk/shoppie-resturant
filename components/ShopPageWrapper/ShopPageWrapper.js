import React from "react";
import PageWrapper from "../PageWrapper/PageWrapper";
import Sider from "../Sider/Sider";
import Grid from "@mui/material/Grid";
import { ResponsivePoints } from "../../helpers/Breakpoints";
import { Box } from "@mui/material";

const ShopPageWrapper = ({ children }) => {
  const point = ResponsivePoints();

  return (
    <Box sx={{ mx: { xs: 3, md: 8, lg: 10 }, my: 10 }}>
      <Grid container spacing={1}>
        <Grid item xs={12} lg={3}>
          <Sider />
        </Grid>
        <Grid item xs={12} lg={9}>
          {children}
        </Grid>
      </Grid>
    </Box>
  );
};

export default ShopPageWrapper;
