import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

export function ResponsivePoints() {
  const theme = useTheme();

  const breakpointsValue = {
    //Targets screen sizes greater than or equal to the given breakpoint.
    smallMobile: useMediaQuery(theme.breakpoints.up(320)),
    mobile: useMediaQuery(theme.breakpoints.up(480)),
    tablet: useMediaQuery(theme.breakpoints.up(768)),
    desktop: useMediaQuery(theme.breakpoints.up(992)),
    largeDevices: useMediaQuery(theme.breakpoints.up(1200)),

    // Targets screen sizes up to and including the given breakpoint
    dSmallMobile: useMediaQuery(theme.breakpoints.down(320)),
    dMobile: useMediaQuery(theme.breakpoints.down(480)),
    dTablet: useMediaQuery(theme.breakpoints.down(768)),
    dDesktop: useMediaQuery(theme.breakpoints.down(992)),
    dLargeDevices: useMediaQuery(theme.breakpoints.down(1200)),

    // Costom points in case needed
    navbarC: useMediaQuery(theme.breakpoints.up(600)),
  };

  return breakpointsValue;
}
