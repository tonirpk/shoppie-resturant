import { createTheme, responsiveFontSizes } from "@mui/material/styles";

// Create a theme instance.
let theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 480,
      md: 768,
      lg: 1024,
      xl: 1440,
    },
  },
  palette: {
    type: "light",
    primary: {
      main: "#3bb77e",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#253d4e",
      contrastText: "#ffffff",
    },
    background: {
      default: "#ffffff",
      paper: "#def9ec",
    },
    text: {
      primary: "#253d4e",
      secondary: "#253d4e",
    },
  },
  typography: {
    fontFamily: "Quicksand",
    // h2: {
    //   fontWeight: 700,
    // },
  },
  components: {
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "capitalize",
        },
        textSecondary: {
          "&:hover": {
            backgroundColor: "transparent",
            color: "#3bb77e",
          },
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          "&:hover": {
            color: "#3bb77e",
          },
          transition: "color 0.3s",
          textTransform: "capitalize",
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          "&:hover": {
            backgroundColor: "transparent",
          },
        },
      },
    },
    MuiListItem: {
      styleOverrides: {
        root: {
          transition: "color 0.3s",
          "&:hover": { color: "#3bb77e" },
          ".MuiListItemIcon-root": {
            minWidth: "40px",
            color: "#253d4e",
            transition: "color 0.3s",
          },
          "&:hover .MuiListItemIcon-root": { color: "#3bb77e" },
        },
      },
    },
    MuiListItemText: {
      styleOverrides: {
        primary: {
          fontWeight: 500,
        },
      },
    },
  },
});
theme = responsiveFontSizes(theme);

export default theme;
